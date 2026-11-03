// Review: (1) cards due by the forgetting curve, (2) a hand-picked word set practised with
// flashcards or AI-generated translation tasks.
import { useEffect, useMemo, useState } from 'react';
import { allUnits, findUnit } from '../data/index.js';
import { useStore } from '../lib/store';
import { addCard, dueCards, forecast, grade, GRADES, previewIntervals } from '../lib/srs';
import { downloadIcs, googleCalendarLink } from '../lib/calendar';
import { hasKey, makeTranslationTasks } from '../lib/ai';
import { GROUPS, SpeakBtn, WordDetail, vocabCardId } from '../components/Vocab.jsx';
import ExerciseSection from '../components/Exercise.jsx';

function resolve(c, notebook, errors) {
  if (c.kind === 'vocab') {
    const [unitId, w] = c.ref.split('|');
    const v = findUnit(unitId)?.content?.vocab.find((x) => x.w === w);
    return v && { label: 'Từ vựng · ' + findUnit(unitId).content.title, word: v };
  }
  if (c.kind === 'note') {
    const n = notebook[c.ref];
    return n && { label: 'Sổ tay', word: noteAsWord(n) };
  }
  const e = errors[c.ref];
  return e && { label: 'Lỗi sai · ' + (e.type || ''), error: e };
}

const noteAsWord = (n) => ({ w: n.text, ipa: n.ipa, pos: n.pos, vi: n.vi, en: n.en, ex: n.ex, col: n.col, syn: n.syn, ant: n.ant, fam: [] });

export default function Review() {
  const [mode, setMode] = useState('due');
  return (
    <div className="stack">
      <h1>Ôn tập</h1>
      <div className="tabs">
        <button className={'tab' + (mode === 'due' ? ' on' : '')} onClick={() => setMode('due')}>🔁 Ôn theo lịch</button>
        <button className={'tab' + (mode === 'pick' ? ' on' : '')} onClick={() => setMode('pick')}>🎯 Tự chọn từ để ôn</button>
      </div>
      {mode === 'due' ? <DueReview /> : <PickPractice />}
    </div>
  );
}

// ---------- shared card viewer with ← → navigation ----------
function CardViewer({ items, onGraded }) {
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const idx = Math.min(i, items.length - 1);
  const cur = items[idx];

  const go = (step) => {
    setFlipped(false);
    setI((x) => (Math.min(x, items.length - 1) + step + items.length) % items.length);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, textarea, select')) return;
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === ' ') {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!cur) return null;

  function rate(r) {
    grade(cur.id, r);
    setFlipped(false);
    onGraded?.(cur);
    // A graded due card leaves the queue, so the same index already shows the next card.
    if (!onGraded) go(1);
  }

  const { item } = cur;
  return (
    <>
      <div className="row" style={{ justifyContent: 'center' }}>
        <button className="btn" onClick={() => go(-1)} title="Thẻ trước (←)">←</button>
        <span className="muted">{idx + 1} / {items.length}</span>
        <button className="btn" onClick={() => go(1)} title="Thẻ sau (→)">→</button>
      </div>
      <div className="row small" style={{ maxWidth: 620, margin: '0 auto', width: '100%' }}>
        <span className="badge">{item.label}</span>
      </div>
      <div
        className="card"
        style={{ maxWidth: 620, margin: '0 auto', width: '100%', minHeight: 260, cursor: 'pointer' }}
        onClick={() => setFlipped((f) => !f)}
      >
        {item.word ? (
          <>
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div className="flash-big">{item.word.w}</div>
              <div className="ipa">{item.word.ipa} {item.word.pos && `· ${item.word.pos}`}</div>
              <SpeakBtn text={item.word.w} />
            </div>
            {flipped ? (
              <div className="vocab-detail"><WordDetail v={item.word} /></div>
            ) : (
              <p className="muted small" style={{ textAlign: 'center' }}>Nhớ lại nghĩa, cách dùng… rồi chạm để xem · ← → để lướt</p>
            )}
          </>
        ) : (
          <>
            <div className="muted small">Câu này sai ở đâu? Hãy tự sửa trong đầu:</div>
            <h3 style={{ margin: '10px 0' }}>{item.error.wrong}</h3>
            {flipped ? (
              <div className="vocab-detail">
                <div className="fix">✓ {item.error.right}</div>
                {item.error.explain && <div className="small" style={{ marginTop: 6 }}>{item.error.explain}</div>}
                {item.error.source && <div className="muted small" style={{ marginTop: 6 }}>Nguồn: {item.error.source}</div>}
              </div>
            ) : (
              <p className="muted small">Chạm để xem cách sửa</p>
            )}
          </>
        )}
      </div>
      {flipped && (
        <div className="grades">
          {GRADES.map((g) => (
            <button key={g.rating} className={'grade ' + g.cls} onClick={() => rate(g.rating)}>
              {g.label}
              <small>{previewIntervals(cur.id)[g.rating]}</small>
            </button>
          ))}
        </div>
      )}
    </>
  );
}

