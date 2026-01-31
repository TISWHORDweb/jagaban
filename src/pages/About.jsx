import CTAButton from '../components/CTAButton'

const values = [
  { title: 'Compassion', desc: 'Prioritizing the needs of the underserved.', color: 'var(--blue)' },
  { title: 'Unity', desc: 'Bringing Nigerians together under shared ideals.', color: 'var(--light-blue)' },
  { title: 'Excellence', desc: 'Delivering high-quality, impactful programs.', color: 'var(--red)' },
  { title: 'Transparency', desc: 'Ensuring accountability in all our operations.', color: 'var(--green)' },
]

const objectives = [
  'Identify and support communities in dire need of medical interventions.',
  'Partner with reputable foundations to deliver free surgeries and health services.',
  "Mobilize sponsorship from Nigerians who resonate with Jagaban's legacies.",
  'Educate and engage the public on the principles of progressive leadership.',
]

export default function About() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Who We Are</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <p>
            The Jagaban Rangers Solidarity Movement is a grassroots organization inspired by the transformative leadership of H.E. Bola Ahmed Tinubu, the Jagaban of Borgu. Founded by passionate Nigerians who share his vision for a prosperous and equitable society, we focus on extending his ideologies of empowerment, innovation, and inclusivity to the grassroots level.
          </p>
          <p>
            Our core approach is through humanitarian efforts, particularly medical outreaches that target the poor and vulnerable. By addressing health disparities, we not only improve lives but also foster a sense of community solidarity aligned with Jagaban's legacies of service and progress.
          </p>
          <p>
            We work alongside traditional leaders, community heads, and partner foundations to ensure that our outreaches reach those who need them most—in rural areas, urban slums, and underserved states across Nigeria.
          </p>
          <CTAButton>Get in Touch</CTAButton>
        </div>
      </section>

      <section className="section oba-section">
        <div className="container">
          <h2 className="section-title text-center">Courtesy Visit to the Oba of Igbogbo</h2>
          <p className="oba-desc text-center">
            Courtesy visit to the Oba of Igbogbo.
          </p>
          <div className="oba-gallery">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="oba-gallery-item">
                <img src={`/asset/oba${n}.jpeg`} alt={`Courtesy visit to the Oba of Igbogbo (${n})`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section leadership-section">
        <div className="container leadership-grid">
          <div className="leadership-image-wrap">
            <img src="/asset/mike.jpeg" alt="Hon. Michael Amoji" className="leadership-img" />
          </div>
          <div className="leadership-content">
            <h2 className="section-title">Our Leadership</h2>
            <h3 className="leadership-name">Hon. Michael Amoji</h3>
            {/* <p className="leadership-role">
              Member, Social & Humanitarian Committee Southeast &amp; Deputy Director General
            </p> */}
            <p>
              Hon. Michael Amoji is the driving force behind the Jagaban Rangers Solidarity Movement. As Deputy Director General and a key member of the Social & Humanitarian Committee for the Southeast, he brings a rare blend of political insight and hands-on humanitarian commitment. Under his leadership, the movement has grown into a credible channel for delivering free medical care to underserved communities, aligning with the ideals of His Excellency Bola Ahmed Tinubu (Jagaban) and the broader vision of a healthier, more united Nigeria.
            </p>
            <p>
              His dedication to health equity and community empowerment has seen the movement partner with reputable foundations, mobilise sponsors, and execute multiple medical outreaches—touching hundreds of lives through free surgeries and consultations. Hon. Michael Amoji continues to inspire Rangers and partners alike to put service above self and to extend Jagaban's legacy of progressive leadership to the grassroots.
            </p>
            <CTAButton>Get in Touch</CTAButton>
          </div>
        </div>
      </section>

      <section className="section mission-in-about">
        <div className="container">
          <h2 className="section-title text-center">Our Mission & Vision</h2>
          <div className="mission-blocks">
            <div className="mission-block">
              <h3>Mission Statement</h3>
              <p className="mission-statement">
                To spread the ideologies of Jagaban—His Excellency Bola Ahmed Tinubu—by providing essential medical support to impoverished communities, thereby promoting health equity, national unity, and sustainable development.
              </p>
            </div>
            <div className="mission-block">
              <h3>Vision</h3>
              <p>
                A Nigeria where every citizen, regardless of background, has access to quality healthcare and is inspired by leadership that uplifts the masses.
              </p>
            </div>
            <div className="mission-block">
              <h3>Objectives</h3>
              <ul className="objectives-list">
                {objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>
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

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title text-center">Our Values</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card" style={{ '--accent': v.color }}>
                <div className="value-icon" />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
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
        .oba-section { background: var(--white); }
        .oba-desc {
          margin: 0 0 1.5rem;
          font-size: 1.05rem;
          color: var(--dark);
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }
        .oba-gallery {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(2, 1fr);
          margin-top: 1rem;
        }
        @media (min-width: 600px) {
          .oba-gallery { gap: 1.25rem; }
        }
        @media (min-width: 768px) {
          .oba-gallery { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        }
        .oba-gallery-item {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          min-width: 0;
        }
        .oba-gallery-item img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        @media (min-width: 480px) {
          .oba-gallery-item img { height: 240px; }
        }
        @media (min-width: 768px) {
          .oba-gallery-item img { height: 220px; }
        }
        .leadership-section { background: var(--gray-100); }
        .leadership-grid {
          display: grid;
          gap: 1.5rem;
          align-items: start;
        }
        @media (min-width: 480px) {
          .leadership-grid { gap: 2rem; }
        }
        @media (min-width: 900px) {
          .leadership-grid { grid-template-columns: 320px 1fr; }
        }
        .leadership-image-wrap {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
          min-width: 0;
        }
        .leadership-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          object-position: center top;
        }
        .leadership-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--blue);
          margin: 0 0 0.25rem;
        }
        .leadership-role {
          font-size: 1rem;
          font-weight: 600;
          color: var(--dark);
          margin: 0 0 1rem;
          opacity: 0.9;
        }
        .leadership-content p { margin: 0 0 1rem; }
        .text-center { text-align: center; }
        .mission-in-about { background: var(--gray-100); }
        .mission-blocks {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .mission-block h3 { margin: 0 0 0.5rem; color: var(--blue); font-size: 1.2rem; }
        .mission-statement { font-weight: 500; color: var(--dark); }
        .objectives-list { margin: 0.5rem 0 0; padding-left: 1.25rem; }
        .objectives-list li { margin-bottom: 0.35rem; }
        .mission-infographic {
          background: var(--white);
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
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
          left: 0; top: 0; bottom: 0;
          width: var(--w);
          background: var(--c);
          border-radius: 8px;
        }
        .bar span { position: relative; z-index: 1; padding: 0 0.75rem; line-height: 2rem; font-weight: 600; font-size: 0.9rem; }
        .values-section { background: var(--white); }
        .values-grid {
          display: grid;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        @media (min-width: 600px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .values-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .value-card {
          background: var(--gray-100);
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          border-top: 4px solid var(--accent);
        }
        .value-card h3 { margin: 0 0 0.5rem; color: var(--blue); font-size: 1.25rem; }
        .value-card p { margin: 0; font-size: 0.95rem; color: var(--dark); }
        .value-icon {
          width: 40px;
          height: 4px;
          background: var(--accent);
          border-radius: 2px;
          margin-bottom: 0.75rem;
        }
      `}</style>
    </>
  )
}
