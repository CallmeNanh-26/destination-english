// Progress bars: the whole book (home page), one unit (unit header) and a compact bar for unit lists.
import { Link } from 'react-router-dom';
import { bookProgress, minutesByDay, streak } from '../lib/progress';

export function Bar({ pct, lg = false }) {
  return (
    <div className={'progress' + (lg ? ' lg' : '')} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className={pct >= 100 ? 'done' : ''} style={{ width: `${Math.min(100, pct)}%` }} />
    </div>
  );
}

export function MiniUnitBar({ p }) {
  if (!p) return null;
  return (
    <span className="unit-prog" title={p.parts.map((x) => `${x.label} ${x.n}/${x.of}`).join(' · ')}>
      <Bar pct={p.pct} />
      <small>{p.pct >= 100 ? '✓' : `${p.pct}%`}</small>
    </span>
  );
}

export function UnitProgress({ p }) {
  if (!p) return null;
  return (
    <div className="stack" style={{ gap: 6, margin: '4px 0 14px' }}>
      <div className="row small" style={{ justifyContent: 'space-between' }}>
        <strong>Tiến độ unit: {p.pct}%</strong>
        {p.accuracy !== null && <span className="muted">Độ chính xác bài tập: {p.accuracy}%</span>}
      </div>
      <Bar pct={p.pct} lg />
      <div className="prog-parts">
        {p.parts.map((x) => (
          <span key={x.key} className={'prog-part' + (x.n >= x.of ? ' full' : '')}>
            {x.n >= x.of ? '✓ ' : ''}
            {x.label} {x.n}/{x.of}
          </span>
        ))}
      </div>
    </div>
  );
}

export function BookProgress({ book, state }) {
  const b = bookProgress(book, state);
  const days = minutesByDay(state.activity, 7);
  const week = days.reduce((s, d) => s + d.minutes, 0);
  const st = streak(state.activity);
  const maxM = Math.max(1, ...days.map((d) => d.minutes));
  return (
    <div className="card stack">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h3 style={{ margin: 0 }}>📈 Tiến độ {book.title}</h3>
        <strong style={{ fontSize: '1.3rem', color: 'var(--primary)' }}>{b.pct}%</strong>
      </div>
      <Bar pct={b.pct} lg />
      <div className="stat-row">
        <div>
          <span className="muted small">Unit hoàn thành</span>
          <strong>{b.completed}/{b.units.length}</strong>
        </div>
        <div>
          <span className="muted small">Từ đã học</span>
          <strong>{b.learned}/{b.words}</strong>
        </div>
        <div>
          <span className="muted small">Độ chính xác</span>
          <strong>{b.accuracy === null ? '–' : `${b.accuracy}%`}</strong>
        </div>
        <div>
          <span className="muted small">Chuỗi ngày học</span>
          <strong>🔥 {st}</strong>
        </div>
        <div title="Số phút có thao tác học trong 7 ngày qua">
          <span className="muted small">7 ngày qua</span>
          <strong>{week} phút</strong>
          <div className="forecast" style={{ height: 22, marginTop: 4 }}>
            {days.map((d, i) => (
              <div key={i} style={{ height: `${(d.minutes / maxM) * 100}%` }} title={`${d.date.toLocaleDateString('vi-VN')}: ${d.minutes} phút`} />
            ))}
          </div>
        </div>
      </div>
      {b.next && (
        <div className="row">
          <Link className="btn primary" to={`/unit/${b.next.meta.id}`}>
            ▶ {b.next.p.started ? 'Học tiếp' : 'Bắt đầu'}: Unit {b.next.meta.no} · {b.next.meta.title}
          </Link>
          {b.next.p.started && <span className="muted small">đã xong {b.next.p.pct}%</span>}
        </div>
      )}
    </div>
  );
}
