import '../styles/hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero-video">

      {/* VIDEO BACKGROUND */}
      <video
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/hero-building.jpg"
      >
        <source src="/media/hero-building.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="hero-overlay" />

      {/* CONTENT */}
      <div className="container hero-content">
        <h1>Kantor Jasa Penilai Publik Terpercaya</h1>

        <p className="hero-sub">
          Menyediakan layanan penilaian dan konsultasi profesional
          dengan integritas, independensi, dan kepatuhan standar nasional.
        </p>

        <ul className="hero-points">
          <li> Berizin Resmi Kementerian Keuangan RI</li>
          <li> Pengalaman Lebih dari 20 Tahun</li>
          <li> Cakupan Layanan Nasional</li>
        </ul>

        <div className="hero-actions">
          <Link to="/kontak" className="hero-btn primary">
            Hubungi Kami
          </Link>
          <a href="#tentang-kami" className="hero-btn secondary">
            Tentang Kami
          </a>
        </div>

        <div className="hero-trust">
          Berizin & Diawasi oleh Kementerian Keuangan RI • Anggota MAPPI
        </div>
      </div>

    </section>
  )
}

export default Hero
