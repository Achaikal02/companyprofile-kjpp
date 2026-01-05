import { Link } from 'react-router-dom'
import ServiceGrid from '../components/ServiceGrid'
import services from '../data/servicesData'
import '../styles/services.css'

export default function Services() {
  return (
    <main className="services-page">

      {/* ======================================
          HERO SECTION
      ====================================== */}
      <section className="services-hero">
        <div className="container services-hero-layout">

          {/* LEFT CONTENT */}
          <div className="services-hero-text">
            <h1>Layanan Profesional Kami</h1>
            <p>
              Solusi penilaian dan konsultasi profesional KJPP Ayon Suherman
              & Rekan yang dilaksanakan secara independen serta mengacu
              pada standar penilaian yang berlaku.
            </p>

            {/* TRUST INDICATOR */}
            <ul className="services-hero-meta">
              <li>✔ Mengacu SPI & KEPI</li>
              <li>✔ Independen & Profesional</li>
              <li>✔ Berpengalaman & Kredibel</li>
            </ul>

            {/* CTA */}
            <div className="services-hero-actions">
              <a href="#services-list" className="btn-primary">
                Lihat Layanan
              </a>
              <Link to="/kontak" className="btn-outline">
                Konsultasi
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="services-hero-visual">
            <div className="hero-card">Penilaian Properti</div>
            <div className="hero-card">Konsultasi Pengembangan</div>
            <div className="hero-card">Pengawasan Proyek</div>
            <div className="hero-card">Teknologi Informasi</div>
          </div>

        </div>
      </section>

      {/* ======================================
          MAIN CONTENT
      ====================================== */}
      <section className="services-section" id="services-list">
        <div className="container services-layout">

          {/* SIDEBAR */}
          <aside className="services-sidebar">
            <h3>Bidang Layanan</h3>
            <ul>
              {services.map(service => (
                <li key={service.slug}>
                  <Link to={`/layanan/${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* GRID */}
          <div className="services-content">
            <ServiceGrid />
          </div>

        </div>
      </section>

    </main>
  )
}
