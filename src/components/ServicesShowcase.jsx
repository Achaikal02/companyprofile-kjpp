// src/components/ServicesShowcase.jsx
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import services from '../data/servicesData'
import ServiceShowcaseCard from './ServiceShowcaseCard'
import '../styles/services-showcase.css'

export default function ServicesShowcase() {
  const sliderRef = useRef(null)

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -360, behavior: 'smooth' })
  }

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 360, behavior: 'smooth' })
  }

  return (
    <section className="services-showcase">
      <div className="services-showcase-inner">
        
        {/* LEFT TEXT */}
        <div className="services-showcase-text">
          <h2>Layanan Kami</h2>
          <p>
            Portofolio layanan profesional KJPP Ayon Suherman & Rekan
            yang dilaksanakan secara independen dan sesuai standar.
          </p>

          <div className="services-showcase-nav">
            <button onClick={scrollLeft} aria-label="Previous">←</button>
            <button onClick={scrollRight} aria-label="Next">→</button>
          </div>

          <Link to="/layanan" className="services-showcase-link">
            Lihat Semua Layanan →
          </Link>
        </div>

        {/* RIGHT SLIDER */}
        <div className="services-showcase-slider" ref={sliderRef}>
          {services.map(service => (
            <ServiceShowcaseCard key={service.slug} service={service} />
          ))}
        </div>

      </div>
    </section>
  )
}
