// Automatic sync between devices through a secret GitHub Gist (free, uses the learner's own GitHub account).
// Each device keeps a GitHub token with only the "gist" permission; all devices find the same gist by its file name.
// The gist also holds the review calendar (.ics), so a calendar app can subscribe to it and stay up to date.
import { useSyncExternalStore } from 'react';
import { getState, setState, subscribe, SYNCED_SETTINGS } from './store';
import { mergeData, syncPayload } from './merge';
import { buildIcs } from './calendar';

const CONF_KEY = 'destination-sync'; // kept apart from the main store so the token is never exported or synced
const FILE = 'destination-english.json';
const ICS = 'lich-on-tap.ics';
const API = import.meta.env.DEV ? '/github-api' : 'https://api.github.com';
const PUSH_DELAY = 8000;
const PULL_EVERY = 60000;

function readConf() {
  try {
    return JSON.parse(localStorage.getItem(CONF_KEY)) || {};
  } catch {
    return {};
  }
}

let conf = readConf();
let status = { state: conf.token ? 'idle' : 'off', message: '', lastSync: conf.lastSync || 0 };
const listeners = new Set();

function saveConf(next) {
  conf = next;
  if (next.token) localStorage.setItem(CONF_KEY, JSON.stringify(next));
  else localStorage.removeItem(CONF_KEY);
}

function setStatus(patch) {
  status = { ...status, ...patch };
  listeners.forEach((l) => l());
}

export function useSyncStatus() {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => status,
  );
}

export const isConnected = () => Boolean(conf.token && conf.gistId);
export const calendarUrl = () =>
  conf.login && conf.gistId ? `https://gist.githubusercontent.com/${conf.login}/${conf.gistId}/raw/${ICS}` : '';

async function gh(path, { method = 'GET', body, token = conf.token } = {}) {
  const res = await fetch(API + path, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  });
  if (res.status === 401) throw new Error('Mã GitHub không hợp lệ hoặc đã hết hạn. Hãy tạo mã mới và kết nối lại.');
  if (res.status === 403 || res.status === 404) {
    const scopes = res.headers.get('x-oauth-scopes');
    if (scopes !== null && !scopes.includes('gist')) throw new Error('Mã GitHub chưa có quyền “gist”. Hãy tạo mã mới và tick ô gist.');
  }
  if (!res.ok) throw new Error(`GitHub báo lỗi ${res.status}`);
  return res.status === 204 ? null : res.json();
}

async function readRemote(gist) {
  const file = gist.files?.[FILE];
  if (!file) return null;
  // Big files are cut off in the API response; then fetch the full raw file.
  const text = file.truncated ? await (await fetch(file.raw_url, { cache: 'no-store' })).text() : file.content;
  return JSON.parse(text);
}

const filesFor = (state) => ({
  [FILE]: { content: JSON.stringify({ app: 'destination-english', version: 1, savedAt: Date.now(), data: syncPayload(state, SYNCED_SETTINGS) }) },
  [ICS]: { content: buildIcs(state) },
});

// Key order differs between devices after a merge, so compare data with keys sorted.
function stable(v) {
  if (Array.isArray(v)) return `[${v.map(stable).join(',')}]`;
  if (v && typeof v === 'object')
    return `{${Object.keys(v)
      .sort()
      .filter((k) => v[k] !== undefined)
      .map((k) => `${JSON.stringify(k)}:${stable(v[k])}`)
      .join(',')}}`;
  return JSON.stringify(v);
}

let lastPushed = '';
const fingerprint = (state) => stable(syncPayload(state, SYNCED_SETTINGS));
const ICS_REFRESH = 6 * 3600000; // re-publish the calendar at least this often so "today" sessions stay current

// Connect this device: find the gist made by another device, or create it.
export async function connect(token) {
  token = token.trim();
  setStatus({ state: 'busy', message: 'Đang kết nối…' });
  try {
    const user = await gh('/user', { token });
    let gistId = '';
    for (let page = 1; page <= 5 && !gistId; page++) {
      const list = await gh(`/gists?per_page=100&page=${page}`, { token });
      gistId = list.find((g) => g.files?.[FILE])?.id || '';
      if (list.length < 100) break;
    }
    if (!gistId) {
      const created = await gh('/gists', {
        method: 'POST',
        token,
        body: { description: 'Destination English – dữ liệu học (đồng bộ tự động)', public: false, files: filesFor(getState()) },
      });
      gistId = created.id;
    }
    saveConf({ token, gistId, login: user.login, lastSync: 0 });
    await syncNow();
    return true;
  } catch (e) {
    setStatus({ state: 'error', message: e.message });
    return false;
  }
}

export function disconnect() {
  saveConf({});
  lastPushed = '';
  setStatus({ state: 'off', message: '', lastSync: 0 });
}

let running = null;
// Pull the cloud copy, merge it in, and push the result if anything differs.
export function syncNow() {
  if (!isConnected()) return Promise.resolve();
  if (running) return running;
  running = (async () => {
    setStatus({ state: 'busy', message: 'Đang đồng bộ…' });
    try {
      const gist = await gh(`/gists/${conf.gistId}`);
      const remote = await readRemote(gist);
      const local = getState();
      const merged = remote?.data ? mergeData(local, remote.data, SYNCED_SETTINGS) : local;
      if (fingerprint(merged) !== fingerprint(local)) setState(merged, { remote: true });
      const fp = fingerprint(merged);
      const remoteFp = remote?.data ? stable(remote.data) : '';
      let icsAt = conf.icsAt || 0;
      if (fp !== remoteFp || Date.now() - icsAt > ICS_REFRESH) {
        await gh(`/gists/${conf.gistId}`, { method: 'PATCH', body: { files: filesFor(merged) } });
        icsAt = Date.now();
      }
      lastPushed = fp;
      const lastSync = Date.now();
      saveConf({ ...conf, lastSync, icsAt });
      setStatus({ state: 'idle', message: '', lastSync });
    } catch (e) {
      setStatus({ state: 'error', message: e.message || 'Không đồng bộ được (mất mạng?)' });
    } finally {
      running = null;
    }
  })();
  return running;
}

let pushTimer = null;
function schedulePush() {
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => {
    if (fingerprint(getState()) !== lastPushed) syncNow();
  }, PUSH_DELAY);
}

// Start background sync: on open, when the app comes back to the foreground, every minute, and shortly after each change.
export function startSync() {
  subscribe((meta) => {
    if (!meta?.remote && isConnected()) schedulePush();
  });
  document.addEventListener('visibilitychange', () => {
    if (!isConnected()) return;
    if (document.visibilityState === 'visible') syncNow();
    else if (fingerprint(getState()) !== lastPushed) syncNow(); // leaving the app: push what is pending
  });
  setInterval(() => {
    if (isConnected() && document.visibilityState === 'visible') syncNow();
  }, PULL_EVERY);
  if (isConnected()) syncNow();
}
