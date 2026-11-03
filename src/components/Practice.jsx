// Reading and listening practice views.
import { useRef, useState } from 'react';
import ExerciseSection from './Exercise.jsx';

function Picker({ list, i, setI, prefix }) {
  return (
    <div className="row" style={{ marginBottom: 14 }}>
      {list.map((x, j) => (
        <span key={j} className={'chip' + (i === j ? ' on' : '')} onClick={() => setI(j)}>
          {prefix} {j + 1}
        </span>
      ))}
    </div>
  );
}

export function Reading({ unit }) {
  const [i, setI] = useState(0);
  const r = unit.reading[i];
  return (
    <>
      <Picker list={unit.reading} i={i} setI={setI} prefix="Bài đọc" />
      <div className="reading-layout" key={i}>
        <div className="card passage-box">
          <span className="level-pill">{r.level}</span>
          <h2 style={{ marginTop: 8 }}>{r.title}</h2>
          <div className="passage">{r.text}</div>
          <p className="muted small" style={{ marginTop: 12 }}>
            Mẹo: bôi đen từ lạ rồi chép sang ô Ghi chú để lưu vào sổ tay.
          </p>
        </div>
        <ExerciseSection
          section={{ title: 'Câu hỏi', instruction: 'True / False / Not Given: Not Given = bài không nói đến.', items: r.items }}
          unitId={unit.id}
          sectionKey={`reading-${i + 1}`}
          source={`Đọc: ${r.title}`}
        />
      </div>
    </>
  );
}

const SPEEDS = [0.5, 0.75, 0.9, 1, 1.25, 1.5];

export function Listening({ unit }) {
  const [i, setI] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [script, setScript] = useState(false);
  const audio = useRef(null);
  const l = unit.listening[i];
  const base = `./audio/${unit.id}/l${i + 1}`;

  const jump = (s) => {
    if (audio.current) audio.current.currentTime = Math.max(0, audio.current.currentTime + s);
  };

  return (
    <div className="stack" key={i}>
      <Picker list={unit.listening} i={i} setI={(j) => { setI(j); setScript(false); }} prefix="Bài nghe" />
      <div className="card player">
        <div>
          <span className="level-pill">{l.level}</span>
          <h2 style={{ marginTop: 8 }}>{l.title}</h2>
          <p className="muted">{l.desc}</p>
        </div>
        <audio
          ref={audio}
          controls
          preload="metadata"
          src={`${base}.mp3`}
          onLoadedMetadata={(e) => (e.currentTarget.playbackRate = speed)}
        />
        <div className="row small">
          <button className="btn small" onClick={() => jump(-5)}>⏪ 5s</button>
          <button className="btn small" onClick={() => jump(5)}>5s ⏩</button>
          <strong style={{ marginLeft: 8 }}>Tốc độ:</strong>
          {SPEEDS.map((s) => (
            <span
              key={s}
              className={'chip' + (speed === s ? ' on' : '')}
              onClick={() => {
                setSpeed(s);
                if (audio.current) audio.current.playbackRate = s;
              }}
            >
              {s}x
            </span>
          ))}
          <span className="spacer" />
          <button className="btn small" onClick={() => setScript((x) => !x)}>
            {script ? 'Ẩn transcript' : '📝 Xem transcript'}
          </button>
        </div>
        {script && (
          <div className="vocab-detail">
            {l.script.map(([s, text], j) => (
              <div className="script-line" key={j}>
                {Object.keys(l.voices).length > 1 && <b>{s}:</b>}
                {text}
              </div>
            ))}
          </div>
        )}
      </div>
      <ExerciseSection
        section={{ title: 'Câu hỏi', instruction: 'Nghe và trả lời. Nên nghe 2 lần trước khi kiểm tra; chưa mở transcript.', items: l.items }}
        unitId={unit.id}
        sectionKey={`listening-${i + 1}`}
        source={`Nghe: ${l.title}`}
      />
      {l.dictation?.length > 0 && (
        <ExerciseSection
          section={{
            title: 'Nghe – chép chính tả',
            instruction: 'Nghe từng câu và gõ lại chính xác. Từ sai sẽ được tô đỏ.',
            items: l.dictation.map((a, j) => ({ t: 'dict', audio: `${base}-d${j + 1}.mp3`, a: [a] })),
          }}
          unitId={unit.id}
          sectionKey={`dictation-${i + 1}`}
          source={`Chép chính tả: ${l.title}`}
        />
      )}
    </div>
  );
}
