import developmentImg from '../assets/services/development.jpg'
import itImg from '../assets/services/it.jpg'
import projectImg from '../assets/services/project.jpg'
import propertyImg from '../assets/services/property.jpg'

const services = [
  /* =====================================================
     PENILAIAN PROPERTI
  ===================================================== */
  {
    slug: 'penilaian-properti',
    title: 'Penilaian Properti',
    tagline:
      'Estimasi nilai properti secara profesional dan independen sesuai SPI',
    image: propertyImg,

    detail: {
      heroTitle: 'PENILAIAN PROPERTI',
      heroSubtitle: 'PROPERTY VALUATION',

      intro: `
        Jasa Penilaian Properti adalah layanan jasa estimasi nilai terhadap
        suatu harta kekayaan oleh tenaga ahli yang profesional, kredibel,
        berpengalaman, serta memegang teguh independensi.
      `,

      sections: [
        {
          title: 'Ruang Lingkup Penilaian',
          type: 'list',
          items: [
            'Tanah dan bangunan beserta kelengkapannya',
            'Instalasi dan peralatan produksi',
            'Alat transportasi dan alat berat',
            'Pertanian, perkebunan, peternakan, dan perikanan',
            'Pertambangan',
          ],
        },
      ],
    },
  },

  /* =====================================================
     KONSULTASI PENGEMBANGAN
  ===================================================== */
  {
    slug: 'konsultasi-pengembangan',
    title: 'Konsultasi Pengembangan',
    tagline: 'Analisis kelayakan dan investasi',
    image: developmentImg,

    detail: {
      heroTitle: 'KONSULTASI PENGEMBANGAN',
      heroSubtitle: 'DEVELOPMENT CONSULTANCY',

      intro: `
        Konsultasi pengembangan merupakan suatu analisa yang diperlukan
        untuk mengetahui keterkaitan antara nilai investasi yang ditanamkan
        dengan tingkat pengembalian suatu investasi.
      `,

      sections: [
        {
          title: 'Studi Kelayakan',
          content: `
            Studi kelayakan atau evaluasi proyek adalah suatu studi
            (penelitian dan analisis) terhadap rencana atau usulan proyek investasi.
          `,
        },
        {
          title: 'Studi Pemasaran',
          content: `
            Studi pemasaran mencakup analisa permintaan dan penawaran,
            tren harga, pola distribusi, dan persaingan usaha.
          `,
        },
      ],
    },
  },

  /* =====================================================
     PENGAWASAN PROYEK
  ===================================================== */
  {
    slug: 'pengawasan-proyek',
    title: 'Pengawasan Proyek',
    tagline: 'Monitoring dan evaluasi pelaksanaan proyek',
    image: projectImg,

    detail: {
      heroTitle: 'PENGAWASAN PROYEK',
      heroSubtitle: 'PROJECT MONITORING',

      intro: `
        Pengawasan proyek bertujuan untuk memastikan bahwa pelaksanaan
        proyek berjalan sesuai perencanaan, biaya, dan jadwal.
      `,
    },
  },

  /* =====================================================
     TEKNOLOGI INFORMASI
  ===================================================== */
  {
    slug: 'teknologi-informasi',
    title: 'Teknologi Informasi',
    tagline: 'Pengembangan sistem informasi dan digitalisasi',
    image: itImg,

    detail: {
      heroTitle: 'TEKNOLOGI INFORMASI',
      heroSubtitle: 'INFORMATION TECHNOLOGY',

      intro: `
        Layanan teknologi informasi difokuskan pada pengembangan sistem
        informasi manajemen dan digitalisasi proses bisnis.
      `,
    },
  },
]

export default services
