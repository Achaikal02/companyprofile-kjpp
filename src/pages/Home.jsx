import Hero from '../components/Hero'
import Section from '../components/Section'
import ServiceGrid from '../components/ServiceGrid'
import LocationSection from '../components/LocationSection'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import ServicesShowcase from '../components/ServicesShowcase'
import aboutHero from '../assets/team/kjppasr.png'

const Home = () => {
  return (
    <>
      <Hero />
      <section className="about-section alt">
        <div className="container">
          <div className="stats">
            <div className="stat-item">
              <strong>20+ Tahun</strong>
              <span>Pengalaman</span>
            </div>
            <div className="stat-item">
              <strong>Ribuan</strong>
              <span>Objek Dinilai</span>
            </div>
            <div className="stat-item">
              <strong>Nasional</strong>
              <span>Cakupan Layanan</span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tentang-kami"
        className="home-about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="home-about-overlay" />

        <div className="home-about-content">
          <span className="home-about-eyebrow">
            Sekilas Perusahaan
          </span>

          <h1>Tentang Kami</h1>

          <p>
          KJPP Ayon Suherman & Rekan memiliki pengalaman dalam bidang penilaian lebih dari 20 tahun, baik sebagai pelaksana

          maupun Team Leader, dalam penilaian berbagai jenis aset dengan tingkat kesulitan yang rendah sampai tingkat

          kesulitan yang cukup rumit, menjadikan mereka tenaga ahli yang kompeten dalam bidang penilaian.
          </p>

          <div className="home-about-actions">
            <Link to="/tentang-kami" className="btn-outline">
              Selengkapnya
            </Link>

            <Link to="/tim-kami" className="btn-outline">
              Tim Kami
            </Link>
          </div>
        </div>
      </section>

      <ServicesShowcase />
      <LocationSection />
    </>
  )
}

export default Home
