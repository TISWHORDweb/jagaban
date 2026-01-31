const conditions = ['Fibroids', 'Lipomas', 'Breast lumps', 'Hernias', 'And other treatable ailments']
const steps = [
  { title: 'Community Identification', desc: 'Our Rangers scout and assess areas with high health vulnerabilities.' },
  { title: 'Planning & Execution', desc: 'Collaborate with medical experts for seamless delivery.' },
  { title: 'Follow-Up', desc: 'Provide post-care support and monitor outcomes.' },
]

export default function Programs() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <h1 className="page-title">Programs & Outreaches</h1>
          <p className="page-subtitle">Our Medical Outreaches</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Medical Outreaches</h2>
          <p>
            At the heart of our movement are community-based medical outreaches designed to reach the poor masses who lack access to affordable healthcare. We conduct comprehensive health camps offering consultations, screenings, and free surgeries for conditions such as:
          </p>
          <ul className="conditions-list">
            {conditions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p>
            These programs are tailored to specific community needs, ensuring maximum impact. Past outreaches have been held in rural and urban slums across states like Lagos, Abuja, and beyond. We partner with the Benjamin Olowejebutu Foundation and other reputable organisations to deliver life-changing procedures at no cost to beneficiaries.
          </p>
          <p>
            Each outreach is planned in close consultation with community leaders and local health workers. We prioritise conditions that are treatable with surgery but often go untreated due to cost—fibroids, hernias, lipomas, breast lumps, and similar ailments—so that families can regain their health and productivity without financial burden.
          </p>
        </div>
      </section>

      <section className="section programs-how">
        <div className="container">
          <h2 className="section-title">How We Operate</h2>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={s.title} className="step-card">
                <span className="step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <p className="gallery-intro">
            Videos and moments from our medical outreaches across Nigeria. Each camp brings free consultations, screenings, and surgeries to communities in need.
          </p>
          <div className="video-gallery">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <div key={n} className="video-card">
                <video controls playsInline poster="/asset/logo.png">
                  <source src={`/asset/outreach${n}.mp4`} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events – commented out for now
      <section className="section upcoming-section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="upcoming-card">
            <p><strong>Date:</strong> [Insert Date] – Outreach in [Community Name], focusing on women's health.</p>
            <p>Stay tuned for more! Sign up for our newsletter to get updates.</p>
            <CTAButton>Contact Us for Updates</CTAButton>
          </div>
        </div>
      </section>
      */}

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
        .conditions-list {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        .conditions-list li { margin-bottom: 0.35rem; }
        .programs-how { background: var(--gray-100); }
        .steps-grid {
          display: grid;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        @media (min-width: 700px) {
          .steps-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .step-card {
          background: var(--white);
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          border-left: 4px solid var(--blue);
        }
        .step-num {
          display: inline-block;
          width: 36px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          background: var(--blue);
          color: var(--white);
          border-radius: 50%;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .step-card h3 { margin: 0 0 0.5rem; color: var(--blue); font-size: 1.15rem; }
        .step-card p { margin: 0; font-size: 0.95rem; }
        .gallery-intro { margin: 0 0 1.5rem; }
        .video-gallery {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
          margin-top: 1.5rem;
        }
        @media (min-width: 480px) {
          .video-gallery { gap: 1.5rem; }
        }
        .video-card {
          min-width: 0;
        }
        .video-card video {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          display: block;
        }
      `}</style>
    </>
  )
}