// ---------- 1. due by schedule ----------
function DueReview() {
  const { cards, notebook, errors, settings } = useStore((s) => s);
  const [reviewed, setReviewed] = useState(0);

  const queue = useMemo(
    () =>
      dueCards(cards)
        .sort((a, b) => new Date(a.card.due) - new Date(b.card.due))
        .map((c) => ({ id: c.id, item: resolve(c, notebook, errors) }))
        .filter((x) => x.item),
    [cards, notebook, errors],
  );
  const next = forecast(cards, 30).find((d, i) => i > 0 && d.n > 0);

  return (
    <>
      <p className="muted">
        Thuật toán FSRS dựa trên đường cong lãng quên: thẻ bạn hay quên sẽ quay lại sớm, thẻ đã nhớ chắc sẽ giãn ra vài tuần, vài tháng.
        {reviewed > 0 && ` Hôm nay đã ôn ${reviewed} thẻ.`}
      </p>
      {queue.length ? (
        <CardViewer items={queue} onGraded={() => setReviewed((n) => n + 1)} />
      ) : (
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem' }}>🎉</div>
          <h2>Không còn thẻ nào cần ôn</h2>
          <p className="muted">
            {Object.keys(cards).length === 0
              ? 'Hãy học flashcard trong một Unit, lưu từ vào sổ tay hoặc làm bài nói/dịch để có thẻ ôn tập.'
              : next
                ? `Lần ôn tiếp theo: ${next.date.toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'numeric' })} (${next.n} thẻ). Muốn ôn thêm? Dùng tab “Tự chọn từ để ôn”.`
                : 'Lịch ôn 30 ngày tới đang trống.'}
          </p>
        </div>
      )}

      <div className="card">
        <h3>📅 Nhắc lịch ôn trên Calendar</h3>
        <p className="muted small">
          Giờ ôn mỗi ngày: <strong>{settings.reviewTime}</strong> (đổi trong Cài đặt). File .ics chứa các buổi ôn 30 ngày tới kèm số thẻ, nhập
          được vào Google Calendar, Apple Calendar và Outlook. Lịch ôn thay đổi theo kết quả học, nên thỉnh thoảng hãy tải lại.
        </p>
        <div className="row">
          <button className="btn primary" disabled={!Object.keys(cards).length} onClick={() => downloadIcs(cards, settings.reviewTime)}>
            ⬇ Tải lịch ôn (.ics)
          </button>
          {(queue.length > 0 || next) && (
            <a
              className="btn"
              target="_blank"
              rel="noreferrer"
              href={queue.length ? googleCalendarLink(new Date(), settings.reviewTime, queue.length) : googleCalendarLink(next.date, settings.reviewTime, next.n)}
            >
              + Thêm buổi ôn gần nhất vào Google Calendar
            </a>
          )}
        </div>
      </div>
    </>
  );
}

