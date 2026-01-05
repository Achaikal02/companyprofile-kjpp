// src/pages/Contact.jsx
import '../styles/contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <h1>Kontak Kami</h1>
          <p>
            Hubungi KJPP Ayon Suherman & Rekan untuk kebutuhan jasa penilaian
            dan konsultasi profesional.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="contact-section">
        <div className="container contact-grid">
          {/* INFO */}
          <div className="contact-card">
            <h3>Informasi Kantor</h3>

            <div className="contact-item">
              <span className="label">Alamat</span>
              <p>
                Rukan Pejaten, Jalan Pejaten Raya Kav. 2 No. 11<br />
                Pejaten Barat, Jakarta Selatan 12510
              </p>
            </div>

            <div className="contact-item">
              <span className="label">Telepon</span>
              <p>021-79195004 / 79194973</p>
            </div>

            <div className="contact-item">
              <span className="label">Email</span>
              <p>
                <a href="mailto:info@kjppasr.co.id">
                  info@kjppasr.co.id
                </a>
              </p>
            </div>

            <div className="contact-actions">
              <a
                href="mailto:info@kjppasr.co.id"
                className="btn-primary"
              >
                Kirim Email
              </a>

              <a
                href="https://maps.google.com/?q=KJPP+Ayon+Suherman+%26+Rekan"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Lihat di Google Maps
              </a>
            </div>
          </div>

          {/* MAP */}
          <div className="map-card">
            <iframe
              title="Lokasi KJPP Ayon Suherman & Rekan"
              src="https://www.google.com/maps?q=KJPP%20Ayon%20Suherman%20%26%20Rekan&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
