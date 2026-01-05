import { useEffect, useRef, useState } from 'react'
import '../styles/team.css'

const TeamSection = ({ name, role, license, email, photo, reverse }) => {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`team-section ${visible ? 'show' : ''} ${reverse ? 'reverse' : ''}`}
    >
      <div className="team-text">
        <h2>{name}</h2>
        <p className="role">{role}</p>

        <div className="meta">
          <p><strong>Izin Penilai</strong><br />{license}</p>
          <p><strong>Email</strong><br />{email}</p>
        </div>
      </div>

      <div className="team-photo">
        <img src={photo} alt={name} />
      </div>
    </section>
  )
}

export default TeamSection
