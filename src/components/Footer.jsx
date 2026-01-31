import { Link } from 'react-router-dom'

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/mission', label: 'Our Mission' },
  { path: '/programs', label: 'Programs & Outreaches' },
  { path: '/partnerships', label: 'Partnerships' },
  { path: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/">
              <img src="/asset/logo.png" alt="Jagaban Rangers Solidarity Movement" className="footer-logo" />
            </Link>
            <p className="footer-tagline">Empowering communities through compassion and leadership.</p>
          </div>
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              {links.map(({ path, label }) => (
                <li key={path}><Link to={path}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <Link to="/contact" className="btn btn-primary footer-btn">Contact Us</Link>
          </div>
        </div>
        <div className="footer-bar">
          <p className="footer-copy">© 2026 Jagaban Rangers Solidarity Movement. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/contact">Privacy Policy</Link>
            <span>|</span>
            <Link to="/contact">Terms of Use</Link>
          </div>
        </div>
      </div>
      <style>{`
        .footer {
          background: #0f172a;
          color: #e2e8f0;
          margin-top: 0;
        }
        .footer a { color: #7dd3fc; }
        .footer a:hover { color: #fff; text-decoration: underline; }
        .footer .container { padding-top: 2rem; padding-bottom: 0; }
        @media (min-width: 480px) {
          .footer .container { padding-top: 3rem; }
        }
        .footer-main {
          display: grid;
          gap: 1.5rem;
          padding-bottom: 1.5rem;
        }
        @media (min-width: 480px) {
          .footer-main { gap: 2rem; padding-bottom: 2rem; }
        }
        @media (min-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr 2fr 1fr;
            align-items: start;
            gap: 3rem;
          }
        }
        .footer-logo {
          height: 44px;
          width: auto;
          display: block;
          margin-bottom: 0.75rem;
        }
        @media (min-width: 480px) {
          .footer-logo { height: 52px; }
        }
        .footer-tagline {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.9;
        }
        .footer-heading {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #fff;
          margin: 0 0 1rem;
        }
        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li { margin-bottom: 0.5rem; }
        .footer-contact { margin-top: 0; }
        .footer-btn { text-decoration: none; }
        .footer-btn:hover { text-decoration: none; }
        .footer-bar {
          padding: 1rem 0;
          padding-bottom: max(1rem, env(safe-area-inset-bottom));
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          opacity: 0.8;
          text-align: center;
        }
        @media (min-width: 480px) {
          .footer-bar {
            justify-content: space-between;
            font-size: 0.8rem;
          }
        }
        .footer-copy { margin: 0; }
        .footer-legal {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-legal span { opacity: 0.6; }
      `}</style>
    </footer>
  )
}
