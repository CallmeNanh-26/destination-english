import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { books } from '../data/index.js';
import { useStore } from '../lib/store';
import { dueCards, forecast } from '../lib/srs';
import { planSessions, sessionLabel } from '../lib/plan';

function unitProgress(progress, unitId) {
  const done = Object.entries(progress).filter(([k]) => k.startsWith(unitId + ':'));
  if (!done.length) return null;
  const score = done.reduce((s, [, v]) => s + v.score, 0);
  const total = done.reduce((s, [, v]) => s + v.total, 0);
  return { parts: done.length, pct: total ? Math.round((score / total) * 100) : 0 };
}

export default function Home() {
  const { cards, progress, notebook, errors, settings, activity } = useStore((s) => s);
  const due = dueCards(cards).length;
  const next = useMemo(() => planSessions(cards, settings, activity, 30).sessions.find((s) => !s.now), [cards, settings, activity]);
  const fc = forecast(cards, 14);
  const max = Math.max(1, ...fc.map((d) => d.n));
  const [bookId, setBookId] = useState('b1');
  const book = books.find((b) => b.id === bookId);

  return (
    <div className="stack">
      <h1>Chào bạn 👋</h1>
      {!settings.geminiKey && (
        <div className="alert">
          Để AI chấm bài nói, bài dịch và tự tra nghĩa từ, hãy thêm <strong>Gemini API key</strong> miễn phí trong{' '}
          <Link to="/settings">Cài đặt</Link>.
        </div>
      )}
      <div className="grid">
        <Link to="/review" className="card" style={{ color: 'inherit' }}>
          <div className="muted small">Cần ôn hôm nay</div>
          <div className="stat" style={{ color: due ? 'var(--accent)' : 'var(--ok)' }}>{due}</div>
          <div className="small">{due ? 'Bắt đầu ôn tập →' : 'Bạn đã ôn xong 🎉'}</div>
          {next && (
            <div className="muted small" style={{ marginTop: 4 }}>
              ⏰ Buổi ôn tiếp: {sessionLabel(next)} · {next.n} thẻ
            </div>
          )}
        </Link>
        <div className="card">
          <div className="muted small">Lịch ôn 14 ngày tới</div>
          <div className="forecast" title="Số thẻ đến hạn mỗi ngày">
            {fc.map((d, i) => (
              <div key={i} style={{ height: `${(d.n / max) * 100}%` }} title={`${d.date.toLocaleDateString('vi-VN')}: ${d.n} thẻ`} />
            ))}
          </div>
        </div>
        <div className="card">
          <div className="muted small">Kho của bạn</div>
          <div>📚 {Object.keys(cards).length} thẻ đang ôn</div>
          <div>📒 {Object.keys(notebook).length} từ trong sổ tay</div>
          <div>🩹 {Object.keys(errors).length} lỗi đã ghi</div>
        </div>
      </div>

      <div className="tabs" style={{ marginTop: 24 }}>
        {books.map((b) => (
          <button key={b.id} className={'tab' + (bookId === b.id ? ' on' : '')} onClick={() => setBookId(b.id)}>
            {b.title} {b.soon && <span className="badge">sắp có</span>}
          </button>
        ))}
      </div>
      {book.soon ? (
        <div className="card muted">Cuốn này sẽ được thêm sau khi xong B1.</div>
      ) : (
        <div className="card" style={{ padding: 8 }}>
          {book.units.map((u) => {
            const p = unitProgress(progress, u.id);
            return (
              <Link key={u.id} to={`/unit/${u.id}`} className={'unit-row' + (u.content ? '' : ' disabled')}>
                <span className="unit-no">{u.no}</span>
                <span className={'badge ' + (u.kind === 'grammar' ? 'g' : 'v')}>{u.kind === 'grammar' ? 'Ngữ pháp' : 'Từ vựng'}</span>
                <span style={{ flex: 1 }}>{u.title}</span>
                {!u.content && <span className="badge">sắp có</span>}
                {p && <span className="small muted">{p.parts} phần · {p.pct}%</span>}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
