// Review reminders: an .ics file (works with Google/Apple/Outlook calendars) and a quick Google Calendar link.
import { forecast } from './srs';

const pad = (n) => String(n).padStart(2, '0');
const stamp = (d) =>
  `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;

function at(date, time) {
  const [h, m] = time.split(':').map(Number);
  const d = new Date(date);
  d.setHours(h, m, 0, 0);
  return d;
}

export function buildIcs(cards, time, days = 30) {
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Destination English//VI', 'CALSCALE:GREGORIAN'];
  for (const { date, n } of forecast(cards, days)) {
    if (!n) continue;
    const start = at(date, time);
    const end = new Date(start.getTime() + 20 * 60000);
    lines.push(
      'BEGIN:VEVENT',
      `UID:destination-review-${stamp(start)}@local`,
      `DTSTAMP:${stamp(new Date())}`,
      `DTSTART:${stamp(start)}`,
      `DTEND:${stamp(end)}`,
      `SUMMARY:Ôn tập tiếng Anh – ${n} thẻ`,
      'DESCRIPTION:Mở Destination English > Ôn tập hôm nay',
      'BEGIN:VALARM',
      'TRIGGER:-PT0M',
      'ACTION:DISPLAY',
      'DESCRIPTION:Đến giờ ôn tập tiếng Anh',
      'END:VALARM',
      'END:VEVENT',
    );
  }
  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

export function downloadIcs(cards, time) {
  const blob = new Blob([buildIcs(cards, time)], { type: 'text/calendar' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'lich-on-tap.ics';
  a.click();
}

export function googleCalendarLink(date, time, n) {
  const start = at(date, time);
  const end = new Date(start.getTime() + 20 * 60000);
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: `Ôn tập tiếng Anh – ${n} thẻ`,
    dates: `${stamp(start)}/${stamp(end)}`,
    details: 'Mở Destination English > Ôn tập hôm nay',
  });
  return `https://calendar.google.com/calendar/render?${p}`;
}
