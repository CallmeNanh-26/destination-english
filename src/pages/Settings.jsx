import { useEffect, useState } from 'react';
import { exportData, importData, setState, useStore } from '../lib/store';
import { askGemini } from '../lib/ai';
import { speak } from '../lib/speech';

function setSetting(k, v) {
  setState((s) => ({ ...s, settings: { ...s.settings, [k]: v } }));
}

export default function Settings() {
  const settings = useStore((s) => s.settings);
  const [test, setTest] = useState('');
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const load = () => setVoices(window.speechSynthesis?.getVoices().filter((v) => v.lang.startsWith('en')) || []);
    load();
    window.speechSynthesis?.addEventListener('voiceschanged', load);
    return () => window.speechSynthesis?.removeEventListener('voiceschanged', load);
  }, []);

  async function testKey() {
    setTest('Đang kiểm tra…');
    try {
      const r = await askGemini('Reply with JSON {"ok": true, "msg": "a short friendly greeting in Vietnamese"}');
      setTest('✓ Key hoạt động: ' + (r.msg || 'OK'));
    } catch (e) {
      setTest('✗ ' + e.message);
    }
  }

  function download() {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([exportData()], { type: 'application/json' }));
    a.download = `destination-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  }

  function upload(e) {
    const file = e.target.files[0];
    if (!file) return;
    file.text().then((t) => {
      try {
        importData(t);
        alert('Đã khôi phục dữ liệu.');
      } catch {
        alert('File không hợp lệ.');
      }
    });
  }

  return (
    <div className="stack" style={{ maxWidth: 720 }}>
      <h1>⚙️ Cài đặt</h1>

      <div className="card stack">
        <h3>🤖 AI chấm bài (Google Gemini – miễn phí)</h3>
        <ol className="small" style={{ margin: 0, paddingLeft: 20 }}>
          <li>Mở <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer">aistudio.google.com/apikey</a> và đăng nhập Google.</li>
          <li>Bấm <strong>Create API key</strong>, copy key và dán vào ô dưới.</li>
        </ol>
        <input
          className="input"
          type="password"
          placeholder="Dán Gemini API key…"
          value={settings.geminiKey}
          onChange={(e) => setSetting('geminiKey', e.target.value.trim())}
        />
        <label className="small">
          Model
          <input className="input" value={settings.model} onChange={(e) => setSetting('model', e.target.value.trim())} />
        </label>
        <div className="row">
          <button className="btn" disabled={!settings.geminiKey} onClick={testKey}>Kiểm tra key</button>
          <span className="small">{test}</span>
        </div>
        <p className="muted small">
          Key chỉ lưu trong trình duyệt của bạn, không bị đưa vào file sao lưu. Gói miễn phí giới hạn số lượt mỗi phút/ngày và Google có
          thể dùng dữ liệu gói free để cải thiện mô hình – đừng gửi thông tin nhạy cảm.
        </p>
      </div>

      <div className="card stack">
        <h3>📅 Nhắc ôn tập</h3>
        <label className="small">
          Giờ ôn mỗi ngày
          <input className="input" type="time" style={{ maxWidth: 160 }} value={settings.reviewTime} onChange={(e) => setSetting('reviewTime', e.target.value)} />
        </label>
        <p className="muted small">Dùng ở trang Ôn tập để tạo lịch nhắc trên Google Calendar.</p>
      </div>

      <div className="card stack">
        <h3>🔊 Giọng đọc từ vựng</h3>
        <div className="row">
          <select className="select" style={{ flex: 1 }} value={settings.voice} onChange={(e) => setSetting('voice', e.target.value)}>
            <option value="">Tự chọn (ưu tiên Anh-Anh)</option>
            {voices.map((v) => (
              <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>
            ))}
          </select>
          <button className="btn" onClick={() => speak('competition, opponent, rhythm')}>Nghe thử</button>
        </div>
      </div>

      <div className="card stack">
        <h3>💾 Sao lưu dữ liệu</h3>
        <p className="muted small">Dữ liệu hiện lưu trong trình duyệt này. Đồng bộ máy tính ↔ điện thoại sẽ được thêm ở giai đoạn sau.</p>
        <div className="row">
          <button className="btn" onClick={download}>⬇ Xuất file sao lưu</button>
          <label className="btn">
            ⬆ Khôi phục từ file
            <input type="file" accept="application/json" hidden onChange={upload} />
          </label>
        </div>
      </div>
    </div>
  );
}
