import { NavLink, Route, Routes } from 'react-router-dom';
import { useStore } from './lib/store';
import { dueCards } from './lib/srs';
import Home from './pages/Home.jsx';
import UnitPage from './pages/UnitPage.jsx';
import GrammarList from './pages/GrammarList.jsx';
import Notebook from './pages/Notebook.jsx';
import Review from './pages/Review.jsx';
import Errors from './pages/Errors.jsx';
import Settings from './pages/Settings.jsx';

const NAV = [
  { to: '/', icon: '🏠', label: 'Trang chủ', end: true },
  { to: '/grammar', icon: '📐', label: 'Ngữ pháp' },
  { to: '/review', icon: '🔁', label: 'Ôn tập', due: true },
  { to: '/notebook', icon: '📒', label: 'Sổ tay' },
  { to: '/errors', icon: '🩹', label: 'Lỗi sai' },
  { to: '/settings', icon: '⚙️', label: 'Cài đặt' },
];

function Nav({ due }) {
  return NAV.map((n) => (
    <NavLink key={n.to} to={n.to} end={n.end} className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
      <span className="icon">{n.icon}</span>
      <span>{n.label}</span>
      {n.due && due > 0 && <span className="count">{due}</span>}
    </NavLink>
  ));
}

export default function App() {
  const cards = useStore((s) => s.cards);
  const due = dueCards(cards).length;
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-dot">D</span> Destination English
        </div>
        <Nav due={due} />
      </aside>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unit/:id" element={<UnitPage />} />
          <Route path="/grammar" element={<GrammarList />} />
          <Route path="/review" element={<Review />} />
          <Route path="/notebook" element={<Notebook />} />
          <Route path="/errors" element={<Errors />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <nav className="bottom-nav">
        <Nav due={due} />
      </nav>
    </div>
  );
}
