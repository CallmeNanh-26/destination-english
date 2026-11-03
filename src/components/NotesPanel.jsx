// Side panel next to every lesson: jot down new words/collocations (auto-filled and saved
// to the notebook) plus free-form notes for the unit.
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { lookupAndSave } from '../lib/dict';
import { update, useStore } from '../lib/store';
import { speak } from '../lib/speech';

export default function NotesPanel({ unitId }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [context, setContext] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');
  const notebook = useStore((s) => s.notebook);
  const memo = useStore((s) => s.notes[unitId]) || '';
  const recent = Object.values(notebook)
    .filter((n) => n.unit === unitId)
    .sort((a, b) => b.createdAt - a.createdAt);

  async function save(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setBusy(true);
    setMsg('');
    const { warning } = await lookupAndSave(text, context, unitId);
    setBusy(false);
    setMsg(warning || '✓ Đã lưu vào Sổ tay');
    setText('');
    setContext('');
  }

  return (
    <>
      <button className="notes-fab" onClick={() => setOpen((o) => !o)} title="Ghi chú">
        {open ? '✕' : '✎'}
      </button>
      <aside className={'card notes-panel stack' + (open ? ' open' : '')}>
        <div className="row">
          <h3 style={{ margin: 0 }}>✎ Ghi chú từ mới</h3>
          <span className="spacer" />
          <Link to="/notebook" className="small">Sổ tay →</Link>
        </div>
        <form onSubmit={save} className="stack" style={{ marginTop: 10 }}>
          <input
            className="input"
            placeholder="Từ / cụm từ / collocation…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoCapitalize="off"
          />
          <input
            className="input"
            placeholder="Câu chứa từ đó (không bắt buộc)"
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />
          <button className="btn primary" disabled={busy || !text.trim()}>
            {busy ? 'Đang tra IPA & nghĩa…' : '+ Lưu vào sổ tay'}
          </button>
          {msg && <div className="muted small">{msg}</div>}
        </form>
        {recent.length > 0 && (
          <div>
            <div className="muted small" style={{ marginBottom: 4 }}>Đã ghi trong bài này:</div>
            {recent.map((n) => (
              <div key={n.id} className="small" style={{ padding: '4px 0', borderBottom: '1px solid var(--border)' }}>
                <strong>{n.text}</strong>{' '}
                <button className="icon-btn" onClick={() => speak(n.text)}>🔊</button>
                <span className="ipa">{n.ipa}</span>
                <div className="muted">{n.vi || <em>chưa có nghĩa</em>}</div>
              </div>
            ))}
          </div>
        )}
        <div>
          <div className="muted small" style={{ marginBottom: 4 }}>Ghi chú tự do cho bài này:</div>
          <textarea
            className="textarea"
            value={memo}
            placeholder="Ý chính, mẹo, câu hay…"
            onChange={(e) => update('notes', unitId, e.target.value)}
          />
        </div>
      </aside>
    </>
  );
}
