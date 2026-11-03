// Quick checks for the device merge and the review planner: `node scripts/test-sync-plan.mjs`
import assert from 'node:assert/strict';

const mem = {};
globalThis.localStorage = { getItem: (k) => mem[k] ?? null, setItem: (k, v) => (mem[k] = v), removeItem: (k) => delete mem[k] };

const { mergeData, syncPayload } = await import('../src/lib/merge.js');
const { planSessions, studyHabit, slotFor } = await import('../src/lib/plan.js');
const { dayKey } = await import('../src/lib/store.js');
const { createEmptyCard, fsrs, Rating } = await import('ts-fsrs');

const S = ['reviewTime', 'reviewMode', 'model'];

// ---- merge ----
const pc = {
  settings: { reviewTime: '20:00', reviewMode: 'auto', geminiKey: 'SECRET' },
  notebook: { a: { id: 'a', text: 'old' }, gone: { id: 'gone' } },
  errors: {}, cards: { legacy: { id: 'legacy', card: { last_review: '2026-10-01' } } }, progress: {}, notes: {}, speaking: {},
  activity: { '2026-11-01': { 20: 10 } },
  stamps: { 'notebook:a': 100, 'notebook:gone': 50 },
};
const phone = {
  settings: { reviewTime: '07:00', reviewMode: 'fixed' },
  notebook: { a: { id: 'a', text: 'new' }, b: { id: 'b', text: 'phone only' } },
  errors: {}, cards: { legacy: { id: 'legacy', card: { last_review: '2026-10-05' } } }, progress: {}, notes: {}, speaking: {},
  activity: { '2026-11-01': { 20: 4, 7: 15 } },
  stamps: { 'notebook:a': 200, 'notebook:b': 150, 'notebook:gone': 300, 'settings:reviewMode': 400 },
};
const m = mergeData(pc, phone, S);
assert.equal(m.notebook.a.text, 'new', 'newer edit wins');
assert.ok(m.notebook.b, 'record only on the other device is added');
assert.ok(!m.notebook.gone, 'deletion on the other device is applied');
assert.equal(m.cards.legacy.card.last_review, '2026-10-05', 'legacy card: more recently reviewed wins');
assert.deepEqual(m.activity['2026-11-01'], { 20: 10, 7: 15 }, 'activity keeps max per hour');
assert.equal(m.settings.reviewMode, 'fixed', 'newer synced setting wins');
assert.equal(m.settings.reviewTime, '20:00', 'unstamped setting stays local');
assert.equal(m.settings.geminiKey, 'SECRET', 'key stays on device');
assert.equal(syncPayload(m, S).settings.geminiKey, undefined, 'key never leaves the device');
// Merging is symmetric for records.
const m2 = mergeData(phone, pc, S);
assert.deepEqual(Object.keys(m2.notebook).sort(), Object.keys(m.notebook).sort());

// ---- habit ----
const now = new Date('2026-11-04T10:00:00'); // Wednesday
const activity = {};
for (let i = 1; i <= 10; i++) {
  const d = new Date(now.getTime() - i * 86400000);
  const weekend = d.getDay() === 0 || d.getDay() === 6;
  activity[dayKey(d)] = weekend ? { 9: 25 } : { 21: 20, 22: 5 };
}
const habit = studyHabit(activity, now);
assert.equal(habit.weekday.hour, 21, 'weekday habit');
assert.equal(habit.weekend.hour, 9, 'weekend habit');
assert.equal(slotFor(new Date('2026-11-07'), { reviewMode: 'auto', reviewTime: '20:00' }, habit).time, '09:00');
assert.equal(slotFor(new Date('2026-11-07'), { reviewMode: 'fixed', reviewTime: '20:00' }, habit).time, '20:00');
assert.equal(studyHabit({}, now).all, null, 'no data -> no habit');

// ---- sessions ----
const f = fsrs({ request_retention: 0.9, enable_fuzz: false });
const mk = (reviewedDaysAgo, rating) => {
  let c = createEmptyCard(new Date(now.getTime() - (reviewedDaysAgo + 30) * 86400000));
  c = f.next(c, new Date(now.getTime() - (reviewedDaysAgo + 30) * 86400000), Rating.Good).card;
  c = f.next(c, new Date(now.getTime() - reviewedDaysAgo * 86400000), rating).card;
  return { card: c };
};
const cards = { overdue: { card: { ...mk(20, Rating.Good).card } }, soon: mk(0, Rating.Good), learning: mk(0, Rating.Again) };
cards.overdue.card.due = new Date(now.getTime() - 3600000);
const settings = { reviewMode: 'auto', reviewTime: '20:00' };
const { sessions } = planSessions(cards, settings, activity, 30, now);
console.log(sessions.map((s) => `${s.now ? 'NOW' : s.start.toLocaleString('vi-VN')} n=${s.n} recall=${Math.round(s.recall * 100)}% skip3d=${Math.round(s.recallIfSkipped * 100)}%`).join('\n'));
assert.ok(sessions[0].now && sessions[0].n >= 1, 'overdue card is due now');
for (const s of sessions.filter((s) => !s.now && s.start.getDate() !== now.getDate())) {
  const wk = s.start.getDay() === 0 || s.start.getDay() === 6;
  assert.equal(s.start.getHours(), wk ? 9 : 21, 'later sessions use the habit hour');
}
assert.ok(sessions.every((s) => s.recall > 0 && s.recall <= 1));
console.log('All checks passed');
