// Merge two copies of the learner's data (this device + the cloud copy) record by record.
// The newer change wins per record; a stamp without a record means it was deleted.
export const RECORD_SLICES = ['notebook', 'errors', 'cards', 'progress', 'notes', 'speaking'];

const reviewedAt = (c) => (c?.card?.last_review ? new Date(c.card.last_review).getTime() : 0);

// Records written before stamps existed tie at 0: keep the one that exists, and for cards the more recently reviewed.
function pickTie(slice, a, b) {
  if (a === undefined) return b;
  if (b === undefined) return a;
  if (slice === 'cards') return reviewedAt(b) > reviewedAt(a) ? b : a;
  return a;
}

export function mergeData(local, remote, syncedSettings) {
  const ls = local.stamps || {};
  const rs = remote.stamps || {};
  const stamps = { ...ls };
  for (const [k, v] of Object.entries(rs)) stamps[k] = Math.max(stamps[k] || 0, v);

  const out = { ...local, stamps };
  for (const slice of RECORD_SLICES) {
    const a = local[slice] || {};
    const b = remote[slice] || {};
    const merged = {};
    for (const id of new Set([...Object.keys(a), ...Object.keys(b)])) {
      const ta = ls[`${slice}:${id}`] || 0;
      const tb = rs[`${slice}:${id}`] || 0;
      const v = ta > tb ? a[id] : tb > ta ? b[id] : pickTie(slice, a[id], b[id]);
      if (v !== undefined) merged[id] = v;
    }
    out[slice] = merged;
  }

  // Study minutes: each device logs its own, so keep the larger count per hour.
  const activity = { ...(local.activity || {}) };
  for (const [day, hours] of Object.entries(remote.activity || {})) {
    const h = { ...activity[day] };
    for (const [hour, n] of Object.entries(hours)) h[hour] = Math.max(h[hour] || 0, n);
    activity[day] = h;
  }
  out.activity = activity;

  const settings = { ...local.settings };
  for (const k of syncedSettings) {
    if ((rs[`settings:${k}`] || 0) > (ls[`settings:${k}`] || 0) && remote.settings?.[k] !== undefined) settings[k] = remote.settings[k];
  }
  out.settings = settings;
  return out;
}

// The part of the state that goes to the cloud: no API key, no device-only settings.
export function syncPayload(state, syncedSettings) {
  const p = { stamps: state.stamps, activity: state.activity, settings: {} };
  for (const s of RECORD_SLICES) p[s] = state[s];
  for (const k of syncedSettings) p.settings[k] = state.settings[k];
  return p;
}
