import { Link } from 'react-router-dom'
import services from '../data/servicesData'
import '../styles/services.css'

export default function ServiceGrid({ limit }) {
  const displayedServices = limit
    ? services.slice(0, limit)
    : services

  return (
    <div className="services-grid">
      {displayedServices.map(service => (
        <Link
          key={service.slug}
          to={`/layanan/${service.slug}`}
          className="service-card service-card--text"
        >
          <h3 className="service-title">
            {service.title}
          </h3>

          <p className="service-desc">
            {service.tagline}
          </p>

          <span className="service-link">
            Lihat Detail →
          </span>
        </Link>
      ))}
    </div>
  )
}
