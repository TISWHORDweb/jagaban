import CTAButton from '../components/CTAButton'

const getInvolvedWays = [
  { title: 'Sponsor an Outreach', desc: 'Fund surgeries, supplies, or logistics.' },
  { title: 'Volunteer as a Ranger', desc: 'Join scouting, organising, or on-ground support.' },
  { title: 'Donate', desc: 'Support medical equipment and patient care.' },
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
            <CTAButton>Donate or Get Involved</CTAButton>
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
            <li><strong>Social:</strong> Follow us on X (Twitter), Facebook, and Instagram @JagabanRangers</li>
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
