// src/components/Footer.jsx
import '../styles/footer.css'

import logo from '../assets/logo.png'
import kemenkeu from '../assets/partners/kemenkeu.png'
import ojk from '../assets/partners/ojk.png'
import mappi from '../assets/partners/mappi.png'
import appraisal from '../assets/partners/appraisal.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">
          <img src={logo} alt="KJPP Ayon Suherman & Rekan" />
        </div>

        {/* RIGHT */}
        <div className="footer-partners">
          <a
            href="https://www.kemenkeu.go.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={kemenkeu} alt="Kementerian Keuangan RI" />
          </a>

          <a
            href="https://www.ojk.go.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ojk} alt="Otoritas Jasa Keuangan" />
          </a>

          <a
            href="https://mappi.or.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mappi} alt="MAPPI" />
          </a>

          <a
            href="https://www.appraisal-institute.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={appraisal} alt="Appraisal Institute" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 KJPP ASR. All rights reserved.
      </div>
    </footer>
  )
}
