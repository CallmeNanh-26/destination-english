// Tiny persistent store on localStorage. Every slice is a plain object keyed by id.
// `stamps` remembers when each record last changed (also for deletions), so two devices can be merged record by record.
import { useSyncExternalStore } from 'react';

const KEY = 'destination-english-v1';
const empty = {
  settings: { geminiKey: '', model: 'gemini-flash-latest', reviewTime: '20:00', reviewMode: 'auto', voice: '' },
  notebook: {}, // id -> { id, text, ipa, vi, en, ex, col, unit, createdAt }
  errors: {}, // id -> { id, wrong, right, type, explain, source, createdAt }
  cards: {}, // id -> { id, kind: 'vocab'|'note'|'error', ref, unit, card (fsrs) }
  progress: {}, // `${unitId}:${section}` -> { score, total, at }
  notes: {}, // unitId -> free text scratch notes
  speaking: {}, // `${unitId}:${qIndex}` -> [attempt, ...] newest first
  activity: {}, // 'YYYY-MM-DD' -> { [hour]: minutes of study in that hour }
  stamps: {}, // `${slice}:${id}` -> ms of last change (record missing + stamp = deleted)
};

// Settings saved with the learner's account (the voice depends on the device, so it stays local).
export const SYNCED_SETTINGS = ['reviewTime', 'reviewMode', 'model', 'geminiKey'];
// Everything that belongs to one learner; cleared when someone else signs in on this device.
export const RECORD_SLICES = ['notebook', 'errors', 'cards', 'progress', 'notes', 'speaking'];
// Changes to these slices count as study time.
const STUDY_SLICES = new Set(['cards', 'progress', 'speaking', 'errors', 'notebook', 'notes']);

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(empty);
    const data = JSON.parse(raw);
    return { ...structuredClone(empty), ...data, settings: { ...empty.settings, ...data.settings } };
  } catch {
    return structuredClone(empty);
  }
}

let state = load();
const listeners = new Set();

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Không lưu được dữ liệu', e);
  }
}

export function getState() {
  return state;
}

// `meta.remote` marks changes that came from sync, so sync does not push them straight back.
export function setState(updater, meta = {}) {
  state = typeof updater === 'function' ? updater(state) : updater;
  persist();
  listeners.forEach((l) => l(meta));
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function update(slice, id, value) {
  const now = Date.now();
  setState((s) => {
    const next = { ...s[slice] };
    if (value === undefined) delete next[id];
    else next[id] = value;
    const out = { ...s, [slice]: next, stamps: { ...s.stamps, [`${slice}:${id}`]: now } };
    return STUDY_SLICES.has(slice) ? withActivity(out, now) : out;
  });
}

export function setSetting(k, v) {
  setState((s) => ({
    ...s,
    settings: { ...s.settings, [k]: v },
    stamps: SYNCED_SETTINGS.includes(k) ? { ...s.stamps, [`settings:${k}`]: Date.now() } : s.stamps,
  }));
}

export const dayKey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

// Count each minute with any study action once; this is what the reminder planner learns habits from.
let lastMinute = 0;
function withActivity(s, now) {
  const minute = Math.floor(now / 60000);
  if (minute === lastMinute) return s;
  lastMinute = minute;
  const d = new Date(now);
  const day = dayKey(d);
  const hours = { ...s.activity[day] };
  hours[d.getHours()] = (hours[d.getHours()] || 0) + 1;
  const activity = { ...s.activity, [day]: hours };
  // Keep about three months of history.
  const cutoff = dayKey(new Date(now - 90 * 86400000));
  for (const k of Object.keys(activity)) if (k < cutoff) delete activity[k];
  return { ...s, activity };
}

// Remove the current learner's data from this device (their account keeps a copy).
export function clearLearnerData() {
  setState(
    (s) => ({
      ...s,
      ...Object.fromEntries(RECORD_SLICES.map((k) => [k, {}])),
      activity: {},
      stamps: {},
      settings: { ...s.settings, geminiKey: '' },
    }),
    { remote: true },
  );
}

export function useStore(selector = (s) => s) {
  return useSyncExternalStore(subscribe, () => selector(state));
}

export function exportData() {
  return JSON.stringify({ ...state, settings: { ...state.settings, geminiKey: '' } }, null, 2);
}

export function importData(json) {
  const data = JSON.parse(json);
  setState((s) => ({ ...s, ...data, settings: { ...s.settings, ...data.settings, geminiKey: s.settings.geminiKey } }));
}

export function saveProgress(unitId, section, score, total, extra = {}) {
  update('progress', `${unitId}:${section}`, { score, total, at: Date.now(), done: true, ...extra });
}

export const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
