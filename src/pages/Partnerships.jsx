import CTAButton from '../components/CTAButton'

const THUMBNAIL_PDF_PAIRS = [
  { thumbnail: 'abia_thumbnails.png', pdf: 'ABIA SURGERIES.pdf', label: 'Abia Surgeries' },
  { thumbnail: 'akwaibom_thumbnails.png', pdf: 'Brochure Akwa Ibom.pdf', label: 'Akwa Ibom Brochure' },
  { thumbnail: 'benue_thumbnails.png', pdf: 'Brochure Benue.pdf', label: 'Benue Brochure' },
  { thumbnail: 'crossriver_thumbnails.png', pdf: 'Cross River 2019 Brochure.pdf', label: 'Cross River 2019' },
  { thumbnail: 'edo_thumbnails.png', pdf: 'Edo Brochure.pdf', label: 'Edo Brochure' },
  { thumbnail: 'imo_thumbnails.png', pdf: 'Imo Surgeries.pdf', label: 'Imo Surgeries' },
  { thumbnail: 'ondo_thumbnails.png', pdf: 'Ondo Surgeries.pdf', label: 'Ondo Surgeries' },
  { thumbnail: 'rivers_thumbnails.png', pdf: 'RIvers Brochure.pdf', label: 'Rivers Brochure' },
]

export default function Partnerships() {
  const openPdf = (pdfPath) => {
    window.open(`/asset/${encodeURIComponent(pdfPath)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <h1 className="page-title">Partnerships</h1>
          <p className="page-subtitle">Our Key Partner</p>
        </div>
      </section>

      <section className="section partner-section">
        <div className="container">
          <h2 className="section-title">Our Key Partner: Benjamin Olowejebutu </h2>
          <div className="partner-intro">
            <div className="partner-logos">
              <img src="/asset/logo.png" alt="Jagaban Rangers Solidarity Movement" className="partner-logo jr" />
              <img src="/asset/bof_logo.jpeg" alt="Benjamin Olowejebutu Foundation" className="partner-logo bof" />
            </div>
            <div className="partner-content">
              <div className="partner-image-wrap">
                <img src="/asset/benjamin.jpeg" alt="Benjamin Olowejebutu" className="partner-benjamin" />
              </div>
              <div className="partner-text">
                <p>
                  We are proud to partner with the Benjamin Olowejebutu Foundation, a renowned organization committed to providing free medical surgeries to Nigerians in need. Through this collaboration, we amplify our reach and expertise in delivering life-changing procedures for fibroids, lipomas, breast lumps, hernias, and more.
                </p>
                <p>
                  The foundation's track record of successful interventions aligns perfectly with our mission, ensuring that financial barriers do not prevent access to essential healthcare. Together we have reached communities across Abia, Akwa Ibom, Benue, Cross River, Edo, Imo, Ondo, Rivers, and other states.
                </p>
                <p>
                  The Benjamin Olowejebutu Foundation shares our belief in health equity and service to the masses—values at the heart of Jagaban's legacy. By combining our grassroots mobilisation with their medical capacity, we are able to bring free surgeries and consultations to hundreds of beneficiaries per outreach.
                </p>
                <CTAButton>Contact Us to Partner</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section brochures-section">
        <div className="container">
          <h2 className="section-title">Outreach Brochures & Reports</h2>
          <p className="brochures-intro">
            Click any thumbnail to open the corresponding brochure or report (PDF). These documents detail our joint outreaches with the Benjamin Olowejebutu Foundation across different states.
          </p>
          <div className="thumbnails-grid">
            {THUMBNAIL_PDF_PAIRS.map(({ thumbnail, pdf, label }) => (
              <button
                key={thumbnail}
                type="button"
                className="thumbnail-card"
                onClick={() => openPdf(pdf)}
                aria-label={`Open ${label} (PDF)`}
              >
                <img src={`/asset/${thumbnail}`} alt={label} />
                <span className="thumbnail-label">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-partner-section">
        <div className="container">
          <h2 className="section-title">Why Partner With Us?</h2>
          <p className="why-intro">
            Partnering with the Jagaban Rangers Solidarity Movement allows your organisation to reach underserved Nigerians, align with a legacy of service, and gain visibility through our outreach reports and community engagement.
          </p>
          <ul className="why-list">
            <li>Reach thousands of underserved Nigerians through targeted medical outreaches.</li>
            <li>Align your brand with Jagaban's legacy of service and progressive leadership.</li>
            <li>Gain visibility through our outreach reports, brochures, and social media.</li>
            <li>Support health equity and national unity through concrete, measurable impact.</li>
          </ul>
          <CTAButton>Interested in partnering? Contact us</CTAButton>
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
        .partner-logos {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .partner-logo {
          height: 64px;
          width: auto;
          object-fit: contain;
        }
        .partner-logo.bof { max-height: 80px; max-width: 200px; }
        .partner-content {
          display: grid;
          gap: 2rem;
          align-items: stretch;
        }
        @media (min-width: 900px) {
          .partner-content { grid-template-columns: 280px 1fr; }
        }
        .partner-image-wrap {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 12px 32px rgba(0,0,0,0.12);
          min-height: 220px;
          height: 100%;
          max-height: 360px;
        }
        @media (min-width: 480px) {
          .partner-image-wrap { min-height: 260px; }
        }
        .partner-benjamin {
          width: 100%;
          height: 100%;
          min-height: 220px;
          max-height: 360px;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        @media (min-width: 480px) {
          .partner-benjamin { min-height: 260px; }
        }
        .partner-text p { margin: 0 0 1rem; }
        .why-intro { margin: 0 0 1rem; }
        .brochures-section { background: var(--gray-100); }
        .brochures-intro { margin: 0 0 1.5rem; }
        .thumbnails-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 220px), 1fr));
        }
        @media (min-width: 480px) {
          .thumbnails-grid { gap: 1.25rem; }
        }
        .thumbnail-card {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          padding: 0;
          border: none;
          border-radius: 12px;
          overflow: hidden;
          background: var(--white);
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          text-align: left;
        }
        .thumbnail-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.15);
        }
        .thumbnail-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }
        .thumbnail-label {
          padding: 0.75rem 1rem;
          font-weight: 600;
          color: var(--blue);
          font-size: 0.95rem;
        }
        .why-partner-section ul {
          margin: 0 0 1.5rem;
          padding-left: 1.5rem;
        }
        .why-partner-section li { margin-bottom: 0.5rem; }
      `}</style>
    </>
  )
}
