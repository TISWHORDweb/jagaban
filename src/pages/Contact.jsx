import CTAButton from '../components/CTAButton'

const getInvolvedWays = [
  { title: 'Sponsor an Outreach', desc: 'Fund surgeries, supplies, or logistics.' },
  { title: 'Volunteer as a Ranger', desc: 'Join scouting, organising, or on-ground support.' },
  { title: 'Partner With Us', desc: 'Support medical equipment and patient care.' },
  { title: 'Spread the Word', desc: 'Share our mission on social media.' },
]

export default function Contact() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in Touch</p>
        </div>
      </section>

      <section className="section get-involved-section">
        <div className="container">
          <h2 className="section-title">Get Involved</h2>
          <p>
            Believers in Jagaban's legacies—your support is crucial. Sponsor outreaches, volunteer as a Ranger, donate, or help spread the word.
          </p>
          <div className="get-involved-grid">
            {getInvolvedWays.map((w) => (
              <div key={w.title} className="get-involved-card">
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
          <p className="get-involved-cta">
            <CTAButton>Contact Us for Partnership</CTAButton>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p>
            We'd love to hear from you! Whether you're seeking assistance, offering sponsorship, or want to learn more about our movement. Reach us via the details below or use the WhatsApp button on this site for a quick chat.
          </p>
          <ul className="contact-details">
            <li><strong>Email:</strong> <a href="mailto:Jagabanranger1@gmail.com">Jagabanranger1@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+2348035613162">+234 (0) 803-5613162</a></li>
            <li><strong>Address:</strong> No. 59 Asun Bur Street, Kado Estate Estate, Abuja.</li>
            <li className="contact-social-row">
              <strong>Social:</strong>
              <span className="social-icons">
                <a href="https://facebook.com/jagabanranger1" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook – jagabanranger1">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://x.com/jagabanranger1" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter) – jagabanranger1">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://instagram.com/jagabanranger1" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram – jagabanranger1">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </span>
            </li>
          </ul>
          <CTAButton>Contact Us</CTAButton>
        </div>
      </section>

      <style>{`
        .page-hero {
          background: linear-gradient(135deg, var(--blue) 0%, var(--light-blue) 100%);
          color: var(--white);
          padding: 2rem 0;
        }
        @media (min-width: 480px) {
          .page-hero { padding: 3rem 0; }
        }
        .page-title { font-size: clamp(1.5rem, 4vw, 2.5rem); margin: 0 0 0.25rem; }
        .page-subtitle { margin: 0; opacity: 0.95; font-size: clamp(0.95rem, 2vw, 1.1rem); }
        .contact-details {
          list-style: none;
          padding: 0;
          margin: 1rem 0 0;
        }
        .contact-details li { margin-bottom: 0.75rem; }
        .contact-details a { color: var(--light-blue); }
        .contact-details a:hover { text-decoration: underline; }
        .contact-social-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .contact-social-row strong { margin-right: 0.5rem; }
        .social-icons {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          color: var(--blue);
          border-radius: 8px;
          transition: color 0.2s, background 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .social-icon:hover {
          color: var(--light-blue);
          background: var(--gray-100);
          transform: scale(1.08);
          text-decoration: none;
        }
        .social-icon svg {
          width: 22px;
          height: 22px;
        }
        .get-involved-section { background: var(--gray-100); }
        .get-involved-grid {
          display: grid;
          gap: 1rem;
          margin: 1rem 0;
        }
        @media (min-width: 600px) {
          .get-involved-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .get-involved-card {
          background: var(--white);
          padding: 1rem;
          border-radius: 12px;
          border-left: 4px solid var(--green);
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          min-width: 0;
        }
        @media (min-width: 480px) {
          .get-involved-card { padding: 1.25rem; }
        }
        .get-involved-card h3 { margin: 0 0 0.35rem; font-size: 1.1rem; color: var(--blue); }
        .get-involved-card p { margin: 0; font-size: 0.95rem; }
        .get-involved-cta { margin-top: 1rem; }
      `}</style>
    </>
  )
}
