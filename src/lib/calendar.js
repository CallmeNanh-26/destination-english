// Review reminders: an .ics calendar (works with Google/Apple/Outlook) built from the planned sessions,
// and a quick Google Calendar link for a single session.
import { planSessions } from './plan';

const pad = (n) => String(n).padStart(2, '0');
const stamp = (d) =>
  `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
const utc = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

const APP_URL = 'https://callmenanh-26.github.io/destination-english/#/review';
const title = (s) => `Ôn tập tiếng Anh – ${s.n} thẻ (~${s.minutes} phút)`;
const details = (s) =>
  (s.recall !== null
    ? `Độ nhớ dự kiến lúc ôn: ${Math.round(s.recall * 100)}%. Nếu bỏ qua 3 ngày sẽ còn khoảng ${Math.round(s.recallIfSkipped * 100)}%.\\n`
    : '') +
  (s.newCards ? `${s.newCards} thẻ mới.\\n` : '') +
  `Mở app: ${APP_URL}`;

export function buildIcs(state, days = 30) {
  const { sessions } = planSessions(state.cards, state.settings, state.activity || {}, days);
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Destination English//VI',
    'CALSCALE:GREGORIAN',
    'X-WR-CALNAME:Ôn tập tiếng Anh',
    'REFRESH-INTERVAL;VALUE=DURATION:PT6H',
    'X-PUBLISHED-TTL:PT6H',
  ];
  for (const s of sessions) {
    // A session that is already due becomes a reminder 10 minutes from now.
    const start = s.now ? new Date(Date.now() + 10 * 60000) : s.start;
    const end = new Date(start.getTime() + s.minutes * 60000);
    lines.push(
      'BEGIN:VEVENT',
      `UID:destination-review-${stamp(start).slice(0, 8)}-${pad(start.getHours())}@destination-english`,
      `DTSTAMP:${utc(new Date())}`,
      `DTSTART:${utc(start)}`,
      `DTEND:${utc(end)}`,
      `SUMMARY:${title(s)}`,
      `DESCRIPTION:${details(s)}`,
      `URL:${APP_URL}`,
      'BEGIN:VALARM',
      'TRIGGER:-PT0M',
      'ACTION:DISPLAY',
      'DESCRIPTION:Đến giờ ôn tập tiếng Anh',
      'END:VALARM',
      'END:VEVENT',
    );
  }
  lines.push('END:VCALENDAR');
  return lines.map(fold).join('\r\n');
}

// iCalendar lines must not exceed 75 bytes; longer ones continue on the next line after a space.
function fold(line) {
  const enc = new TextEncoder();
  const out = [];
  let cur = '';
  for (const ch of line) {
    if (enc.encode(cur + ch).length > (out.length ? 74 : 75)) {
      out.push(cur);
      cur = '';
    }
    cur += ch;
  }
  out.push(cur);
  return out.join('\r\n ');
}

export function downloadIcs(state) {
  const blob = new Blob([buildIcs(state)], { type: 'text/calendar' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'lich-on-tap.ics';
  a.click();
}

export function googleCalendarLink(session) {
  const start = session.now ? new Date(Date.now() + 10 * 60000) : session.start;
  const end = new Date(start.getTime() + session.minutes * 60000);
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: title(session),
    dates: `${utc(start)}/${utc(end)}`,
    details: details(session).replace(/\\n/g, '\n'),
  });
  return `https://calendar.google.com/calendar/render?${p}`;
}
