import { useParams, Link } from 'react-router-dom'
import services from '../data/servicesData'
import '../styles/service-detail.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(item => item.slug === slug)

  if (!service) {
    return (
      <div style={{ padding: 120 }}>
        <h2>Layanan tidak ditemukan</h2>
      </div>
    )
  }

  return (
    <main className="service-detail-page">
      <section className="service-detail-section">
        <div className="container service-detail-layout">

          {/* SIDEBAR */}
          <aside className="service-detail-sidebar">
            <h3>Bidang Layanan</h3>
            <ul>
              {services.map(item => (
                <li key={item.slug}>
                  <Link
                    to={`/layanan/${item.slug}`}
                    className={item.slug === slug ? 'active' : ''}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* CONTENT */}
          <article className="service-detail-content">

            {/* HERO IMAGE */}
            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className="service-detail-image"
              />
            )}

            {/* TITLE */}
            <h1>{service.detail.heroTitle}</h1>
            <h4 className="service-subtitle">
              {service.detail.heroSubtitle}
            </h4>

            {/* INTRO */}
            <p className="service-intro">
              {service.detail.intro}
            </p>

            {/* SECTIONS */}
            {service.detail.sections?.map((section, index) => (
              <section key={index} className="service-section">
                <h2>{section.title}</h2>

                {section.type === 'list' ? (
                  <ul className="service-list">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.content}</p>
                )}
              </section>
            ))}
          </article>

        </div>
      </section>
    </main>
  )
}
