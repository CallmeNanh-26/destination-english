// Spaced repetition (forgetting curve) with FSRS.
import { createEmptyCard, fsrs, Rating } from 'ts-fsrs';
import { getState, update } from './store';

const f = fsrs({ request_retention: 0.9, enable_fuzz: true });

export const GRADES = [
  { label: 'Quên', rating: Rating.Again, cls: 'again' },
  { label: 'Khó', rating: Rating.Hard, cls: 'hard' },
  { label: 'Nhớ', rating: Rating.Good, cls: 'good' },
  { label: 'Dễ', rating: Rating.Easy, cls: 'easy' },
];

function revive(card) {
  return { ...card, due: new Date(card.due), last_review: card.last_review ? new Date(card.last_review) : undefined };
}

export function addCard(id, kind, ref, unit) {
  if (getState().cards[id]) return;
  update('cards', id, { id, kind, ref, unit, card: createEmptyCard(new Date()) });
}

export function removeCard(id) {
  update('cards', id, undefined);
}

export function grade(id, rating) {
  const entry = getState().cards[id];
  if (!entry) return;
  const { card } = f.next(revive(entry.card), new Date(), rating);
  update('cards', id, { ...entry, card });
}

// Preview the next interval for each grade, e.g. "10 phút", "3 ngày".
export function previewIntervals(id) {
  const entry = getState().cards[id];
  const card = entry ? revive(entry.card) : createEmptyCard(new Date());
  const now = new Date();
  const rec = f.repeat(card, now);
  return Object.fromEntries(GRADES.map((g) => [g.rating, humanize(rec[g.rating].card.due - now)]));
}

export function humanize(ms) {
  const m = Math.round(ms / 60000);
  if (m < 60) return `${Math.max(m, 1)} phút`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h} giờ`;
  const d = Math.round(h / 24);
  if (d < 31) return `${d} ngày`;
  return `${Math.round(d / 30)} tháng`;
}

export function dueCards(cards, at = new Date()) {
  return Object.values(cards).filter((c) => new Date(c.card.due) <= at);
}

// Number of cards due on each of the next `days` days (overdue counted on day 0).
export function forecast(cards, days = 30) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const counts = Array(days).fill(0);
  for (const c of Object.values(cards)) {
    const diff = Math.floor((new Date(c.card.due) - start) / 86400000);
    if (diff < days) counts[Math.max(0, diff)]++;
  }
  return counts.map((n, i) => ({ date: new Date(start.getTime() + i * 86400000), n }));
}
