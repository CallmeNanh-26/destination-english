// Learning progress: how much of each unit, and of each book, the learner has done.
// A unit is split into parts (flashcards, reading, listening, exercises, speaking / theory, exercises);
// each part counts what is finished, and the unit percentage is the average of its parts.
import { dayKey } from './store.js';

const vocabCardId = (unitId, w) => `v:${unitId}:${w}`;
const done = (p) => Boolean(p?.done);

export function unitProgress(meta, state) {
  const u = meta.content;
  if (!u) return null;
  const pr = state.progress || {};
  const id = u.id;
  // An exercise section counts once it was checked, or (for translation-only sections) once any sentence was graded.
  const exDone = u.exercises.filter((s, i) => done(pr[`${id}:ex-${i}`]) || s.items.some((_, j) => done(pr[`${id}:ex-${i}:tr${j}`]))).length;
  const accuracy = [];
  for (const [k, v] of Object.entries(pr)) {
    if (k.startsWith(id + ':') && v?.done && v.total > 0 && !k.includes(':tr')) accuracy.push(v.score / v.total);
  }

  let parts;
  if (meta.kind === 'vocab') {
    const learned = u.vocab.filter((v) => state.cards?.[vocabCardId(id, v.w)]?.card?.reps > 0).length;
    parts = [
      { key: 'flash', label: 'Flashcard', n: learned, of: u.vocab.length },
      { key: 'reading', label: 'Đọc', n: u.reading.filter((_, i) => done(pr[`${id}:reading-${i + 1}`])).length, of: u.reading.length },
      { key: 'listening', label: 'Nghe', n: u.listening.filter((_, i) => done(pr[`${id}:listening-${i + 1}`])).length, of: u.listening.length },
      { key: 'exercises', label: 'Bài tập', n: exDone, of: u.exercises.length },
      { key: 'speaking', label: 'Nói', n: u.speaking.filter((_, i) => state.speaking?.[`${id}:${i}`]?.length).length, of: u.speaking.length },
    ];
  } else {
    parts = [
      { key: 'theory', label: 'Lý thuyết', n: done(pr[`${id}:theory`]) ? 1 : 0, of: 1 },
      { key: 'exercises', label: 'Bài tập', n: exDone, of: u.exercises.length },
    ];
  }
  const pct = Math.round((parts.reduce((s, p) => s + (p.of ? p.n / p.of : 0), 0) / parts.length) * 100);
  return {
    pct,
    parts,
    started: parts.some((p) => p.n > 0) || Object.keys(pr).some((k) => k.startsWith(id + ':')),
    accuracy: accuracy.length ? Math.round((accuracy.reduce((a, b) => a + b, 0) / accuracy.length) * 100) : null,
  };
}

export function bookProgress(book, state) {
  const units = book.units.filter((u) => u.content).map((u) => ({ meta: u, p: unitProgress(u, state) }));
  const pct = units.length ? Math.round(units.reduce((s, x) => s + x.p.pct, 0) / units.length) : 0;
  let words = 0;
  let learned = 0;
  for (const { meta } of units) {
    if (meta.kind !== 'vocab') continue;
    words += meta.content.vocab.length;
    learned += meta.content.vocab.filter((v) => state.cards?.[vocabCardId(meta.id, v.w)]?.card?.reps > 0).length;
  }
  const accs = units.map((x) => x.p.accuracy).filter((a) => a !== null);
  return {
    pct,
    units,
    completed: units.filter((x) => x.p.pct >= 100).length,
    started: units.filter((x) => x.p.started).length,
    words,
    learned,
    accuracy: accs.length ? Math.round(accs.reduce((a, b) => a + b, 0) / accs.length) : null,
    next: units.find((x) => x.p.started && x.p.pct < 100) || units.find((x) => !x.p.started),
  };
}

// Consecutive days with any study, counting back from today (or yesterday, if nothing yet today).
export function streak(activity, now = new Date()) {
  const has = (d) => Object.values(activity?.[dayKey(d)] || {}).some((n) => n > 0);
  const d = new Date(now);
  if (!has(d)) d.setDate(d.getDate() - 1);
  let n = 0;
  while (has(d)) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

// Study minutes per day for the last `days` days (oldest first).
export function minutesByDay(activity, days = 7, now = new Date()) {
  return Array.from({ length: days }, (_, i) => {
    const d = new Date(now);
    d.setDate(d.getDate() - (days - 1 - i));
    const m = Object.values(activity?.[dayKey(d)] || {}).reduce((a, b) => a + b, 0);
    return { date: d, minutes: m };
  });
}
