// Word list with expandable details, and the flashcard trainer.
import { useEffect, useMemo, useState } from 'react';
import { speak } from '../lib/speech';
import { addCard, grade, GRADES, previewIntervals } from '../lib/srs';
import { useStore } from '../lib/store';
import { shuffle } from '../lib/text.jsx';

export const GROUPS = {
  topic: 'Từ vựng chủ đề',
  phrasal: 'Phrasal verbs',
  prep: 'Cụm giới từ',
  wordform: 'Word formation',
  pattern: 'Word patterns',
};

export const vocabCardId = (unitId, w) => `v:${unitId}:${w}`;

export function SpeakBtn({ text }) {
  return (
    <button
      className="icon-btn"
      title="Nghe phát âm"
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
    >
      🔊
    </button>
  );
}

export function WordDetail({ v, show = {} }) {
  const on = (k) => show[k] !== false;
  const rows = [
    on('vi') && v.vi && ['Nghĩa tiếng Việt', v.vi],
    on('en') && v.en && ['Nghĩa tiếng Anh', v.en],
    on('fam') && v.fam?.length > 0 && ['Từ mở rộng (word family)', v.fam.join(' · ')],
    on('syn') && v.syn?.length > 0 && ['Đồng nghĩa', v.syn.join(', ')],
    on('ant') && v.ant?.length > 0 && ['Trái nghĩa', v.ant.join(', ')],
    on('col') && v.col?.length > 0 && ['Collocations', v.col.join(' · ')],
    on('ex') && v.ex?.length > 0 && ['Ví dụ', v.ex],
  ].filter(Boolean);
  return (
    <dl style={{ margin: 0 }}>
      {rows.map(([label, val]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>
            {Array.isArray(val)
              ? val.map((x, i) => (
                  <div key={i}>
                    <em>{x}</em> <SpeakBtn text={x} />
                  </div>
                ))
              : val}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function VocabList({ unit }) {
  const [open, setOpen] = useState(null);
  const [q, setQ] = useState('');
  const cards = useStore((s) => s.cards);
  const groups = Object.keys(GROUPS).filter((g) => unit.vocab.some((v) => v.g === g));
  const match = (v) => !q || (v.w + ' ' + v.vi).toLowerCase().includes(q.toLowerCase());

  return (
    <div className="stack">
      <div className="row">
        <input className="input" style={{ maxWidth: 320 }} placeholder="Tìm từ…" value={q} onChange={(e) => setQ(e.target.value)} />
        <span className="spacer" />
        <button
          className="btn small"
          onClick={() => unit.vocab.forEach((v) => addCard(vocabCardId(unit.id, v.w), 'vocab', `${unit.id}|${v.w}`, unit.id))}
        >
          + Thêm cả bài vào ôn tập
        </button>
      </div>
      {groups.map((g) => {
        const list = unit.vocab.filter((v) => v.g === g && match(v));
        if (!list.length) return null;
        return (
          <div className="card" key={g}>
            <h3>
              {GROUPS[g]} <span className="muted small">({list.length})</span>
            </h3>
            {list.map((v) => {
              const id = vocabCardId(unit.id, v.w);
              return (
                <div className="vocab-item" key={v.w}>
                  <div className="vocab-head" onClick={() => setOpen(open === v.w ? null : v.w)}>
                    <span className="vocab-word">{v.w}</span>
                    <span className="badge">{v.pos}</span>
                    <span className="ipa">{v.ipa}</span>
                    <SpeakBtn text={v.w} />
                    <span className="muted">{v.vi}</span>
                    <span className="spacer" />
                    {cards[id] ? (
                      <span className="badge" title="Đã có trong lịch ôn">🔁</span>
                    ) : (
                      <button
                        className="btn ghost small"
                        onClick={(e) => {
                          e.stopPropagation();
                          addCard(id, 'vocab', `${unit.id}|${v.w}`, unit.id);
                        }}
                      >
                        + Ôn tập
                      </button>
                    )}
                  </div>
                  {open === v.w && (
                    <div className="vocab-detail">
                      <WordDetail v={v} show={{ vi: false }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

const TOGGLES = [
  ['vi', 'Nghĩa Việt'],
  ['en', 'Nghĩa Anh'],
  ['fam', 'Từ mở rộng'],
  ['syn', 'Đồng nghĩa'],
  ['ant', 'Trái nghĩa'],
  ['col', 'Collocation'],
  ['ex', 'Ví dụ'],
];

export function Flashcards({ unit }) {
  const [groups, setGroups] = useState(() => new Set(Object.keys(GROUPS)));
  const [show, setShow] = useState({ vi: true, en: true, fam: true, syn: true, ant: true, col: true, ex: true });
  const [front, setFront] = useState('en'); // 'en' = word on the front, 'vi' = Vietnamese meaning on the front
  const [order, setOrder] = useState(0); // bump to reshuffle
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const deck = useMemo(() => {
    const list = unit.vocab.filter((v) => groups.has(v.g));
    return order ? shuffle(list) : list;
  }, [unit, groups, order]);
  const v = deck[Math.min(i, deck.length - 1)];

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, textarea, select')) return;
      if (e.key === ' ') {
        e.preventDefault();
        setFlipped((f) => !f);
      }
      if (e.key === 'ArrowRight') next(1);
      if (e.key === 'ArrowLeft') next(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  function next(step) {
    setFlipped(false);
    setI((x) => (x + step + deck.length) % deck.length);
  }

  function rate(rating) {
    const id = vocabCardId(unit.id, v.w);
    addCard(id, 'vocab', `${unit.id}|${v.w}`, unit.id);
    grade(id, rating);
    next(1);
  }

  const toggleGroup = (g) =>
    setGroups((s) => {
      const n = new Set(s);
      n.has(g) ? n.delete(g) : n.add(g);
      return n.size ? n : s;
    });

  const intervals = v ? previewIntervals(vocabCardId(unit.id, v.w)) : {};

  return (
    <div className="stack">
      <div className="card stack" style={{ padding: 14 }}>
        <div className="row small">
          <strong>Nhóm:</strong>
          {Object.entries(GROUPS).map(([g, label]) => (
            <span key={g} className={'chip' + (groups.has(g) ? ' on' : '')} onClick={() => { toggleGroup(g); setI(0); }}>
              {label}
            </span>
          ))}
        </div>
        <div className="row small">
          <strong>Hiện ở mặt sau:</strong>
          {TOGGLES.map(([k, label]) => (
            <span key={k} className={'chip' + (show[k] ? ' on' : '')} onClick={() => setShow((s) => ({ ...s, [k]: !s[k] }))}>
              {show[k] ? '👁' : '🙈'} {label}
            </span>
          ))}
        </div>
        <div className="row small">
          <strong>Mặt trước:</strong>
          <span className={'chip' + (front === 'en' ? ' on' : '')} onClick={() => setFront('en')}>Từ tiếng Anh</span>
          <span className={'chip' + (front === 'vi' ? ' on' : '')} onClick={() => setFront('vi')}>Nghĩa tiếng Việt</span>
          <span className="spacer" />
          <button className="btn small" onClick={() => { setOrder((o) => o + 1); setI(0); setFlipped(false); }}>🔀 Trộn</button>
        </div>
      </div>

      {v && (
        <>
          <div className="row" style={{ justifyContent: 'center' }}>
            <button className="btn ghost" onClick={() => next(-1)}>←</button>
            <span className="muted">{i + 1} / {deck.length}</span>
            <button className="btn ghost" onClick={() => next(1)}>→</button>
          </div>
          <div className="flash-wrap">
            <div className={'flash' + (flipped ? ' flipped' : '')} onClick={() => setFlipped((f) => !f)}>
              <div className="flash-face">
                {front === 'en' ? (
                  <>
                    <div className="flash-big">{v.w}</div>
                    <div className="ipa">{v.ipa} · {v.pos}</div>
                    <div style={{ marginTop: 10 }}><SpeakBtn text={v.w} /></div>
                  </>
                ) : (
                  <>
                    <div className="flash-big" style={{ fontSize: '1.5rem' }}>{v.vi}</div>
                    <div className="muted">{v.pos}</div>
                  </>
                )}
                <div className="muted small" style={{ marginTop: 20 }}>Chạm hoặc nhấn Space để lật</div>
              </div>
              <div className="flash-face flash-back">
                <div className="row">
                  <span className="vocab-word" style={{ fontSize: '1.3rem' }}>{v.w}</span>
                  <span className="ipa">{v.ipa}</span>
                  <SpeakBtn text={v.w} />
                </div>
                <div className="vocab-detail" style={{ background: 'transparent', padding: 0 }}>
                  <WordDetail v={v} show={show} />
                </div>
              </div>
            </div>
          </div>
          <div className="grades">
            {GRADES.map((g) => (
              <button key={g.rating} className={'grade ' + g.cls} onClick={() => rate(g.rating)}>
                {g.label}
                <small>{intervals[g.rating]}</small>
              </button>
            ))}
          </div>
          <p className="muted small" style={{ textAlign: 'center' }}>
            Chấm mức độ nhớ để thuật toán FSRS (đường cong lãng quên) xếp lịch ôn cho từ này.
          </p>
        </>
      )}
    </div>
  );
}
