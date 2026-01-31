import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/programs', label: 'Programs & Outreaches' },
  { path: '/partnerships', label: 'Partnerships' },
  { path: '/contact', label: 'Contact Us' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="nav-header">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" aria-label="Jagaban Rangers Home">
          <img src="/asset/logo.png" alt="Jagaban Rangers Solidarity Movement" />
        </Link>
        <div className={`nav-right ${open ? 'open' : ''}`}>
          <nav className="nav-links">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={location.pathname === path ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {label.toUpperCase()}
            </Link>
            ))}
          </nav>
          <Link to="/contact" className="nav-cta btn btn-primary" onClick={() => setOpen(false)}>
            DONATE
          </Link>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <style>{`
        .nav-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--white);
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0.75rem;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        @media (min-width: 360px) {
          .nav-inner { padding: 0.5rem 1rem; gap: 0.75rem; }
        }
        @media (min-width: 768px) {
          .nav-inner { padding: 0.625rem 1rem; }
        }
        .nav-logo {
          flex-shrink: 0;
        }
        .nav-logo img {
          height: 50px;
          width: auto;
          display: block;
        }
        @media (min-width: 480px) {
          .nav-logo img { height: 55px; }
        }
        .nav-right {
          display: none;
          align-items: center;
          gap: 0.5rem;
          min-width: 0;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
          min-width: 0;
        }
        .nav-links a {
          color: var(--dark);
          padding: 0.5rem 0.6rem;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          text-decoration: none;
        }
        .nav-links a:hover,
        .nav-links a.active {
          color: var(--blue);
          background: var(--gray-100);
          text-decoration: none;
        }
        .nav-cta {
          margin-left: 1rem;
          text-decoration: none;
          white-space: nowrap;
        }
        .nav-cta:hover { text-decoration: none; }
        .nav-toggle {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 10px;
          min-width: 44px;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
          border-radius: 6px;
        }
        .nav-toggle:hover { background: var(--gray-100); }
        .nav-toggle span {
          width: 22px;
          height: 2px;
          background: var(--blue);
          transition: transform 0.2s, opacity 0.2s;
        }
        .nav-toggle[aria-expanded="true"] span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .nav-toggle[aria-expanded="true"] span:nth-child(2) {
          opacity: 0;
        }
        .nav-toggle[aria-expanded="true"] span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        .nav-right.open {
          display: flex;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: var(--white);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem 1rem;
          padding-bottom: max(2rem, env(safe-area-inset-bottom));
          gap: 0.5rem;
          overflow-y: auto;
          z-index: 99;
          -webkit-overflow-scrolling: touch;
        }
        .nav-right.open a {
          font-size: 1.05rem;
          padding: 0.75rem 1rem;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 380px) {
          .nav-right.open a { font-size: 1.1rem; }
        }
        .nav-right.open .nav-links {
          flex-direction: column;
        }
        .nav-right.open .nav-cta { margin-top: 0.5rem; }
        @media (min-width: 992px) {
          .nav-toggle { display: none; }
          .nav-right {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            flex: 1;
            min-width: 0;
          }
          .nav-inner {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          .nav-logo { flex-shrink: 0; }
          .nav-links {
            flex-direction: row;
            padding: 0;
            box-shadow: none;
            justify-content: center;
            gap: 0.75rem;
            grid-column: 2;
          }
          .nav-cta {
            grid-column: 3;
            justify-self: end;
            margin-left: 0;
          }
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .nav-links a { font-size: 0.9rem; padding: 0.4rem 0.5rem; }
        }
      `}</style>
    </header>
  )
}
