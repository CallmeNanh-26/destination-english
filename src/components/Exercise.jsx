// Renders one exercise section and grades it.
// Item types: mcq | tf | gap | fix | match | tr (AI-graded translation) | dict (dictation).
import { useMemo, useState } from 'react';
import { isCorrect, normalize, shuffle, Rich } from '../lib/text.jsx';
import { saveProgress } from '../lib/store';
import { addError } from '../lib/collect';
import { gradeTranslation, hasKey } from '../lib/ai';

const TF = [
  ['T', 'True'],
  ['F', 'False'],
  ['NG', 'Not Given'],
];

function autoGradable(item) {
  return item.t !== 'tr';
}

function check(item, value) {
  switch (item.t) {
    case 'mcq':
    case 'tf':
      return value === item.a;
    case 'gap':
    case 'fix':
    case 'dict':
      return isCorrect(value || '', item.a);
    case 'match':
      return item.pairs.every(([l, r]) => (value || {})[l] === r);
    default:
      return null;
  }
}

function rightAnswer(item) {
  if (item.t === 'mcq') return item.o[item.a];
  if (item.t === 'tf') return TF.find(([k]) => k === item.a)[1];
  if (item.t === 'match') return item.pairs.map((p) => p.join(' – ')).join('; ');
  return item.a[0];
}

