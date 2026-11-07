// Sign-in / account panel and the small account chip shown in the sidebar and on the home page.
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cloudEnabled, resetPassword, signInEmail, signInGoogle, signOutAndClear, signUpEmail, syncNow, useAccount } from '../lib/cloud';

export function AccountChip() {
  const acc = useAccount();
  if (!cloudEnabled || !acc.ready) return null;
  return (
    <Link to="/account" className="account-chip" title={acc.user ? acc.user.email : 'Đăng nhập để lưu tiến độ'}>
      {acc.user ? (
        <>
          <Avatar user={acc.user} />
          <span className="account-name">{acc.user.name}</span>
          <span className={'sync-dot' + (acc.error ? ' bad' : acc.syncing ? ' busy' : '')} />
        </>
      ) : (
        <span>👤 Đăng nhập</span>
      )}
    </Link>
  );
}

function Avatar({ user }) {
  if (user.photo) return <img className="avatar" src={user.photo} alt="" referrerPolicy="no-referrer" />;
  return <span className="avatar">{(user.name || '?').slice(0, 1).toUpperCase()}</span>;
}

export function AccountPanel() {
  const acc = useAccount();
  if (!cloudEnabled) {
    return (
      <div className="card stack">
        <h3>👤 Tài khoản</h3>
        <p className="muted small">Chức năng tài khoản chưa được bật trên trang này. Tiến độ đang được lưu trong trình duyệt hiện tại.</p>
      </div>
    );
  }
  if (!acc.ready) return <div className="card muted">Đang kiểm tra đăng nhập…</div>;
  return acc.user ? <SignedIn acc={acc} /> : <SignInForm />;
}

function SignedIn({ acc }) {
  const [busy, setBusy] = useState(false);
  return (
    <div className="card stack">
      <h3>👤 Tài khoản</h3>
      <div className="row">
        <Avatar user={acc.user} />
        <div style={{ flex: 1 }}>
          <strong>{acc.user.name}</strong>
          <div className="muted small">{acc.user.email}</div>
        </div>
      </div>
      <div className="row small">
        <span className={'badge ' + (acc.error ? '' : 'v')}>
          {acc.error ? '⚠ Chưa đồng bộ được' : acc.syncing ? '⏳ Đang đồng bộ…' : '✓ Đã đồng bộ'}
        </span>
        {acc.lastSync > 0 && <span className="muted">Lần cuối: {new Date(acc.lastSync).toLocaleTimeString('vi-VN')}</span>}
        <span className="spacer" />
        <button className="btn small" onClick={syncNow}>Đồng bộ ngay</button>
      </div>
      {acc.error && <div className="alert bad">{acc.error}</div>}
      <p className="muted small" style={{ margin: 0 }}>
        Tiến độ, thẻ ôn, sổ tay, lỗi sai, bài đã làm và lịch sử luyện nói được lưu vào tài khoản sau mỗi thao tác. Đăng nhập cùng tài khoản trên
        máy tính và điện thoại là thấy đúng chỗ đang học.
      </p>
      <div>
        <button
          className="btn danger small"
          disabled={busy}
          onClick={async () => {
            if (!confirm('Đăng xuất? Dữ liệu vẫn còn trong tài khoản, chỉ bị xóa khỏi trình duyệt này.')) return;
            setBusy(true);
            await signOutAndClear();
            setBusy(false);
          }}
        >
          {busy ? 'Đang đăng xuất…' : 'Đăng xuất'}
        </button>
      </div>
    </div>
  );
}

function SignInForm() {
  const [mode, setMode] = useState('login'); // login | signup | reset
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState({ text: '', ok: false });

  async function run(fn, okText = '') {
    setBusy(true);
    setMsg({ text: '', ok: false });
    try {
      await fn();
      if (okText) setMsg({ text: okText, ok: true });
    } catch (e) {
      setMsg({ text: e.message, ok: false });
    } finally {
      setBusy(false);
    }
  }

  function submit(e) {
    e.preventDefault();
    if (mode === 'login') run(() => signInEmail(email, password));
    if (mode === 'signup') run(() => signUpEmail(name, email, password));
    if (mode === 'reset') run(() => resetPassword(email), 'Đã gửi email đặt lại mật khẩu. Hãy kiểm tra hộp thư (cả mục Spam).');
  }

  return (
    <div className="card stack">
      <h3>👤 Đăng nhập để lưu tiến độ học</h3>
      <p className="muted small" style={{ margin: 0 }}>
        Có tài khoản, mọi thứ bạn học được lưu lại và tự đồng bộ giữa máy tính và điện thoại. Những gì bạn đã học trên trình duyệt này sẽ được gộp
        vào tài khoản.
      </p>
      <button className="btn primary" disabled={busy} onClick={() => run(signInGoogle)} style={{ justifyContent: 'center' }}>
        <span style={{ fontWeight: 700 }}>G</span> Tiếp tục với Google
      </button>
      <div className="muted small" style={{ textAlign: 'center' }}>hoặc dùng email</div>
      <div className="tabs" style={{ marginTop: 0 }}>
        <button className={'tab' + (mode === 'login' ? ' on' : '')} onClick={() => setMode('login')}>Đăng nhập</button>
        <button className={'tab' + (mode === 'signup' ? ' on' : '')} onClick={() => setMode('signup')}>Tạo tài khoản</button>
      </div>
      <form className="stack" onSubmit={submit}>
        {mode === 'signup' && (
          <input className="input" placeholder="Tên hiển thị" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        )}
        <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
        {mode !== 'reset' && (
          <input
            className="input"
            type="password"
            placeholder={mode === 'signup' ? 'Mật khẩu (ít nhất 6 ký tự)' : 'Mật khẩu'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
            required
            minLength={6}
          />
        )}
        <div className="row">
          <button className="btn primary" disabled={busy} type="submit">
            {busy ? 'Đang xử lý…' : mode === 'login' ? 'Đăng nhập' : mode === 'signup' ? 'Tạo tài khoản' : 'Gửi email đặt lại mật khẩu'}
          </button>
          {mode === 'login' && (
            <button type="button" className="btn ghost small" onClick={() => setMode('reset')}>Quên mật khẩu?</button>
          )}
          {mode === 'reset' && (
            <button type="button" className="btn ghost small" onClick={() => setMode('login')}>← Quay lại</button>
          )}
        </div>
      </form>
      {msg.text && <div className={'alert ' + (msg.ok ? '' : 'bad')}>{msg.text}</div>}
    </div>
  );
}

export default function AccountPage() {
  return (
    <div className="stack" style={{ maxWidth: 560 }}>
      <h1>Tài khoản</h1>
      <AccountPanel />
    </div>
  );
}
