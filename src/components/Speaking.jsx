// Speaking practice: answer by voice or in writing, then get IELTS-style feedback,
// a band 7.5+ model answer, upgraded expressions and drills targeting the mistakes.
import { useEffect, useRef, useState } from 'react';
import { gradeSpeaking, hasKey } from '../lib/ai';
import { startRecording, speak } from '../lib/speech';
import { getState, update, useStore } from '../lib/store';
import { addError } from '../lib/collect';
import { lookupAndSave } from '../lib/dict';
import ExerciseSection from './Exercise.jsx';

export default function Speaking({ unit }) {
  const [qi, setQi] = useState(0);
  const [mode, setMode] = useState('voice');
  const q = unit.speaking[qi];
  const key = `${unit.id}:${qi}`;
  const history = useStore((s) => s.speaking[key]) || [];
  const [view, setView] = useState(0); // which attempt is shown

  return (
    <div className="stack">
      <div className="card">
        <div className="row" style={{ marginBottom: 10 }}>
          {unit.speaking.map((x, j) => (
            <span key={j} className={'chip' + (qi === j ? ' on' : '')} onClick={() => { setQi(j); setView(0); }}>
              {x.part} · {j + 1}
            </span>
          ))}
        </div>
        <span className="level-pill">{q.part}</span>
        <h2 style={{ marginTop: 8 }}>
          {q.q} <button className="icon-btn" onClick={() => speak(q.q)}>🔊</button>
        </h2>
        {q.cue && (
          <div className="tip">
            <strong>You should say:</strong>
            {q.cue.map((c) => (
              <div key={c}>• {c}</div>
            ))}
            <div className="muted small">Thi thật: 1 phút chuẩn bị, nói 1–2 phút.</div>
          </div>
        )}
        <div className="row" style={{ margin: '10px 0' }}>
          <span className={'chip' + (mode === 'voice' ? ' on' : '')} onClick={() => setMode('voice')}>🎤 Trả lời bằng giọng nói</span>
          <span className={'chip' + (mode === 'text' ? ' on' : '')} onClick={() => setMode('text')}>⌨️ Trả lời bằng cách viết</span>
        </div>
        {!hasKey() && <div className="alert">Cần Gemini API key (miễn phí) để AI chấm. Vào <strong>Cài đặt</strong> để thêm.</div>}
        <Answer
          key={key + mode}
          mode={mode}
          isLong={Boolean(q.cue)}
          onResult={(r) => {
            const list = [{ ...r, at: Date.now(), mode }, ...(getState().speaking[key] || [])].slice(0, 5);
            update('speaking', key, list);
            setView(0);
            (r.corrections || []).forEach((c) =>
              addError({ wrong: c.wrong, right: c.right, type: c.type, explain: c.explain, source: `Nói: ${q.q}` }),
            );
          }}
          question={q}
          topic={unit.title}
        />
      </div>
      {history.length > 0 && (
        <>
          {history.length > 1 && (
            <div className="row small">
              <span className="muted">Lần trả lời:</span>
              {history.map((h, j) => (
                <span key={h.at} className={'chip' + (view === j ? ' on' : '')} onClick={() => setView(j)}>
                  {new Date(h.at).toLocaleString('vi-VN', { dateStyle: 'short', timeStyle: 'short' })} · {h.band}
                </span>
              ))}
            </div>
          )}
          <Feedback key={history[view]?.at} r={history[view] || history[0]} unitId={unit.id} />
        </>
      )}
    </div>
  );
}

