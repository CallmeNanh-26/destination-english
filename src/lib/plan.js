// Review planner: FSRS says WHEN each card is about to be forgotten (forgetting curve);
// the learner's own study log says WHAT TIME OF DAY they actually study. Together they give the suggested sessions.
import { fsrs } from 'ts-fsrs';
import { dayKey } from './store.js';

const f = fsrs({ request_retention: 0.9 });
const DAY = 86400000;
const isWeekend = (d) => d.getDay() === 0 || d.getDay() === 6;

const revive = (c) => ({ ...c, due: new Date(c.due), last_review: c.last_review ? new Date(c.last_review) : undefined });

// Retrievability = estimated chance (0–1) of still remembering the card at `when`.
export function recall(entry, when) {
  const card = revive(entry.card);
  if (!card.last_review) return 1;
  return f.get_retrievability(card, when, false);
}

// Most typical study hour over the last 30 days, recent days weighted more (half-life 14 days).
// Returns { weekday, weekend, all } — each { hour, minutes, days } or null when there is not enough data yet.
export function studyHabit(activity, now = new Date()) {
  const groups = { weekday: Array(24).fill(0), weekend: Array(24).fill(0), all: Array(24).fill(0) };
  const stats = { weekday: { minutes: 0, days: 0 }, weekend: { minutes: 0, days: 0 }, all: { minutes: 0, days: 0 } };
  for (let i = 0; i < 30; i++) {
    const d = new Date(now.getTime() - i * DAY);
    const hours = activity[dayKey(d)];
    if (!hours) continue;
    const w = Math.pow(0.5, i / 14);
    const g = isWeekend(d) ? 'weekend' : 'weekday';
    for (const key of [g, 'all']) {
      stats[key].days++;
      for (const [h, n] of Object.entries(hours)) {
        groups[key][h] += n * w;
        stats[key].minutes += n;
      }
    }
  }
  const pick = (key) => {
    if (stats[key].days < 3 || stats[key].minutes < 20) return null;
    const s = groups[key];
    // Smooth a little so 19:xx and 20:xx sessions reinforce each other.
    const score = s.map((v, h) => v + 0.5 * ((s[h - 1] || 0) + (s[h + 1] || 0)));
    const hour = score.indexOf(Math.max(...score));
    return { hour, ...stats[key] };
  };
  return { weekday: pick('weekday'), weekend: pick('weekend'), all: pick('all') };
}

const fmt = (h, m = 0) => `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

// Reminder time for a given day, with an explanation of where it came from.
export function slotFor(date, settings, habit) {
  if (settings.reviewMode !== 'fixed') {
    const h = (isWeekend(date) ? habit.weekend : habit.weekday) || habit.all;
    if (h) return { time: fmt(h.hour), auto: true };
  }
  return { time: settings.reviewTime, auto: false };
}

function at(date, time) {
  const [h, m] = time.split(':').map(Number);
  const d = new Date(date);
  d.setHours(h, m, 0, 0);
  return d;
}

// Group due cards into sessions for the next `days` days.
export function planSessions(cards, settings, activity, days = 30, now = new Date()) {
  const habit = studyHabit(activity, now);
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const sessions = new Map(); // ms -> { start, cards: [] }
  const add = (start, entry) => {
    const k = start.getTime();
    if (!sessions.has(k)) sessions.set(k, { start, cards: [], now: false });
    sessions.get(k).cards.push(entry);
    return sessions.get(k);
  };

  for (const entry of Object.values(cards)) {
    const due = new Date(entry.card.due);
    if (due <= now) {
      add(now, entry).now = true;
      continue;
    }
    const dayIdx = Math.floor((due - today) / DAY);
    if (dayIdx >= days) continue;
    const day = new Date(today.getTime() + dayIdx * DAY);
    const slot = at(day, slotFor(day, settings, habit).time);
    if (dayIdx === 0 && (slot <= now || due > slot)) {
      // Short learning steps due later today: remind at the due time (rounded up to 15 min) if it is not too late.
      const t = new Date(Math.ceil(due.getTime() / (15 * 60000)) * 15 * 60000);
      if (t.getHours() < 23 && t.getDate() === due.getDate()) {
        add(t, entry);
        continue;
      }
      const tomorrow = new Date(today.getTime() + DAY);
      add(at(tomorrow, slotFor(tomorrow, settings, habit).time), entry);
      continue;
    }
    add(slot, entry);
  }

  // Sessions less than an hour apart are one sitting.
  const list = [...sessions.values()].sort((a, b) => a.start - b.start);
  const merged = [];
  for (const s of list) {
    const last = merged[merged.length - 1];
    if (last && s.start - last.start < 60 * 60000) {
      last.cards.push(...s.cards);
      last.now ||= s.now;
    } else merged.push(s);
  }

  return {
    habit,
    sessions: merged.map((s) => {
      const when = s.now ? now : s.start;
      // Brand-new cards have no memory to decay yet, so only reviewed cards count towards the estimate.
      const seen = s.cards.filter((c) => c.card.last_review);
      const r = seen.map((c) => recall(c, when));
      const later = seen.map((c) => recall(c, new Date(when.getTime() + 3 * DAY)));
      const avg = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : null);
      return {
        start: s.start,
        now: s.now,
        n: s.cards.length,
        minutes: Math.max(5, Math.ceil((s.cards.length * 20) / 60)), // ~20 s per card
        newCards: s.cards.length - seen.length,
        recall: avg(r),
        recallIfSkipped: avg(later),
      };
    }),
  };
}

export function describeHabit(habit, settings) {
  if (settings.reviewMode === 'fixed') return `Giờ nhắc cố định: ${settings.reviewTime} mỗi ngày.`;
  const parts = [];
  if (habit.weekday) parts.push(`ngày thường khoảng ${fmt(habit.weekday.hour)}`);
  if (habit.weekend) parts.push(`cuối tuần khoảng ${fmt(habit.weekend.hour)}`);
  if (!parts.length && habit.all) parts.push(`khoảng ${fmt(habit.all.hour)}`);
  if (!parts.length)
    return `Chưa đủ dữ liệu về giờ học của bạn (cần ít nhất 3 ngày học), tạm nhắc lúc ${settings.reviewTime}. Cứ học bình thường, app sẽ tự điều chỉnh.`;
  const days = habit.all?.days || 0;
  return `Bạn thường học ${parts.join(', ')} (dựa trên ${days} ngày học gần đây) – app nhắc ôn đúng khung giờ đó.`;
}

export function sessionLabel(s, now = new Date()) {
  if (s.now) return 'Ngay bây giờ';
  const d = s.start;
  const t = fmt(d.getHours(), d.getMinutes());
  const diff = Math.round((new Date(d).setHours(0, 0, 0, 0) - new Date(now).setHours(0, 0, 0, 0)) / DAY);
  if (diff === 0) return `Hôm nay ${t}`;
  if (diff === 1) return `Ngày mai ${t}`;
  return `${d.toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'numeric' })} · ${t}`;
}
