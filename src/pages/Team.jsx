const teamMembers = [
  { name: 'Prince Yahya Haliru Dantoro', title: 'Deputy National Co-ordinator' },
  { name: 'Dr Jimlas Opeyemi Ogunsakin', title: 'National Program Director' },
  { name: 'Chief Ikenna Nicolas Ukwa', title: 'Abia State Coordinator' },
  { name: 'Hon. Joan Okoduwa', title: 'National Treasurer' },
  { name: 'Hon. Eric Iso Anderson', title: 'Cross River State Coordinator' },
  { name: 'Hon. Emmanuel Bello', title: 'Taraba State Coordinator' },
  { name: 'Hon. Uchenna Okorie', title: 'National Secretary' },
  { name: 'Hon. John Zuofa', title: 'South-South Coordinator' },
  { name: 'Hon. Felicia Adi', title: 'North East Coordinator' },
  { name: 'Hon. Aisha Mustapha', title: 'North West Coordinator' },
  { name: 'Dr Bestman B Probel', title: 'Rivers State Coordinator' },
]

const teamImages = [
  '/asset/team/Prince-Yahya-Haliru-Dantoro.jpeg',
  '/asset/team/Dr-jimlas-opeyemi-ogunsakin.jpeg',
  '/asset/team/Chief-ikenna-Nicolas-ukwa.jpeg',
  '/asset/team/Hon-Joan-okoduwa.jpeg',
  '/asset/team/Eric-Iso-Anderson.jpeg',
  '/asset/team/Hon-Emmanuel-Bello.jpeg',
  '/asset/team/Hon-Uchenna-okorie.jpeg',
  '/asset/team/Hon-John-zuofa.jpeg',
  '/asset/team/Dr-Bestman-B-Probel.jpeg',
]

/** Filenames with spaces or unusual spelling — slug matching alone won't resolve these. */
const teamImageOverrides = {
  'Hon. Felicia Adi': `/asset/team/${encodeURIComponent('Hon. Felicia Adi.jpeg')}`,
  'Hon. Aisha Mustapha': `/asset/team/${encodeURIComponent('Hon.Aisha Mustapha.jpeg')}`,
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function getTeamImage(name) {
  if (teamImageOverrides[name]) return teamImageOverrides[name]
  const memberSlug = slugify(name)
  return (
    teamImages.find((imagePath) => {
      const fileName = imagePath.split('/').pop()?.replace(/\.[^.]+$/, '') ?? ''
      const imageSlug = slugify(fileName)
      return imageSlug.includes(memberSlug) || memberSlug.includes(imageSlug)
    }) ?? '/asset/logo.png'
  )
}

export default function Team() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <h1 className="page-title">Our Team</h1>
          <p className="page-subtitle">Meet The People Driving The Movement</p>
        </div>
      </section>

      <section className="section team-intro">
        <div className="container">
          <h2 className="section-title">Dedicated Leaders, Shared Vision</h2>
          <p>
            Our team is made up of committed leaders serving communities across Nigeria through
            humanitarian outreach, collaboration, and grassroots mobilization.
          </p>
          <p>
            Each member brings experience, local insight, and a passion for service that helps the
            Jagaban Rangers Solidarity Movement deliver meaningful impact.
          </p>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="team-card">
                <div className="team-image-wrap">
                  <img src={getTeamImage(member.name)} alt={member.name} className="team-image" />
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p>{member.title}</p>
                </div>
              </article>
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
        .team-intro { background: var(--white); }
        .team-intro p {
          max-width: 820px;
          margin: 0 0 0.9rem;
        }
        .team-intro p:last-child { margin-bottom: 0; }
        .team-section { background: var(--gray-100); }
        .team-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 600px) {
          .team-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; }
        }
        @media (min-width: 992px) {
          .team-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }
        }
        .team-card {
          background: var(--white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          min-width: 0;
          display: flex;
          flex-direction: column;
        }
        .team-image-wrap {
          width: 100%;
          height: 340px;
          background: var(--gray-200);
        }
        @media (max-width: 479px) {
          .team-image-wrap { height: 300px; }
        }
        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }
        .team-content { padding: 1rem; }
        .team-content h3 {
          margin: 0 0 0.35rem;
          color: var(--blue);
          font-size: 1.1rem;
          line-height: 1.3;
        }
        .team-content p {
          margin: 0;
          color: var(--dark);
          font-weight: 500;
          line-height: 1.35;
        }
      `}</style>
    </>
  )
}
