import { Link } from 'react-router-dom'
import '../styles/about.css'

const About = () => {
  return (
    <div className="about-page">

      {/* =============================
          PAGE INTRO / HERO
      ============================== */}
      <section className="page-intro">
        <div className="container">
          <h1>Tentang KJPP Ayon Suherman & Rekan</h1>
          <p>
            Kantor Jasa Penilai Publik yang berkomitmen pada independensi,
            kepatuhan standar, dan profesionalisme dalam setiap penugasan.
          </p>
        </div>
      </section>

      {/* =============================
          PROFIL PERUSAHAAN
      ============================== */}
      <section className="about-section">
        <div className="container">
          <h2>Profil Perusahaan</h2>
          <p>
            KJPP Ayon Suherman & Rekan adalah Kantor Jasa Penilai Publik
            yang memberikan layanan penilaian independen dan konsultasi
            profesional sesuai dengan ketentuan peraturan perundang-undangan
            serta kode etik penilai yang berlaku.
          </p>

          <div className="principles">
            <div className="principle-item">
              <h3>Independensi</h3>
              <p>
                Setiap penilaian dilakukan secara objektif tanpa adanya
                benturan kepentingan.
              </p>
            </div>

            <div className="principle-item">
              <h3>Kepatuhan Standar</h3>
              <p>
                Mengacu pada Standar Penilaian Indonesia (SPI) serta
                kode etik profesi yang berlaku.
              </p>
            </div>

            <div className="principle-item">
              <h3>Profesionalisme</h3>
              <p>
                Didukung oleh penilai publik berizin dan berpengalaman
                di berbagai sektor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =============================
          STATS / KREDIBILITAS
      ============================== */}
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

      {/* =============================
          DATA PERUSAHAAN
      ============================== */}
      <section className="about-section">
        <div className="container">
          <h2>Data Perusahaan</h2>

          <dl className="data-grid">
            <dt>Akta Pendirian</dt>
            <dd>Akta No. 1, Tgl 2 Maret 2009, Notaris Ahmad Ali Nurdin, SH</dd>

            <dt>Akta Perubahan Terakhir</dt>
            <dd>Akta No. 2, Tgl 25 Mei 2023, Notaris Kasmita Syafni, S.H.</dd>

            <dt>Domisili</dt>
            <dd>Rukan Pejaten, Jakarta Selatan</dd>

            <dt>NPWP</dt>
            <dd>02.624.255.2-061.000</dd>
          </dl>
        </div>
      </section>

      {/* =============================
          IZIN & PERIZINAN
      ============================== */}
      <section className="about-section alt">
        <div className="container">
          <h2>Izin & Perizinan</h2>

          <dl className="data-grid">
            <dt>Izin Usaha KJPP</dt>
            <dd>Kep. Menteri Keuangan No. 375/KM.1/2009</dd>

            <dt>Nomor Izin KJPP</dt>
            <dd>2.09.0028</dd>
          </dl>
        </div>
      </section>

      {/* =============================
          TIM PENILAI
      ============================== */}
      <section className="about-section">
        <div className="container">
          <h2>Tim Penilai Kami</h2>
          <p>
            KJPP Ayon Suherman & Rekan didukung oleh penilai publik
            berizin dengan kompetensi sesuai ketentuan yang berlaku.
          </p>

          <div className="team-cta">
            <Link to="/tim-kami" className="link-primary">
              Lihat Tim Kami →
            </Link>
          </div>
        </div>
      </section>

      {/* =============================
          KEANGGOTAAN & LISENSI
      ============================== */}
      <section className="about-section alt">
        <div className="container">
          <h2>Keanggotaan & Lisensi</h2>

          <dl className="data-grid">
            <dt>STTD-BAPEPAM</dt>
            <dd>No. 60/BL/STTD-P/A/2011</dd>

            <dt>Forum KJPP</dt>
            <dd>No. 10090033</dd>

            <dt>Lisensi Penilai Pertanahan</dt>
            <dd>Keputusan Kepala BPN-RI</dd>
          </dl>
        </div>
      </section>

    </div>
  )
}

export default About
