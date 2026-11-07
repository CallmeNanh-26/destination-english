// Learner accounts (Firebase Auth: Google or email + password) and automatic sync of all study data (Firestore).
// Each record (a card, a notebook word, an exercise result…) is one document under users/{uid}/records,
// stamped with when it last changed, so several devices can learn at once and the newest change of each record wins.
import { useSyncExternalStore } from 'react';
import { firebaseConfig } from '../firebase-config.js';
import { clearLearnerData, getState, RECORD_SLICES, setState, subscribe, SYNCED_SETTINGS } from './store';

export const cloudEnabled = Boolean(firebaseConfig);

const OWNER_KEY = 'destination-owner'; // uid whose data is currently on this device
const PUSH_DELAY = 1500;

let fb = null; // loaded Firebase modules + instances
let status = { ready: !cloudEnabled, user: null, syncing: false, error: '', lastSync: 0 };
const listeners = new Set();
const setStatus = (patch) => {
  status = { ...status, ...patch };
  listeners.forEach((l) => l());
};

export function useAccount() {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => status,
  );
}

// ---------- per-account sync bookkeeping (kept on this device) ----------
let meta = null; // { synced: {key: stamp}, activity: {day: json}, since: ms }
const metaKey = (uid) => `destination-cloud-${uid}`;
function loadMeta(uid) {
  try {
    meta = JSON.parse(localStorage.getItem(metaKey(uid))) || null;
  } catch {
    meta = null;
  }
  meta ||= { synced: {}, activity: {}, since: 0 };
}
const saveMeta = (uid) => localStorage.setItem(metaKey(uid), JSON.stringify(meta));

const docId = (key) => encodeURIComponent(key).replace(/\./g, '%2E');

// ---------- start ----------
export async function startCloud() {
  if (!cloudEnabled) return;
  const [{ initializeApp }, auth, store] = await Promise.all([import('firebase/app'), import('firebase/auth'), import('firebase/firestore')]);
  const app = initializeApp(firebaseConfig);
  const db = store.initializeFirestore(app, { localCache: store.persistentLocalCache({ tabManager: store.persistentMultipleTabManager() }) });
  fb = { auth, store, a: auth.getAuth(app), db };
  fb.a.languageCode = 'vi';

  subscribe((m) => {
    if (!m?.remote && status.user) schedulePush();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && status.user) pushNow();
  });

  auth.getRedirectResult(fb.a).catch((e) => setStatus({ error: authMessage(e) }));
  auth.onAuthStateChanged(fb.a, (user) => {
    stopListening();
    if (!user) {
      setStatus({ ready: true, user: null, syncing: false });
      return;
    }
    beginSession(user);
  });
}

function beginSession(user) {
  const owner = localStorage.getItem(OWNER_KEY);
  if (owner !== user.uid) {
    // Data on this device belongs to someone else: remove it before loading this learner's data.
    if (owner) clearLearnerData();
    // Local data is not (or no longer) this learner's full copy, so download everything again.
    localStorage.removeItem(metaKey(user.uid));
  }
  localStorage.setItem(OWNER_KEY, user.uid);
  loadMeta(user.uid);
  stampLegacyRecords();
  setStatus({
    ready: true,
    error: '',
    user: { uid: user.uid, email: user.email, name: user.displayName || user.email?.split('@')[0] || 'Học viên', photo: user.photoURL },
  });
  listen(user.uid);
  schedulePush();
}

// Records saved before stamps existed get the oldest possible stamp: they upload, but never overwrite newer cloud data.
function stampLegacyRecords() {
  const s = getState();
  const add = {};
  for (const slice of RECORD_SLICES) for (const id of Object.keys(s[slice] || {})) if (!s.stamps[`${slice}:${id}`]) add[`${slice}:${id}`] = 1;
  if (Object.keys(add).length) setState((st) => ({ ...st, stamps: { ...add, ...st.stamps } }), { remote: true });
}

// ---------- download: live changes from other devices ----------
let unlisten = null;
function stopListening() {
  unlisten?.();
  unlisten = null;
}

