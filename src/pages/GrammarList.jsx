import { Link } from 'react-router-dom';
import { books } from '../data/index.js';

export default function GrammarList() {
  return (
    <div className="stack">
      <h1>Ngữ pháp</h1>
      <p className="muted">Lý thuyết giải thích bằng tiếng Việt, lỗi người Việt hay mắc, bài tập và dịch câu có AI chấm.</p>
      {books.map((b) => {
        const units = b.units.filter((u) => u.kind === 'grammar');
        return (
          <div key={b.id} className="card" style={{ padding: 8 }}>
            <h3 style={{ padding: '8px 12px 0' }}>
              {b.title} {b.soon && <span className="badge">sắp có</span>}
            </h3>
            {units.map((u) => (
              <Link key={u.id} to={`/unit/${u.id}`} className={'unit-row' + (u.content ? '' : ' disabled')}>
                <span className="unit-no">{u.no}</span>
                <span style={{ flex: 1 }}>{u.title}</span>
                {!u.content && <span className="badge">sắp có</span>}
              </Link>
            ))}
          </div>
        );
      })}
    </div>
  );
}
