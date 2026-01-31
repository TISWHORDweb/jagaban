import CTAButton from '../components/CTAButton'

export default function Mission() {
  const objectives = [
    'Identify and support communities in dire need of medical interventions.',
    'Partner with reputable foundations to deliver free surgeries and health services.',
    "Mobilize sponsorship from Nigerians who resonate with Jagaban's legacies.",
    'Educate and engage the public on the principles of progressive leadership.',
  ]

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <h1 className="page-title">Our Mission</h1>
          <p className="page-subtitle">Mission Statement</p>
        </div>
      </section>

      <section className="section">
        <div className="container mission-content">
          <div className="mission-block">
            <h2 className="section-title">Mission Statement</h2>
            <p className="mission-statement">
              To spread the ideologies of Jagaban—His Excellency Bola Ahmed Tinubu—by providing essential medical support to impoverished communities, thereby promoting health equity, national unity, and sustainable development.
            </p>
          </div>
          <div className="mission-block vision-block">
            <h2 className="section-title">Vision</h2>
            <p>
              A Nigeria where every citizen, regardless of background, has access to quality healthcare and is inspired by leadership that uplifts the masses.
            </p>
          </div>
          <div className="mission-block">
            <h2 className="section-title">Objectives</h2>
            <ul className="objectives-list">
              {objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
            <CTAButton>Contact Us</CTAButton>
          </div>
          <div className="mission-infographic">
            <h3>Our Impact</h3>
            <div className="infographic-bars">
              <div className="bar" style={{ '--w': '85%', '--c': 'var(--blue)' }}><span>Outreaches</span></div>
              <div className="bar" style={{ '--w': '90%', '--c': 'var(--light-blue)' }}><span>Lives Impacted</span></div>
              <div className="bar" style={{ '--w': '75%', '--c': 'var(--green)' }}><span>Partnerships</span></div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background: linear-gradient(135deg, var(--blue) 0%, var(--light-blue) 100%);
          color: var(--white);
          padding: 3rem 0;
        }
        .page-title { font-size: clamp(1.75rem, 4vw, 2.5rem); margin: 0 0 0.25rem; }
        .page-subtitle { margin: 0; opacity: 0.95; font-size: 1.1rem; }
        .mission-content {
          display: grid;
          gap: 2.5rem;
        }
        .mission-statement { font-size: 1.15rem; font-weight: 500; color: var(--blue); }
        .objectives-list {
          margin: 0 0 1.5rem;
          padding-left: 1.25rem;
          max-width: 600px;
        }
        .objectives-list li { margin-bottom: 0.5rem; }
        .mission-infographic {
          background: var(--gray-100);
          padding: 1.25rem;
          border-radius: 12px;
          margin-top: 1rem;
          min-width: 0;
        }
        @media (min-width: 480px) {
          .mission-infographic { padding: 2rem; }
        }
        .mission-infographic h3 { margin: 0 0 1rem; color: var(--blue); }
        .infographic-bars { display: flex; flex-direction: column; gap: 1rem; }
        .bar {
          height: 2rem;
          background: var(--gray-200);
          border-radius: 8px;
          overflow: hidden;
          position: relative;
        }
        .bar::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: var(--w);
          background: var(--c);
          border-radius: 8px;
        }
        .bar span {
          position: relative;
          z-index: 1;
          padding: 0 0.75rem;
          line-height: 2rem;
          font-weight: 600;
          color: var(--dark);
          font-size: 0.9rem;
        }
      `}</style>
    </>
  )
}
