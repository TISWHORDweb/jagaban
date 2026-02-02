import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'

export default function Home() {
  const quickLinks = [
    { path: '/about', title: 'About Us', desc: 'Who we are and our values' },
    { path: '/programs', title: 'Programs', desc: 'Medical outreaches and impact' },
    { path: '/contact', title: 'Contact & Get Involved', desc: 'Partner with us, volunteer, get in touch' },
  ]

  return (
    <>
      {/* Homepage banner – logo as bg with overlay, jagabanlogo on right */}
      <section className="hero-banner">
        <div className="hero-banner-bg" />
        <div className="hero-banner-overlay" />
        <div className="container hero-banner-inner">
          <div className="hero-banner-content">
            <div className="hero-badge">Jagaban Rangers</div>
            <h1 className="hero-title">Empowering Communities Through Compassion and Leadership</h1>
            <p className="hero-subtitle">
              Honoring the visionary ideologies of His Excellency Bola Ahmed Tinubu—bringing hope, health, and solidarity to underserved communities across Nigeria.
            </p>
            <div className="hero-ctas">
              <CTAButton>Contact Us for Partnership</CTAButton>
              <CTAButton variant="outline">Volunteer Today</CTAButton>
            </div>
          </div>
          <div className="hero-banner-logos">
            <img src="/asset/jagabanlogo.png" alt="Jagaban" className="hero-logo hero-logo-jagaban" />
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container">
          <h2 className="section-title">Our Purpose</h2>
          <p className="intro-lead">
            The Jagaban Rangers Solidarity Movement is dedicated to honoring and propagating the visionary ideologies of His Excellency Bola Ahmed Tinubu, fondly known as Jagaban. We believe in his legacy of progressive leadership, unity, and development for all Nigerians.
          </p>
          <p>
            Through targeted medical outreaches, we bring hope, health, and solidarity to underserved communities. We partner with reputable foundations to deliver free surgeries and consultations for conditions like fibroids, hernias, lipomas, breast lumps, and other treatable ailments—embodying Jagaban's commitment to the masses.
          </p>
          <p>
            Join us in transforming lives—one outreach at a time. Whether you're a believer in Jagaban's principles or a community in need, together we can build a healthier, more united nation.
          </p>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <h2 className="section-title text-center">Why Medical Outreach Matters</h2>
          <p className="why-intro text-center">
            Across Nigeria, millions lack access to specialist care. Poverty, distance, and weak health systems leave treatable conditions—fibroids, hernias, breast lumps, and more—untreated. Medical outreach missions bridge that gap by taking care to the people.
          </p>
          <div className="why-grid">
            <div className="why-card">
              <h3>Breaking barriers</h3>
              <p>We address healthcare access barriers caused by cost, travel, and lack of facilities. By bringing volunteer medical teams and equipment to communities, we ensure the poor and vulnerable receive the same quality care as anyone else.</p>
            </div>
            <div className="why-card">
              <h3>Strengthening communities</h3>
              <p>Our outreaches do more than treat patients—they strengthen local trust, support traditional leaders and health workers, and build capacity for follow-up care. We work with community heads so every camp leaves a lasting impact.</p>
            </div>
            <div className="why-card">
              <h3>Free, dignified care</h3>
              <p>Every consultation and surgery we offer is free. We believe financial barriers should never prevent access to essential healthcare. Our partners and sponsors make it possible to deliver life-changing procedures at no cost to beneficiaries.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <h2 className="section-title text-center">Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">200+</span>
              <span className="stat-label">Individuals served per outreach</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">Multiple</span>
              <span className="stat-label">States reached (Lagos, Abuja & beyond)</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">Free</span>
              <span className="stat-label">Surgeries & consultations</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="container featured-grid">
          <div className="featured-text">
            <h2 className="section-title">Featured Outreach</h2>
            <p>
              Our recent medical outreach provided free surgeries and consultations to over 200 individuals. Thanks to our sponsors and partners, we addressed critical health issues like fibroids and hernias, embodying Jagaban's commitment to the masses.
            </p>
            <p>
              We work hand-in-hand with the Benjamin Olowojebutu Foundation and other partners to ensure that financial barriers never prevent access to essential healthcare. Each camp includes consultations, screenings, and free surgeries for fibroids, lipomas, breast lumps, hernias, and other treatable conditions.
            </p>
            <p>
              Communities we serve often have little or no access to specialist care. By bringing medical teams and equipment to them, we reduce the burden of travel and cost—so that the poor and vulnerable can receive the same quality of care as anyone else.
            </p>
            <div className="featured-ctas">
              <CTAButton>Contact Us for Partnership</CTAButton>
              <CTAButton variant="secondary">Volunteer Today</CTAButton>
            </div>
          </div>
          <div className="featured-media">
            <div className="featured-img-wrap">
              <img src="/asset/mike.jpeg" alt="Rangers team during an outreach" className="featured-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="section quick-links-section">
        <div className="container">
          <h2 className="section-title text-center">Explore More</h2>
          <div className="quick-links-grid">
            {quickLinks.map(({ path, title, desc }) => (
              <Link to={path} key={path} className="quick-link-card">
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="quick-link-arrow">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video section – just before footer */}
      <section className="section video-section">
        <div className="container">
          <h2 className="section-title text-center">See Us in Action</h2>
          <p className="video-section-intro text-center">
            Watch how we bring medical care and hope to communities in need.
          </p>
          <div className="video-wrap">
            <video controls playsInline poster="/asset/logo.png" className="home-video">
              <source src="/asset/outreach1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Call-to-action section – before footer */}
      <section className="section cta-section">
        <div className="container cta-inner">
          <h2 className="cta-title">Ready to Make a Difference?</h2>
          <p className="cta-text">
            Sponsor an outreach, volunteer as a Ranger, or donate to bring healthcare to those who need it most. Every action counts.
          </p>
          <div className="cta-buttons">
            <CTAButton>Contact Us for Partnership</CTAButton>
            <CTAButton variant="secondary">Volunteer</CTAButton>
            <CTAButton variant="outline">Contact Us</CTAButton>
          </div>
          <div className="cta-spacer" aria-hidden />
        </div>
      </section>

      <style>{`
        .hero-banner {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 2rem 0 3rem;
        }
        @media (min-width: 480px) {
          .hero-banner { padding: 2.5rem 0 3.5rem; min-height: 72vh; }
        }
        @media (min-width: 768px) {
          .hero-banner { padding: 3rem 0 4rem; min-height: 75vh; }
        }
        .hero-banner-bg {
          position: absolute;
          inset: 0;
          background: url('/asset/logo.png') center center / cover no-repeat;
        }
        .hero-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,71,112,0.85) 0%, rgba(0,117,176,0.75) 40%, rgba(0,165,237,0.6) 100%);
          pointer-events: none;
        }
        .hero-banner-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .hero-banner-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
          }
        }
        .hero-banner-content {
          color: var(--white);
          max-width: 100%;
          text-align: left;
        }
        @media (min-width: 480px) {
          .hero-banner-content { max-width: 640px; }
        }
        .hero-banner-logos {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .hero-banner-logos { flex-direction: column; gap: 1.5rem; }
        }
        .hero-logo {
          display: block;
          max-width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
        }
        .hero-logo-jagaban {
          max-height: 180px;
          width: auto;
        }
        @media (min-width: 480px) {
          .hero-logo-jagaban { max-height: 240px; }
        }
        @media (min-width: 768px) {
          .hero-logo-jagaban { max-height: 300px; }
        }
        .hero-badge {
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.35rem 0.85rem;
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 4px;
          margin-bottom: 1rem;
        }
        .hero-title {
          font-family: 'Montserrat', 'Poppins', sans-serif;
          font-size: clamp(1.6rem, 4vw, 2.6rem);
          font-weight: 700;
          margin: 0 0 0.75rem;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }
        .hero-subtitle {
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          margin: 0 0 1.5rem;
          opacity: 0.95;
          line-height: 1.6;
        }
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .hero-ctas .btn-outline {
          color: var(--white);
          border-color: rgba(255,255,255,0.8);
        }
        .hero-ctas .btn-outline:hover {
          background: rgba(255,255,255,0.15);
          border-color: var(--white);
        }
        .intro-lead {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        .text-center { text-align: center; }
        .why-section { background: var(--gray-100); }
        .why-intro {
          max-width: 720px;
          margin: 0 auto 2rem;
          font-size: 1.05rem;
        }
        .why-grid {
          display: grid;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        @media (min-width: 768px) {
          .why-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .why-card {
          background: var(--white);
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          border-top: 4px solid var(--light-blue);
        }
        .why-card h3 {
          margin: 0 0 0.5rem;
          font-size: 1.15rem;
          color: var(--blue);
        }
        .why-card p { margin: 0; font-size: 0.95rem; }
        .stats-section { background: var(--white); }
        .stats-grid {
          display: grid;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        @media (min-width: 480px) {
          .stats-grid { gap: 1.5rem; }
        }
        @media (min-width: 600px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .stat-card {
          background: var(--white);
          padding: 1.25rem;
          min-width: 0;
        }
        @media (min-width: 480px) {
          .stat-card { padding: 1.5rem; }
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          border-top: 4px solid var(--blue);
        }
        .stat-number {
          display: block;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.35rem, 4vw, 1.75rem);
          font-weight: 700;
          color: var(--blue);
          margin-bottom: 0.35rem;
        }
        .stat-label { font-size: clamp(0.8rem, 2vw, 0.9rem); color: var(--dark); word-break: break-word; }
        .featured-section { background: var(--white); }
        .featured-grid {
          display: grid;
          gap: 2rem;
          align-items: stretch;
        }
        @media (min-width: 768px) {
          .featured-grid { grid-template-columns: 1fr 1fr; }
        }
        .featured-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.25rem;
        }
        .featured-media {
          display: flex;
          align-items: stretch;
        }
        .featured-img-wrap {
          width: 100%;
          height: 100%;
          min-height: 240px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
        }
        @media (min-width: 480px) {
          .featured-img-wrap { min-height: 280px; }
        }
        .featured-img {
          width: 100%;
          height: 100%;
          min-height: 240px;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        @media (min-width: 480px) {
          .featured-img { min-height: 280px; }
        }
        .quick-links-section { background: var(--gray-100); }
        .quick-links-grid {
          display: grid;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        @media (min-width: 480px) {
          .quick-links-grid { gap: 1.25rem; }
        }
        @media (min-width: 600px) {
          .quick-links-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .quick-link-card {
          background: var(--white);
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          border-left: 4px solid var(--light-blue);
          text-decoration: none;
          color: var(--dark);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .quick-link-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          text-decoration: none;
          color: var(--dark);
        }
        .quick-link-card h3 {
          margin: 0 0 0.35rem;
          font-size: 1.15rem;
          color: var(--blue);
        }
        .quick-link-card p { margin: 0; font-size: 0.9rem; opacity: 0.9; }
        .quick-link-arrow {
          display: inline-block;
          margin-top: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--light-blue);
        }
        .video-section { background: var(--white); }
        .video-section-intro {
          margin: 0 0 1.5rem;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }
        .video-wrap {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          max-width: 100%;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .video-wrap { max-width: 800px; }
        }
        .home-video {
          width: 100%;
          display: block;
          vertical-align: top;
        }
        .cta-section {
          background: linear-gradient(135deg, var(--blue) 0%, var(--light-blue) 100%);
          color: var(--white);
          padding: 3.5rem 0 3rem;
          margin-bottom: 0;
        }
        .cta-inner {
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
        }
        .cta-spacer {
          height: 0;
          margin-top: 1rem;
        }
        .cta-title {
          font-family: 'Montserrat', 'Poppins', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          margin: 0 0 0.75rem;
          color: var(--white);
        }
        .cta-text {
          margin: 0 0 1.5rem;
          opacity: 0.95;
          font-size: 1.05rem;
        }
        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }
        .cta-buttons .btn-outline {
          color: var(--white);
          border-color: rgba(255,255,255,0.9);
        }
        .cta-buttons .btn-outline:hover {
          background: rgba(255,255,255,0.2);
          border-color: var(--white);
        }
        @media (max-width: 599px) {
          .hero-banner-content { text-align: center; }
          .hero-ctas { justify-content: center; flex-direction: column; align-items: stretch; }
          .featured-ctas { flex-direction: column; align-items: stretch; }
          .cta-buttons { flex-direction: column; align-items: stretch; }
        }
        @media (max-width: 380px) {
          .hero-title { font-size: 1.4rem; }
          .hero-subtitle { font-size: 0.9rem; }
        }
      `}</style>
    </>
  )
}
