import { useState } from 'react';
import { findUnit } from '../data/index.js';
import { useStore, update } from '../lib/store';
import { removeNote } from '../lib/collect';
import { lookupAndSave } from '../lib/dict';
import { speak } from '../lib/speech';
import { WordDetail } from '../components/Vocab.jsx';

export default function Notebook() {
  const notebook = useStore((s) => s.notebook);
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(null);
  const [editing, setEditing] = useState(null);
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);

  const list = Object.values(notebook)
    .filter((n) => !q || (n.text + ' ' + n.vi).toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => b.createdAt - a.createdAt);

  async function add(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setBusy(true);
    await lookupAndSave(text, '', '');
    setBusy(false);
    setText('');
  }

  return (
    <div className="stack">
      <h1>📒 Sổ tay từ vựng</h1>
      <p className="muted">Từ bạn ghi chú trong các bài học tự động vào đây, kèm phát âm và nghĩa, và được đưa vào lịch ôn tập.</p>
      <form className="row" onSubmit={add}>
        <input className="input" style={{ flex: 1, minWidth: 200 }} placeholder="Thêm nhanh từ / cụm từ…" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="btn primary" disabled={busy}>{busy ? 'Đang tra…' : '+ Thêm'}</button>
      </form>
      <input className="input" placeholder={`Tìm trong ${Object.keys(notebook).length} mục…`} value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="card">
        {list.length === 0 && <p className="muted">Chưa có từ nào.</p>}
        {list.map((n) => (
          <div className="vocab-item" key={n.id}>
            <div className="vocab-head" onClick={() => setOpen(open === n.id ? null : n.id)}>
              <span className="vocab-word">{n.text}</span>
              {n.pos && <span className="badge">{n.pos}</span>}
              <span className="ipa">{n.ipa}</span>
              <button
                className="icon-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  n.audio ? new Audio(n.audio).play() : speak(n.text);
                }}
              >
                🔊
              </button>
              <span className="muted">{n.vi || <em>chưa có nghĩa</em>}</span>
              <span className="spacer" />
              {n.unit && <span className="badge">{findUnit(n.unit)?.content?.title || n.unit}</span>}
            </div>
            {open === n.id && (
              <div className="vocab-detail">
                {editing === n.id ? (
                  <EditNote n={n} onDone={() => setEditing(null)} />
                ) : (
                  <>
                    <WordDetail v={{ ...n, w: n.text }} show={{ vi: false }} />
                    <div className="row" style={{ marginTop: 10 }}>
                      <button className="btn small" onClick={() => setEditing(n.id)}>✏️ Sửa</button>
                      <button className="btn small" onClick={() => lookupAndSave(n.text, n.context, n.unit)}>✨ Tra lại bằng AI</button>
                      <button className="btn small danger" onClick={() => confirm(`Xoá “${n.text}”?`) && removeNote(n.id)}>Xoá</button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function EditNote({ n, onDone }) {
  const [f, setF] = useState({ ipa: n.ipa || '', vi: n.vi || '', en: n.en || '', ex: (n.ex || []).join('\n') });
  const field = (k, label, multi) => (
    <label className="small" style={{ display: 'block', marginBottom: 8 }}>
      {label}
      {multi ? (
        <textarea className="textarea" value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} />
      ) : (
        <input className="input" value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} />
      )}
    </label>
  );
  return (
    <>
      {field('ipa', 'Phát âm (IPA)')}
      {field('vi', 'Nghĩa tiếng Việt')}
      {field('en', 'Nghĩa tiếng Anh')}
      {field('ex', 'Ví dụ (mỗi dòng 1 câu)', true)}
      <button
        className="btn primary small"
        onClick={() => {
          update('notebook', n.id, { ...n, ...f, ex: f.ex.split('\n').filter(Boolean) });
          onDone();
        }}
      >
        Lưu
      </button>
    </>
  );
}