export default function ExerciseSection({ section, unitId, sectionKey, source }) {
  const [values, setValues] = useState({});
  const [checked, setChecked] = useState(false);
  const set = (i, v) => setValues((s) => ({ ...s, [i]: v }));

  const gradable = section.items.filter(autoGradable);
  const score = section.items.reduce((n, it, i) => n + (autoGradable(it) && check(it, values[i]) ? 1 : 0), 0);

  function submit() {
    setChecked(true);
    if (unitId && sectionKey) saveProgress(unitId, sectionKey, score, gradable.length);
  }

  function reset() {
    setValues({});
    setChecked(false);
  }

  return (
    <div className="card">
      {section.title && <h3>{section.title}</h3>}
      {section.instruction && <p className="muted small">{section.instruction}</p>}
      {section.items.map((item, i) => (
        <Item
          key={i}
          n={i + 1}
          item={item}
          value={values[i]}
          onChange={(v) => set(i, v)}
          checked={checked}
          source={source || section.title}
        />
      ))}
      {gradable.length > 0 && (
        <div className="row" style={{ marginTop: 12 }}>
          {!checked ? (
            <button className="btn primary" onClick={submit}>
              Kiểm tra
            </button>
          ) : (
            <div className="score-bar" style={{ marginTop: 0, flex: 1 }}>
              <strong>
                Đúng {score}/{gradable.length}
              </strong>
              <div className="progress" style={{ flex: 1 }}>
                <div style={{ width: `${(score / gradable.length) * 100}%` }} />
              </div>
              <button className="btn small" onClick={reset}>
                Làm lại
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Item({ n, item, value, onChange, checked, source }) {
  const ok = checked ? check(item, value) : null;
  return (
    <div className="ex-item">
      {item.t === 'mcq' && <Mcq n={n} item={item} value={value} onChange={onChange} checked={checked} />}
      {item.t === 'tf' && <TrueFalse n={n} item={item} value={value} onChange={onChange} checked={checked} />}
      {item.t === 'gap' && <Gap n={n} item={item} value={value} onChange={onChange} ok={ok} checked={checked} />}
      {item.t === 'fix' && <Fix n={n} item={item} value={value} onChange={onChange} ok={ok} checked={checked} />}
      {item.t === 'dict' && <Dictation n={n} item={item} value={value} onChange={onChange} ok={ok} checked={checked} />}
      {item.t === 'match' && <Match item={item} value={value} onChange={onChange} checked={checked} />}
      {item.t === 'tr' && <Translate n={n} item={item} source={source} />}
      {checked && item.t !== 'tr' && (
        <div className={'feedback ' + (ok ? 'right' : 'wrong')}>
          {ok ? '✓ Chính xác' : <>✗ Đáp án: <strong>{rightAnswer(item)}</strong></>}
          {item.ex && <span className="muted"> · {item.ex}</span>}
          {!ok && ['gap', 'fix', 'mcq'].includes(item.t) && (
            <button
              className="btn ghost small"
              onClick={(e) => {
                addError({
                  wrong: item.t === 'gap' ? item.q.replace('___', `[${value || '…'}]`) : item.t === 'mcq' ? item.q : item.q,
                  right: item.t === 'gap' ? item.q.replace('___', item.a[0]) : rightAnswer(item),
                  type: 'bài tập',
                  explain: item.ex || '',
                  source,
                });
                e.currentTarget.textContent = '✓ Đã lưu';
                e.currentTarget.disabled = true;
              }}
            >
              + Sổ lỗi sai
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function Mcq({ n, item, value, onChange, checked }) {
  return (
    <>
      <div className="ex-q">
        <span className="ex-num">{n}.</span>
        <Rich text={item.q} />
      </div>
      <div className={item.o.every((o) => o.length < 18) ? 'opts-inline' : ''}>
        {item.o.map((o, j) => {
          let cls = 'opt';
          if (checked && j === item.a) cls += ' right';
          else if (checked && j === value) cls += ' wrong';
          else if (j === value) cls += ' sel';
          return (
            <button key={j} className={cls} disabled={checked} onClick={() => onChange(j)}>
              {String.fromCharCode(65 + j)}. {o}
            </button>
          );
        })}
      </div>
    </>
  );
}

function TrueFalse({ n, item, value, onChange, checked }) {
  return (
    <>
      <div className="ex-q">
        <span className="ex-num">{n}.</span>
        {item.q}
      </div>
      <div className="opts-inline">
        {TF.map(([k, label]) => {
          let cls = 'opt';
          if (checked && k === item.a) cls += ' right';
          else if (checked && k === value) cls += ' wrong';
          else if (k === value) cls += ' sel';
          return (
            <button key={k} className={cls} disabled={checked} onClick={() => onChange(k)}>
              {label}
            </button>
          );
        })}
      </div>
    </>
  );
}

function Gap({ n, item, value, onChange, ok, checked }) {
  const parts = item.q.split('___');
  const input = (
    <input
      className={'input gap-input' + (checked ? (ok ? ' right' : ' wrong') : '')}
      value={value || ''}
      disabled={checked}
      onChange={(e) => onChange(e.target.value)}
      autoCapitalize="off"
      autoCorrect="off"
      spellCheck={false}
    />
  );
  return (
    <div className="ex-q">
      <span className="ex-num">{n}.</span>
      {parts.length > 1 ? (
        <>
          {parts[0]}
          {input}
          {parts.slice(1).join('___')}
        </>
      ) : (
        <>
          {item.q} {input}
        </>
      )}
    </div>
  );
}

function Fix({ n, item, value, onChange, ok, checked }) {
  return (
    <>
      <div className="ex-q">
        <span className="ex-num">{n}.</span>
        <span className="strike" style={{ textDecoration: 'none' }}>
          {item.q}
        </span>
      </div>
      <input
        className={'input' + (checked ? (ok ? ' gap-input right' : ' gap-input wrong') : '')}
        style={{ width: '100%' }}
        placeholder="Viết lại câu đúng…"
        value={value || ''}
        disabled={checked}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
      />
    </>
  );
}

// Word-by-word comparison so the learner sees exactly which words were missed.
function Diff({ said, target }) {
  const got = new Set(normalize(said).split(' '));
  return (
    <div className="small" style={{ marginTop: 4 }}>
      {target.split(' ').map((w, i) => (
        <span key={i} style={{ color: got.has(normalize(w)) ? 'var(--ok)' : 'var(--bad)', fontWeight: 600 }}>
          {w}{' '}
        </span>
      ))}
    </div>
  );
}

function Dictation({ n, item, value, onChange, ok, checked }) {
  return (
    <>
      <div className="ex-q row">
        <span className="ex-num">{n}.</span>
        <audio controls preload="none" src={item.audio} style={{ height: 36, maxWidth: '100%' }} />
      </div>
      <input
        className={'input' + (checked ? (ok ? ' gap-input right' : ' gap-input wrong') : '')}
        style={{ width: '100%' }}
        placeholder="Gõ lại câu bạn nghe được…"
        value={value || ''}
        disabled={checked}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
      />
      {checked && !ok && <Diff said={value || ''} target={item.a[0]} />}
    </>
  );
}

function Match({ item, value = {}, onChange, checked }) {
  const rights = useMemo(() => shuffle(item.pairs.map((p) => p[1])), [item]);
  return (
    <div className="match-grid">
      {item.pairs.map(([l, r]) => {
        const v = value[l] || '';
        const cls = checked ? (v === r ? ' right' : ' wrong') : '';
        return (
          <div key={l} style={{ display: 'contents' }}>
            <div style={{ alignSelf: 'center', fontWeight: 600 }}>{l}</div>
            <select
              className={'select gap-input' + cls}
              value={v}
              disabled={checked}
              onChange={(e) => onChange({ ...value, [l]: e.target.value })}
            >
              <option value="">— chọn —</option>
              {rights.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>
        );
      })}
    </div>
  );
}

export function Translate({ n, item, source }) {
  const [answer, setAnswer] = useState('');
  const [res, setRes] = useState(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [showRef, setShowRef] = useState(false);

  async function grade() {
    setBusy(true);
    setErr('');
    try {
      const r = await gradeTranslation({ ...item, answer });
      setRes(r);
      (r.errors || []).forEach((e) =>
        addError({ wrong: e.wrong, right: e.right, type: e.type, explain: e.explain, source: `Dịch: ${item.vi}` }),
      );
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <div className="ex-q">
        <span className="ex-num">{n}.</span>
        {item.vi}
        {item.focus && <span className="badge" style={{ marginLeft: 8 }}>{item.focus}</span>}
      </div>
      <textarea
        className="textarea"
        style={{ minHeight: 60 }}
        placeholder="Viết câu tiếng Anh của bạn…"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        spellCheck={false}
      />
      <div className="row" style={{ marginTop: 6 }}>
        <button className="btn primary small" disabled={!answer.trim() || busy || !hasKey()} onClick={grade}>
          {busy ? 'AI đang chấm…' : '✨ Chấm bằng AI'}
        </button>
        <button className="btn small" onClick={() => setShowRef((s) => !s)}>
          {showRef ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
        </button>
        {!hasKey() && <span className="muted small">Thêm Gemini key trong Cài đặt để AI chấm.</span>}
      </div>
      {showRef && <div className="feedback">Đáp án mẫu: <strong>{item.ref}</strong></div>}
      {err && <div className="alert bad" style={{ marginTop: 8 }}>{err}</div>}
      {res && (
        <div className="fb-block" style={{ marginTop: 10 }}>
          <div className="row">
            <strong className={res.score >= 8 ? 'fix' : ''}>{res.score}/10 · {res.verdict}</strong>
          </div>
          {res.corrected && normalize(res.corrected) !== normalize(answer) && (
            <div>Sửa: <span className="fix">{res.corrected}</span></div>
          )}
          {(res.errors || []).map((e, i) => (
            <div key={i} className="small">
              <span className="strike">{e.wrong}</span> → <span className="fix">{e.right}</span>{' '}
              <span className="muted">({e.type}) {e.explain}</span>
            </div>
          ))}
          {res.better && <div style={{ marginTop: 4 }}>💎 Hay hơn: <em>{res.better}</em></div>}
          {res.tip && <div className="muted small">💡 {res.tip}</div>}
          {res.errors?.length > 0 && <div className="muted small">Các lỗi đã được lưu vào Sổ lỗi sai.</div>}
        </div>
      )}
    </>
  );
}