function listen(uid) {
  const { collection, query, where, onSnapshot, Timestamp } = fb.store;
  // Only documents changed since the last one seen; the first time, everything.
  const q = query(collection(fb.db, 'users', uid, 'records'), where('u', '>=', Timestamp.fromMillis(meta.since || 0)));
  setStatus({ syncing: true });
  unlisten = onSnapshot(
    q,
    { includeMetadataChanges: false },
    (snap) => {
      const changes = snap.docChanges().filter((c) => c.type !== 'removed' && !c.doc.metadata.hasPendingWrites);
      if (changes.length) applyRemote(changes.map((c) => c.doc.data()));
      if (!snap.metadata.fromCache) setStatus({ syncing: false, lastSync: Date.now(), error: '' });
      saveMeta(uid);
    },
    (e) => setStatus({ syncing: false, error: dataMessage(e) }),
  );
}

function applyRemote(docs) {
  setState(
    (s) => {
      const next = { ...s, stamps: { ...s.stamps }, settings: { ...s.settings }, activity: { ...s.activity } };
      for (const slice of RECORD_SLICES) next[slice] = { ...s[slice] };
      for (const d of docs) {
        const key = `${d.s}:${d.k}`;
        if (d.u?.toMillis) meta.since = Math.max(meta.since, d.u.toMillis());
        if (d.s === 'activity') {
          const remote = JSON.parse(d.v);
          const hours = { ...next.activity[d.k] };
          for (const [h, n] of Object.entries(remote)) hours[h] = Math.max(hours[h] || 0, n);
          next.activity[d.k] = hours;
          meta.activity[d.k] = d.v;
          continue;
        }
        meta.synced[key] = Math.max(meta.synced[key] || 0, d.t);
        if (d.t <= (next.stamps[key] || 0)) continue; // this device has the same or a newer version
        next.stamps[key] = d.t;
        if (d.s === 'settings') {
          if (SYNCED_SETTINGS.includes(d.k) && !d.d) next.settings[d.k] = JSON.parse(d.v);
        } else if (RECORD_SLICES.includes(d.s)) {
          if (d.d) delete next[d.s][d.k];
          else next[d.s][d.k] = JSON.parse(d.v);
        }
      }
      return next;
    },
    { remote: true },
  );
}

// ---------- upload: local changes ----------
let timer = null;
function schedulePush() {
  clearTimeout(timer);
  timer = setTimeout(pushNow, PUSH_DELAY);
}

let pushing = null;
async function pushNow() {
  clearTimeout(timer);
  if (!status.user || !fb) return;
  if (pushing) return pushing.then(schedulePush);
  const uid = status.user.uid;
  const s = getState();
  const writes = [];
  for (const [key, t] of Object.entries(s.stamps)) {
    if (t <= (meta.synced[key] || 0)) continue;
    const i = key.indexOf(':');
    const slice = key.slice(0, i);
    const id = key.slice(i + 1);
    if (slice === 'settings') {
      if (SYNCED_SETTINGS.includes(id)) writes.push({ key, t, data: { s: slice, k: id, t, d: false, v: JSON.stringify(s.settings[id] ?? '') } });
    } else if (RECORD_SLICES.includes(slice)) {
      const v = s[slice]?.[id];
      writes.push({ key, t, data: { s: slice, k: id, t, d: v === undefined, v: v === undefined ? null : JSON.stringify(v) } });
    }
  }
  for (const [day, hours] of Object.entries(s.activity || {})) {
    const v = JSON.stringify(hours);
    if (meta.activity[day] !== v) writes.push({ day, v, data: { s: 'activity', k: day, t: Date.now(), d: false, v } });
  }
  if (!writes.length) return;

  const { writeBatch, doc, serverTimestamp } = fb.store;
  pushing = (async () => {
    setStatus({ syncing: true });
    try {
      for (let i = 0; i < writes.length; i += 400) {
        const batch = writeBatch(fb.db);
        const part = writes.slice(i, i + 400);
        for (const w of part) batch.set(doc(fb.db, 'users', uid, 'records', docId(w.key || `activity:${w.day}`)), { ...w.data, u: serverTimestamp() });
        await batch.commit();
        for (const w of part) {
          if (w.key) meta.synced[w.key] = Math.max(meta.synced[w.key] || 0, w.t);
          else meta.activity[w.day] = w.v;
        }
        saveMeta(uid);
      }
      setStatus({ syncing: false, lastSync: Date.now(), error: '' });
    } catch (e) {
      setStatus({ syncing: false, error: dataMessage(e) });
    } finally {
      pushing = null;
    }
  })();
  return pushing;
}