function Answer({ mode, onResult, question, topic, isLong }) {
  const [text, setText] = useState('');
  const [rec, setRec] = useState(null);
  const [clip, setClip] = useState(null);
  const [secs, setSecs] = useState(0);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [status, setStatus] = useState('');
  const [wait, setWait] = useState(0);
  const timer = useRef();

  useEffect(() => () => clearInterval(timer.current), []);

  async function toggleRec() {
    setErr('');
    if (rec) {
      clearInterval(timer.current);
      const c = await rec.stop();
      setRec(null);
      setClip(c);
      return;
    }
    try {
      setClip(null);
      setRec(await startRecording());
      setSecs(0);
      timer.current = setInterval(() => setSecs((s) => s + 1), 1000);
    } catch {
      setErr('Không truy cập được micro. Hãy cho phép trình duyệt dùng micro.');
    }
  }

  async function submit() {
    setBusy(true);
    setErr('');
    setStatus('');
    setWait(0);
    const started = Date.now();
    const tick = setInterval(() => setWait(Math.round((Date.now() - started) / 1000)), 1000);
    try {
      const r = await gradeSpeaking({
        topic,
        question: question.q + (question.cue ? ' You should say: ' + question.cue.join('; ') : ''),
        answer: text,
        audio: mode === 'voice' ? clip.wav : undefined,
        mode,
        onStatus: setStatus,
      });
      clearInterval(tick);
      onResult(r);
      setText('');
      setClip(null);
    } catch (e) {
      setErr(e.message);
    } finally {
      clearInterval(tick);
      setBusy(false);
    }
  }

  const target = isLong ? '1–2 phút' : '20–40 giây';
  return (
    <div className="stack">
      {mode === 'voice' ? (
        <div className="row" style={{ gap: 18 }}>
          <button className={'rec-btn' + (rec ? ' on' : '')} onClick={toggleRec} title={rec ? 'Dừng' : 'Ghi âm'}>
            {rec ? '■' : '🎤'}
          </button>
          <div>
            <div style={{ fontWeight: 600 }}>
              {rec ? `Đang ghi âm… ${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}` : clip ? 'Đã ghi xong – nghe lại hoặc gửi chấm' : 'Bấm để bắt đầu nói'}
            </div>
            <div className="muted small">Gợi ý độ dài: {target}. Nói tự nhiên, đừng đọc thuộc lòng.</div>
            {clip && <audio controls src={clip.url} style={{ marginTop: 6, maxWidth: '100%' }} />}
          </div>
        </div>
      ) : (
        <textarea
          className="textarea"
          style={{ minHeight: 140 }}
          placeholder="Viết câu trả lời như khi bạn nói…"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <div className="row">
        <button
          className="btn primary"
          disabled={busy || !hasKey() || (mode === 'voice' ? !clip : text.trim().split(/\s+/).length < 5)}
          onClick={submit}
        >
          {busy ? `AI đang phân tích… ${wait}s` : err ? '🔄 Gửi lại' : '✨ Gửi để AI chấm & sửa'}
        </button>
        {busy && (
          <span className="muted small">
            {status || (mode === 'voice' ? 'Bài nói thường mất 15–40 giây để chấm.' : 'Thường mất 10–20 giây.')}
          </span>
        )}
      </div>
      {err && <div className="alert bad">{err}</div>}
    </div>
  );
}

function Feedback({ r, unitId }) {
  const [saved, setSaved] = useState({});
  // Older answers (before structured output) sometimes used other key names or left "better" empty.
  const upgrades = (r.upgrades || [])
    .map((u) => ({ ...u, better: u.better || u.upgrade || u.improved || u.advanced || u.alternative }))
    .filter((u) => u.better?.trim());
  const drills = (r.drills || []).map((d) =>
    d.t === 'rewrite' ? { t: 'fix', q: d.q, a: d.answer, ex: d.explain } : { t: 'gap', q: d.q.includes('___') ? d.q : d.q + ' ___', a: d.answer, ex: d.explain },
  );
  return (
    <div className="stack">
      <div className="card">
        <div className="row" style={{ alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <h3>Nhận xét</h3>
            <p>{r.summary}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="muted small">Band ước tính</div>
            <div className="band">{r.band}</div>
          </div>
        </div>
        {r.transcript && (
          <div className="vocab-detail">
            <div className="muted small">{r.mode === 'voice' ? 'AI nghe được bạn nói:' : 'Bài của bạn:'}</div>
            <em>{r.transcript}</em>
          </div>
        )}
        {r.criteria && (
          <dl className="vocab-detail" style={{ background: 'transparent', padding: '8px 0 0' }}>
            {[
              ['Fluency & Coherence', r.criteria.fluency],
              ['Lexical Resource', r.criteria.lexical],
              ['Grammar', r.criteria.grammar],
              ['Pronunciation', r.criteria.pronunciation],
            ]
              .filter(([, v]) => v && v !== 'không áp dụng')
              .map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
          </dl>
        )}
      </div>

      {r.corrections?.length > 0 && (
        <div className="card">
          <h3>🩹 Lỗi sai cần sửa</h3>
          {r.corrections.map((c, i) => (
            <div className="corr" key={i}>
              <span className="strike">{c.wrong}</span> → <span className="fix">{c.right}</span>{' '}
              <span className="badge">{c.type}</span>
              <div className="muted small">{c.explain}</div>
            </div>
          ))}
          <p className="muted small" style={{ marginTop: 8 }}>Các lỗi này đã tự động vào Sổ lỗi sai và lịch ôn tập.</p>
        </div>
      )}

      <div className="card">
        <h3>💎 Câu trả lời mẫu band 7.5+</h3>
        <p style={{ lineHeight: 1.8 }}>
          {r.model_answer} <button className="icon-btn" onClick={() => speak(r.model_answer, 0.95)}>🔊</button>
        </p>
        {upgrades.length > 0 && (
          <>
            <h4>Nâng cấp cách diễn đạt</h4>
            {upgrades.map((u, i) => (
              <div className="corr" key={i}>
                <span className="muted">{u.basic}</span> → <strong>{u.better}</strong>
                <div className="muted small">{u.note}</div>
              </div>
            ))}
          </>
        )}
        {r.key_phrases?.length > 0 && (
          <>
            <h4 style={{ marginTop: 12 }}>Cụm từ đáng học</h4>
            <div className="row">
              {r.key_phrases.map((p) => (
                <span
                  key={p}
                  className={'chip' + (saved[p] ? ' on' : '')}
                  title="Lưu vào sổ tay"
                  onClick={() => {
                    if (saved[p]) return;
                    setSaved((s) => ({ ...s, [p]: true }));
                    const sentence = r.model_answer.split(/(?<=[.!?])\s/).find((s) => s.includes(p));
                    lookupAndSave(p, sentence, unitId);
                  }}
                >
                  {saved[p] ? '✓' : '+'} {p}
                </span>
              ))}
            </div>
            <p className="muted small">Bấm vào cụm từ để lưu vào Sổ tay từ vựng.</p>
          </>
        )}
      </div>

      {drills.length > 0 && (
        <ExerciseSection
          section={{ title: '🎯 Bài tập luyện phần bạn hay sai', instruction: 'AI tạo riêng dựa trên lỗi của bạn.', items: drills }}
          source="Luyện nói – drill"
        />
      )}
    </div>
  );
}
