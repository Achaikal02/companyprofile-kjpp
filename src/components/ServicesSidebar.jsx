import { Link, useParams } from 'react-router-dom'
import { servicesData } from '../data/servicesData'

const ServicesSidebar = () => {
  const { slug } = useParams()

  return (
    <aside className="services-sidebar">
      {servicesData.map(service => (
        <Link
          key={service.slug}
          to={`/layanan/${service.slug}`}
          className={slug === service.slug ? 'active' : ''}
        >
          {service.title}
        </Link>
      ))}
    </aside>
  )
}

export default ServicesSidebar
