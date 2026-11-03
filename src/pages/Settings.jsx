import { useEffect, useState } from 'react';
import { exportData, importData, setSetting, useStore } from '../lib/store';
import { askGemini } from '../lib/ai';
import { speak } from '../lib/speech';
import { calendarUrl, connect, disconnect, isConnected, syncNow, useSyncStatus } from '../lib/sync';

const TOKEN_URL = 'https://github.com/settings/tokens/new?scopes=gist&description=Destination%20English%20sync';

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

      <SyncCard />

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

function SyncCard() {
  const st = useSyncStatus();
  const [token, setToken] = useState('');
  const [copied, setCopied] = useState(false);
  const connected = isConnected();
  const ics = calendarUrl();

  async function onConnect() {
    if (await connect(token)) setToken('');
  }

  return (
    <div className="card stack">
      <h3>🔄 Đồng bộ máy tính ↔ điện thoại</h3>
      {connected ? (
        <>
          <div className="row small">
            <span className={'badge ' + (st.state === 'error' ? '' : 'v')}>
              {st.state === 'busy' ? '⏳ Đang đồng bộ…' : st.state === 'error' ? '⚠ Lỗi' : '✓ Đã bật'}
            </span>
            {st.lastSync > 0 && <span className="muted">Lần cuối: {new Date(st.lastSync).toLocaleString('vi-VN')}</span>}
            <span className="spacer" />
            <button className="btn small" disabled={st.state === 'busy'} onClick={syncNow}>Đồng bộ ngay</button>
            <button className="btn small" onClick={() => confirm('Ngắt đồng bộ trên thiết bị này? Dữ liệu vẫn còn trên máy và trên GitHub.') && disconnect()}>
              Ngắt kết nối
            </button>
          </div>
          {st.state === 'error' && <div className="alert bad">{st.message}</div>}
          <p className="muted small">
            Mọi thay đổi (thẻ ôn, sổ tay, lỗi sai, tiến độ, lịch sử luyện nói) tự gửi lên sau vài giây và tự tải về khi mở app. Gemini key không
            được đồng bộ – mỗi thiết bị nhập một lần.
          </p>
          {ics && (
            <div className="stack" style={{ gap: 6 }}>
              <strong className="small">📅 Lịch nhắc ôn tự cập nhật</strong>
              <p className="muted small" style={{ margin: 0 }}>
                Đăng ký đường link này một lần trong ứng dụng lịch, lịch ôn sẽ tự cập nhật theo kết quả học (Google Calendar: <em>Lịch khác → + →
                Từ URL</em>; iPhone: <em>Cài đặt → Lịch → Tài khoản → Thêm tài khoản → Khác → Thêm lịch đã đăng ký</em>).
              </p>
              <div className="row">
                <input className="input" readOnly value={ics} style={{ flex: 1, minWidth: 200 }} onFocus={(e) => e.target.select()} />
                <button
                  className="btn small"
                  onClick={() => navigator.clipboard.writeText(ics).then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  })}
                >
                  {copied ? '✓ Đã chép' : 'Sao chép'}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <p className="small" style={{ margin: 0 }}>
            Dữ liệu được lưu vào một <strong>Gist bí mật</strong> trên tài khoản GitHub của bạn (miễn phí). Làm một lần trên <strong>mỗi</strong>{' '}
            thiết bị:
          </p>
          <ol className="small" style={{ margin: 0, paddingLeft: 20 }}>
            <li>
              Mở <a href={TOKEN_URL} target="_blank" rel="noreferrer">trang tạo mã GitHub</a> (đã tick sẵn quyền <code>gist</code>, đăng nhập GitHub nếu
              cần).
            </li>
            <li>Ở mục <em>Expiration</em> chọn <strong>No expiration</strong> (hoặc 1 năm), kéo xuống bấm <strong>Generate token</strong>.</li>
            <li>Sao chép mã (bắt đầu bằng <code>ghp_</code>), dán vào ô dưới và bấm Kết nối.</li>
          </ol>
          <div className="row">
            <input className="input" type="password" placeholder="Dán mã GitHub (ghp_…)" value={token} onChange={(e) => setToken(e.target.value)} style={{ flex: 1, minWidth: 200 }} />
            <button className="btn primary" disabled={!token.trim() || st.state === 'busy'} onClick={onConnect}>
              {st.state === 'busy' ? 'Đang kết nối…' : 'Kết nối'}
            </button>
          </div>
          {st.state === 'error' && <div className="alert bad">{st.message}</div>}
          <p className="muted small">
            Thiết bị đầu tiên sẽ tạo Gist; các thiết bị sau tự tìm thấy và gộp dữ liệu (không mất gì ở cả hai bên). Mã chỉ lưu trong trình duyệt này
            và chỉ có quyền đọc/ghi Gist.
          </p>
        </>
      )}
    </div>
  );
}
