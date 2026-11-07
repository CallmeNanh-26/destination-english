import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findUnit } from '../data/index.js';
import { Flashcards, VocabList } from '../components/Vocab.jsx';
import { Listening, Reading } from '../components/Practice.jsx';
import ExerciseSection from '../components/Exercise.jsx';
import Speaking from '../components/Speaking.jsx';
import NotesPanel from '../components/NotesPanel.jsx';
import { Rich } from '../lib/text.jsx';
import { saveProgress, useStore } from '../lib/store';
import { unitProgress } from '../lib/progress';
import { UnitProgress } from '../components/Progress.jsx';

// Which progress part each tab feeds, to show a ✓ on finished tabs.
const TAB_PART = { flash: 'flash', reading: 'reading', listening: 'listening', exercises: 'exercises', speaking: 'speaking', theory: 'theory' };

const VOCAB_TABS = [
  ['words', '📚 Từ vựng'],
  ['flash', '🃏 Flashcard'],
  ['reading', '📖 Đọc hiểu'],
  ['listening', '🎧 Nghe'],
  ['exercises', '✏️ Bài tập'],
  ['speaking', '🗣️ Luyện nói'],
];
const GRAMMAR_TABS = [
  ['theory', '📐 Lý thuyết'],
  ['exercises', '✏️ Bài tập'],
];

export default function UnitPage() {
  const { id } = useParams();
  return <Unit key={id} id={id} />;
}

function Unit({ id }) {
  const meta = findUnit(id);
  const unit = meta?.content;
  const tabs = meta?.kind === 'grammar' ? GRAMMAR_TABS : VOCAB_TABS;
  const [tab, setTab] = useState(tabs[0][0]);
  const state = useStore((s) => s);
  const p = unit ? unitProgress(meta, state) : null;
  const full = (k) => p?.parts.find((x) => x.key === TAB_PART[k] && x.n >= x.of);

  if (!unit) {
    return (
      <div className="card">
        <h2>Bài này chưa có nội dung</h2>
        <p className="muted">Mình sẽ bổ sung dần theo từng đợt.</p>
        <Link to="/">← Về trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="with-notes">
      <div>
        <Link to={meta.kind === 'grammar' ? '/grammar' : '/'} className="small">← {meta.kind === 'grammar' ? 'Ngữ pháp' : 'Trang chủ'}</Link>
        <div className="row" style={{ margin: '6px 0 2px' }}>
          <span className={'badge ' + (meta.kind === 'grammar' ? 'g' : 'v')}>
            Unit {meta.no} · {meta.kind === 'grammar' ? 'Grammar' : 'Vocabulary'}
          </span>
        </div>
        <h1>{unit.title}</h1>
        <p className="muted">{unit.titleVi}</p>
        <UnitProgress p={p} />
        <div className="tabs">
          {tabs.map(([k, label]) => (
            <button key={k} className={'tab' + (tab === k ? ' on' : '')} onClick={() => setTab(k)}>
              {label}
              {full(k) && <span style={{ color: 'var(--ok)', marginLeft: 4 }}>✓</span>}
            </button>
          ))}
        </div>
        {tab === 'words' && <VocabList unit={unit} />}
        {tab === 'flash' && <Flashcards unit={unit} />}
        {tab === 'reading' && <Reading unit={unit} />}
        {tab === 'listening' && <Listening unit={unit} />}
        {tab === 'speaking' && <Speaking unit={unit} />}
        {tab === 'theory' && (
          <>
            <Theory blocks={unit.blocks} />
            <div className="row" style={{ marginTop: 14 }}>
              {state.progress[`${unit.id}:theory`]?.done ? (
                <span className="badge v">✓ Đã học xong lý thuyết</span>
              ) : (
                <button className="btn primary" onClick={() => saveProgress(unit.id, 'theory', 1, 0)}>✓ Đánh dấu đã học xong lý thuyết</button>
              )}
              <button className="btn" onClick={() => setTab('exercises')}>Làm bài tập →</button>
            </div>
          </>
        )}
        {tab === 'exercises' && (
          <div className="stack">
            {unit.exercises.map((s, i) => (
              <ExerciseSection key={i} section={s} unitId={unit.id} sectionKey={`ex-${i}`} source={`${unit.title} – ${s.title}`} />
            ))}
          </div>
        )}
      </div>
      <NotesPanel unitId={unit.id} />
    </div>
  );
}

function Theory({ blocks }) {
  return (
    <div className="card">
      {blocks.map((b, i) => {
        if (b.type === 'h') return <h2 key={i} style={{ marginTop: i ? 24 : 0 }}>{b.text}</h2>;
        if (b.type === 'p') return <p key={i}><Rich text={b.text} /></p>;
        if (b.type === 'tip') return <div key={i} className="tip">💡 <Rich text={b.text} /></div>;
        if (b.type === 'warn') return <div key={i} className="warn">⚠️ <Rich text={b.text} /></div>;
        if (b.type === 'list')
          return (
            <ul key={i}>
              {b.items.map((x, j) => (
                <li key={j}><Rich text={x} /></li>
              ))}
            </ul>
          );
        if (b.type === 'table')
          return (
            <div key={i} className="table-scroll">
              <table className="g-table">
                <thead>
                  <tr>{b.head.map((h, j) => <th key={j}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {b.rows.map((r, j) => (
                    <tr key={j}>{r.map((c, k) => <td key={k}><Rich text={c} /></td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        return null;
      })}
    </div>
  );
}