// ---------- 2. hand-picked words ----------
function PickPractice() {
  const notebook = useStore((s) => s.notebook);
  const [source, setSource] = useState('all');
  const [q, setQ] = useState('');
  const [picked, setPicked] = useState(() => new Set());
  const [activity, setActivity] = useState(null); // null | 'flash' | 'translate'

  // Every word available for picking: unit vocabulary + notebook.
  const pool = useMemo(() => {
    const fromUnits = allUnits
      .filter((u) => u.content?.vocab)
      .flatMap((u) =>
        u.content.vocab.map((v) => ({
          key: vocabCardId(u.id, v.w),
          source: u.id,
          sourceLabel: `Unit ${u.no}`,
          group: GROUPS[v.g],
          word: v,
          add: () => addCard(vocabCardId(u.id, v.w), 'vocab', `${u.id}|${v.w}`, u.id),
        })),
      );
    const fromNotes = Object.values(notebook).map((n) => ({
      key: `n:${n.id}`,
      source: 'notebook',
      sourceLabel: 'Sổ tay',
      word: noteAsWord(n),
      add: () => addCard(`n:${n.id}`, 'note', n.id, n.unit),
    }));
    return [...fromUnits, ...fromNotes];
  }, [notebook]);

  const sources = [
    ['all', 'Tất cả'],
    ...allUnits.filter((u) => u.content?.vocab).map((u) => [u.id, `Unit ${u.no} · ${u.content.title}`]),
    ['notebook', 'Sổ tay'],
  ];
  const visible = pool.filter(
    (p) => (source === 'all' || p.source === source) && (!q || `${p.word.w} ${p.word.vi}`.toLowerCase().includes(q.toLowerCase())),
  );
  const chosen = pool.filter((p) => picked.has(p.key));

  const toggle = (key) =>
    setPicked((s) => {
      const n = new Set(s);
      n.has(key) ? n.delete(key) : n.add(key);
      return n;
    });

  if (activity === 'flash') {
    return (
      <>
        <button className="btn small" onClick={() => setActivity(null)}>← Chọn lại từ</button>
        <CardViewer items={chosen.map((p) => ({ id: p.key, item: { label: p.sourceLabel, word: p.word } }))} />
      </>
    );
  }
  if (activity === 'translate') {
    return (
      <>
        <button className="btn small" onClick={() => setActivity(null)}>← Chọn lại từ</button>
        <TranslateTasks words={chosen.map((p) => p.word)} />
      </>
    );
  }

  return (
    <>
      <div className="card stack">
        <div className="row">
          <select className="select" style={{ maxWidth: 280 }} value={source} onChange={(e) => setSource(e.target.value)}>
            {sources.map(([k, label]) => (
              <option key={k} value={k}>{label}</option>
            ))}
          </select>
          <input className="input" style={{ flex: 1, minWidth: 160 }} placeholder="Tìm từ…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="row small">
          <button className="btn small" onClick={() => setPicked((s) => new Set([...s, ...visible.map((p) => p.key)]))}>Chọn tất cả ({visible.length})</button>
          <button className="btn small" onClick={() => setPicked(new Set())}>Bỏ chọn</button>
          <span className="spacer" />
          <strong>Đã chọn {picked.size} từ</strong>
        </div>
        <div style={{ maxHeight: 380, overflow: 'auto', borderTop: '1px solid var(--border)' }}>
          {visible.map((p) => (
            <label key={p.key} className="unit-row" style={{ cursor: 'pointer' }}>
              <input type="checkbox" checked={picked.has(p.key)} onChange={() => toggle(p.key)} />
              <strong>{p.word.w}</strong>
              <span className="muted small" style={{ flex: 1 }}>{p.word.vi}</span>
              <span className="badge">{p.group || p.sourceLabel}</span>
            </label>
          ))}
          {!visible.length && <p className="muted" style={{ padding: 12 }}>Không có từ nào.</p>}
        </div>
      </div>
      <div className="row">
        <button className="btn primary" disabled={!picked.size} onClick={() => {
            // Grading needs an SRS card; picked words join the schedule from now on.
            chosen.forEach((p) => p.add());
            setActivity('flash');
          }}>🃏 Ôn bằng flashcard</button>
        <button className="btn primary" disabled={!picked.size || !hasKey()} onClick={() => setActivity('translate')}>✨ AI ra đề dịch câu</button>
        {!hasKey() && <span className="muted small">Cần Gemini key để AI ra đề.</span>}
      </div>
    </>
  );
}

function TranslateTasks({ words }) {
  const [count, setCount] = useState(Math.min(8, Math.max(4, words.length)));
  const [tasks, setTasks] = useState(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  async function generate() {
    setBusy(true);
    setErr('');
    try {
      // Cap the list so the prompt stays short; shuffle so big selections still vary each time.
      const list = [...words].sort(() => Math.random() - 0.5).slice(0, 25).map((w) => (w.vi ? `${w.w} (${w.vi})` : w.w));
      setTasks(await makeTranslationTasks(list, count));
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="stack">
      <div className="card stack">
        <div className="small">
          <strong>Từ đã chọn ({words.length}):</strong> {words.map((w) => w.w).join(' · ')}
        </div>
        <div className="row">
          <span className="small">Số câu:</span>
          {[4, 6, 8, 10].map((n) => (
            <span key={n} className={'chip' + (count === n ? ' on' : '')} onClick={() => setCount(n)}>{n}</span>
          ))}
          <button className="btn primary" disabled={busy} onClick={generate}>
            {busy ? 'AI đang ra đề…' : tasks ? '🔄 Ra đề mới' : '✨ Ra đề'}
          </button>
        </div>
        {err && <div className="alert bad">{err}</div>}
      </div>
      {tasks && (
        <ExerciseSection
          key={JSON.stringify(tasks).length + tasks[0]?.vi}
          section={{
            title: 'Dịch câu Việt → Anh',
            instruction: 'Dùng các từ đã chọn. Bấm “Chấm bằng AI” ở từng câu để được sửa lỗi và gợi ý cách nói hay hơn.',
            items: tasks.map((t) => ({ t: 'tr', ...t })),
          }}
          source="Ôn tập tự chọn – dịch câu"
        />
      )}
    </div>
  );
}
