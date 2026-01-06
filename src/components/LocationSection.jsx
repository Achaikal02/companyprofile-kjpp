// src/components/LocationSection.jsx
import '../styles/location.css'

export default function LocationSection() {
  return (
    <section className="location-section">
      <div className="container location-grid">
        
        {/* INFO */}
        <div className="location-info">
          <h2>Kantor Pusat</h2>
          <p>
            KJPP Ayon Suherman & Rekan berlokasi di Jakarta Selatan dan siap
            melayani kebutuhan penilaian serta konsultasi profesional Anda.
          </p>

          <ul className="location-list">
            <li>
              <span className="label">Alamat</span>
              <span>
                Rukan Pejaten, Jalan Pejaten Raya Kav. 2  
                No. 11, Pejaten Barat, Jakarta Selatan 12510
              </span>
            </li>
            <li>
              <span className="label">Telepon</span>
              <span> 021-79195004 - 79194973</span>
            </li>
            <li>
              <span className="label">Email</span>
              <span>admin.jkt@kjppasr.co.id</span>
            </li>
          </ul>

          <div className="location-actions">
            <a
              href="https://maps.app.goo.gl/hmkhhjqb1ByEsqeU6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Lihat di Google Maps
            </a>
          </div>
        </div>

        {/* MAP */}
        <div className="location-map">
          <iframe
            title="Lokasi KJPP ASR"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8838503220873!2d106.8303143!3d-6.278997700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f217fa785cb7%3A0x77af45e04351e1d0!2sKJPP%20Ayon%20Suherman%20%26%20Rekan!5e0!3m2!1sen!2sid!4v1767537690881!5m2!1sen!2sid"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
