import { useState } from 'react';
import { useStore } from '../lib/store';
import { removeError } from '../lib/collect';

export default function Errors() {
  const errors = useStore((s) => s.errors);
  const [type, setType] = useState('');
  const all = Object.values(errors).sort((a, b) => b.createdAt - a.createdAt);
  const types = [...new Set(all.map((e) => e.type).filter(Boolean))];
  const list = all.filter((e) => !type || e.type === type);

  return (
    <div className="stack">
      <h1>🩹 Sổ lỗi sai</h1>
      <p className="muted">
        Lỗi từ bài nói, bài dịch và bài tập được lưu tại đây và tự động vào lịch ôn tập để bạn không lặp lại.
      </p>
      {types.length > 0 && (
        <div className="row small">
          <span className={'chip' + (!type ? ' on' : '')} onClick={() => setType('')}>Tất cả ({all.length})</span>
          {types.map((t) => (
            <span key={t} className={'chip' + (type === t ? ' on' : '')} onClick={() => setType(t)}>
              {t} ({all.filter((e) => e.type === t).length})
            </span>
          ))}
        </div>
      )}
      <div className="card">
        {list.length === 0 && <p className="muted">Chưa có lỗi nào – hãy thử phần Luyện nói hoặc Dịch câu.</p>}
        {list.map((e) => (
          <div className="corr" key={e.id}>
            <div className="row">
              <span className="strike">{e.wrong}</span>
              <span>→</span>
              <span className="fix">{e.right}</span>
              <span className="spacer" />
              {e.type && <span className="badge">{e.type}</span>}
              <button className="icon-btn" title="Xoá" onClick={() => removeError(e.id)}>🗑</button>
            </div>
            {e.explain && <div className="small">{e.explain}</div>}
            <div className="muted small">{e.source} · {new Date(e.createdAt).toLocaleDateString('vi-VN')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
