// Quick checks for learning progress and the review planner: `npm test`
import assert from 'node:assert/strict';

const mem = {};
globalThis.localStorage = { getItem: (k) => mem[k] ?? null, setItem: (k, v) => (mem[k] = v), removeItem: (k) => delete mem[k] };

const { planSessions, studyHabit, slotFor } = await import('../src/lib/plan.js');
const { dayKey } = await import('../src/lib/store.js');
const { unitProgress, bookProgress, streak } = await import('../src/lib/progress.js');
const { books, findUnit } = await import('../src/data/index.js');
const { createEmptyCard, fsrs, Rating } = await import('ts-fsrs');

// ---- progress ----
const vu = findUnit('b1-u03');
const gu = findUnit('b1-u01');
const st0 = { cards: {}, progress: {}, speaking: {}, activity: {} };
assert.equal(unitProgress(vu, st0).pct, 0, 'untouched unit is 0%');
const st1 = {
  ...st0,
  cards: Object.fromEntries(vu.content.vocab.map((v) => [`v:b1-u03:${v.w}`, { card: { reps: 1 } }])),
  progress: {
    ...Object.fromEntries(vu.content.reading.map((_, i) => [`b1-u03:reading-${i + 1}`, { done: true, score: 3, total: 6 }])),
    'b1-u03:listening-1': { done: true, score: 5, total: 5 },
    'b1-u03:ex-0': { done: false, values: { 0: 'x' } },
  },
};
const p1 = unitProgress(vu, st1);
assert.equal(p1.parts.find((x) => x.key === 'flash').n, vu.content.vocab.length, 'all flashcards learned');
assert.equal(p1.parts.find((x) => x.key === 'exercises').n, 0, 'an unfinished draft does not count as done');
assert.equal(p1.pct, Math.round(((1 + 1 + 1 / 5) / 5) * 100), 'unit % is the average of its parts');
const g = unitProgress(gu, { ...st0, progress: { 'b1-u01:theory': { done: true, score: 1, total: 0 } } });
assert.equal(g.pct, 50, 'grammar: theory is half of the unit');
const bp = bookProgress(books[0], st1);
assert.equal(bp.units.length, 42);
assert.equal(bp.next.meta.id, 'b1-u03', 'continue with the unit already started');
const today = new Date('2026-11-07T09:00:00');
const act = { [dayKey(new Date('2026-11-06'))]: { 20: 5 }, [dayKey(new Date('2026-11-05'))]: { 20: 5 }, [dayKey(new Date('2026-11-03'))]: { 9: 1 } };
assert.equal(streak(act, today), 2, 'streak counts back from yesterday when nothing yet today');
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