export const syncNow = () => pushNow();

// ---------- sign in / out ----------
export async function signInGoogle() {
  const { GoogleAuthProvider, signInWithPopup, signInWithRedirect } = fb.auth;
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  try {
    await signInWithPopup(fb.a, provider);
  } catch (e) {
    // In-app browsers (Zalo, Facebook…) often block popups: fall back to a full-page redirect.
    if (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment') return signInWithRedirect(fb.a, provider);
    throw new Error(authMessage(e));
  }
}

export async function signInEmail(email, password) {
  try {
    await fb.auth.signInWithEmailAndPassword(fb.a, email.trim(), password);
  } catch (e) {
    throw new Error(authMessage(e));
  }
}

export async function signUpEmail(name, email, password) {
  try {
    const cred = await fb.auth.createUserWithEmailAndPassword(fb.a, email.trim(), password);
    if (name.trim()) {
      await fb.auth.updateProfile(cred.user, { displayName: name.trim() });
      setStatus({ user: { ...status.user, name: name.trim() } });
    }
  } catch (e) {
    throw new Error(authMessage(e));
  }
}

export async function resetPassword(email) {
  try {
    await fb.auth.sendPasswordResetEmail(fb.a, email.trim());
  } catch (e) {
    throw new Error(authMessage(e));
  }
}

// Sign out: upload what is pending, then remove this learner's data from the device (it stays in the account).
export async function signOutAndClear() {
  const uid = status.user?.uid;
  await pushNow();
  stopListening();
  await fb.auth.signOut(fb.a);
  clearLearnerData();
  localStorage.removeItem(OWNER_KEY);
  if (uid) localStorage.removeItem(metaKey(uid));
}

function authMessage(e) {
  const m = {
    'auth/invalid-credential': 'Email hoặc mật khẩu không đúng.',
    'auth/wrong-password': 'Email hoặc mật khẩu không đúng.',
    'auth/user-not-found': 'Chưa có tài khoản với email này.',
    'auth/email-already-in-use': 'Email này đã có tài khoản – hãy chọn “Đăng nhập”.',
    'auth/weak-password': 'Mật khẩu cần ít nhất 6 ký tự.',
    'auth/invalid-email': 'Email không hợp lệ.',
    'auth/missing-password': 'Hãy nhập mật khẩu.',
    'auth/too-many-requests': 'Thử quá nhiều lần. Hãy đợi vài phút rồi thử lại.',
    'auth/network-request-failed': 'Không kết nối được. Kiểm tra mạng rồi thử lại.',
    'auth/popup-closed-by-user': 'Bạn đã đóng cửa sổ đăng nhập.',
    'auth/cancelled-popup-request': 'Bạn đã đóng cửa sổ đăng nhập.',
    'auth/unauthorized-domain': 'Tên miền này chưa được cho phép đăng nhập (cần thêm trong Firebase → Authentication → Settings → Authorized domains).',
    'auth/operation-not-allowed': 'Cách đăng nhập này chưa được bật trong Firebase (Authentication → Sign-in method).',
  };
  return m[e?.code] || e?.message || 'Không đăng nhập được.';
}

function dataMessage(e) {
  if (e?.code === 'permission-denied') return 'Máy chủ từ chối lưu dữ liệu (kiểm tra Firestore Rules).';
  if (e?.code === 'unavailable') return 'Đang ngoại tuyến – dữ liệu sẽ tự đồng bộ khi có mạng.';
  return e?.message || 'Không đồng bộ được.';
}
