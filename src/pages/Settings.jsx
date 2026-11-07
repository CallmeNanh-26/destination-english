import { useEffect, useState } from 'react';
import { exportData, importData, setSetting, useStore } from '../lib/store';
import { askGemini } from '../lib/ai';
import { speak } from '../lib/speech';
import { AccountPanel } from '../components/Account.jsx';
import { cloudEnabled } from '../lib/cloud';

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

      <AccountPanel />

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
          {cloudEnabled
            ? 'Khi đã đăng nhập, key được lưu trong tài khoản của bạn (chỉ bạn đọc được) nên các thiết bị khác tự có key; key không nằm trong file sao lưu. '
            : 'Key chỉ lưu trong trình duyệt của bạn, không bị đưa vào file sao lưu. '}
          Gói miễn phí giới hạn số lượt mỗi phút/ngày và Google có
          thể dùng dữ liệu gói free để cải thiện mô hình – đừng gửi thông tin nhạy cảm.
        </p>
      </div>


      <div className="card stack">
        <h3>📅 Giờ nhắc ôn tập</h3>
        <label className="row small" style={{ cursor: 'pointer' }}>
          <input type="radio" checked={settings.reviewMode !== 'fixed'} onChange={() => setSetting('reviewMode', 'auto')} />
          <span><strong>Tự động theo thói quen</strong> – app ghi lại giờ bạn thật sự học và nhắc ôn đúng khung giờ đó (ngày thường và cuối tuần tính riêng).</span>
        </label>
        <label className="row small" style={{ cursor: 'pointer' }}>
          <input type="radio" checked={settings.reviewMode === 'fixed'} onChange={() => setSetting('reviewMode', 'fixed')} />
          <span><strong>Giờ cố định</strong></span>
        </label>
        <label className="small">
          {settings.reviewMode === 'fixed' ? 'Giờ ôn mỗi ngày' : 'Giờ dự phòng (khi chưa đủ dữ liệu về thói quen)'}
          <input className="input" type="time" style={{ maxWidth: 160 }} value={settings.reviewTime} onChange={(e) => setSetting('reviewTime', e.target.value)} />
        </label>
        <p className="muted small">Ngày ôn do thuật toán đường cong lãng quên (FSRS) quyết định cho từng thẻ; giờ ôn lấy theo lựa chọn ở trên.</p>
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
        <p className="muted small">Không bắt buộc nếu đã bật đồng bộ ở trên – dùng khi muốn giữ một bản sao riêng.</p>
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

