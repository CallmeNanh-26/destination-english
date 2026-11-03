// Tiny persistent store on localStorage. Every slice is a plain object keyed by id,
// so it can later be synced to Supabase without changing callers.
import { useSyncExternalStore } from 'react';

const KEY = 'destination-english-v1';
const empty = {
  settings: { geminiKey: '', model: 'gemini-flash-latest', reviewTime: '20:00', voice: '' },
  notebook: {}, // id -> { id, text, ipa, vi, en, ex, col, unit, createdAt }
  errors: {}, // id -> { id, wrong, right, type, explain, source, createdAt }
  cards: {}, // id -> { id, kind: 'vocab'|'note'|'error', ref, unit, card (fsrs) }
  progress: {}, // `${unitId}:${section}` -> { score, total, at }
  notes: {}, // unitId -> free text scratch notes
  speaking: {}, // `${unitId}:${qIndex}` -> [attempt, ...] newest first
};

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

export function setState(updater) {
  state = typeof updater === 'function' ? updater(state) : updater;
  persist();
  listeners.forEach((l) => l());
}

export function update(slice, id, value) {
  setState((s) => {
    const next = { ...s[slice] };
    if (value === undefined) delete next[id];
    else next[id] = value;
    return { ...s, [slice]: next };
  });
}

export function useStore(selector = (s) => s) {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => selector(state),
  );
}

export function exportData() {
  return JSON.stringify({ ...state, settings: { ...state.settings, geminiKey: '' } }, null, 2);
}

export function importData(json) {
  const data = JSON.parse(json);
  setState((s) => ({ ...s, ...data, settings: { ...s.settings, ...data.settings, geminiKey: s.settings.geminiKey } }));
}

export function saveProgress(unitId, section, score, total) {
  update('progress', `${unitId}:${section}`, { score, total, at: Date.now() });
}

export const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
