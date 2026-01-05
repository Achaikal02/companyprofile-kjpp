// src/components/ServiceShowcaseCard.jsx
import { Link } from 'react-router-dom'

export default function ServiceShowcaseCard({ service }) {
  return (
    <Link
      to={`/layanan/${service.slug}`}
      className="service-showcase-card"
      style={{ backgroundImage: `url(${service.image})` }}
    >
      <div className="service-showcase-overlay">
        <h4>{service.title}</h4>
        <p>{service.tagline}</p>
      </div>
    </Link>
  )
}
