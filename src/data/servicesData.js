import developmentImg from '../assets/services/development.jpg'
import assetsImg from '../assets/services/assets.jpg'
import projectImg from '../assets/services/project.jpg'
import propertyImg from '../assets/services/property.jpg'
import agribisnisImg from '../assets/services/agribisnis.jpg'
import managepropertyImg from '../assets/services/manageproperty.jpg'
import propertyinvestImg from '../assets/services/propertyinvest.png'
import konsultanuangImg from '../assets/services/konsultanuang.png'

const services = [
  /* =====================================================
     PENILAIAN PROPERTI
  ===================================================== */
  {
    slug: 'penilaian-properti',
    title: 'Penilaian Properti',
    tagline:
      'Estimasi nilai properti secara profesional, independen, dan sesuai standar',

    image: propertyImg,

    detail: {
      heroTitle: 'PENILAIAN PROPERTI',
      heroSubtitle: 'PROPERTY VALUATION / APPRAISAL',

      intro: `Jasa Penilaian Properti adalah layanan jasa estimasi nilai terhadap
      suatu harta kekayaan oleh tenaga ahli yang profesional, kredibel,
      berpengalaman serta memegang teguh independensi. Penilaian properti
      mencakup berbagai sektor usaha, antara lain:`,

      sections: [
        {
          title: 'Ruang Lingkup Penilaian',
          type: 'list',
          items: [
            'Tanah dan Bangunan beserta kelengkapannya serta pengembangan lainnya atas tanah',
            'Instalasi dan peralatan yang dirangkai dalam satu kesatuan dan/atau berdiri sendiri yang digunakan dalam proses produksi',
            'Alat transportasi, alat berat, alat konstruksi, alat laboratorium, alat kesehatan, alat kantor, dan utilitas',
            'Pertanian, perkebunan, peternakan, perikanan, dan kehutanan',
            'Pertambangan',
          ],
        },
        {
          title: 'Tujuan Penilaian Properti',
          type: 'list',
          items: [
            'Memenuhi tuntutan berbagai sektor usaha akan kebutuhan opini nilai properti yang independen untuk berbagai tujuan',
            'Penilaian barang jaminan dalam rangka pendanaan investasi baru maupun untuk perluasan usaha',
            'Penilaian properti untuk keperluan asuransi',
            'Penilaian untuk kepentingan modal dan keperluan jual beli aset',
            'Penilaian untuk tujuan ganti rugi aset',
            'Penilaian untuk keperluan internal manajemen seperti revaluasi, perpajakan, maupun penyusunan laporan tahunan perusahaan (Annual Report)',
            'Penilaian properti untuk keperluan lainnya',
          ],
        },
        {
          title: 'Standar Penilaian',
          content: `Dalam melaksanakan penilaian, KJPP Ayom Saherman & Rekan
          selalu mengacu pada standar yang telah ditetapkan oleh asosiasi
          profesi yaitu Standar Penilaian Indonesia (SPI) dan Kode Etik Penilai
          Indonesia (KEPI).`,
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
    tagline: 'Analisis kelayakan, investasi, dan strategi pengembangan usaha',

    image: developmentImg,

    detail: {
      heroTitle: 'KONSULTASI PENGEMBANGAN',
      heroSubtitle: 'DEVELOPMENT CONSULTANCY',

      intro: `Konsultasi pengembangan merupakan suatu analisa yang diperlukan
      untuk mengetahui keterkaitan antara nilai investasi yang ditanamkan
      dengan tingkat pengembalian suatu investasi. Jasa konsultasi
      pengembangan terdiri dari:`,

      sections: [
        {
          title: 'Studi Kelayakan',
          content: `Studi kelayakan atau evaluasi proyek adalah suatu studi
          (penelitian dan analisis) terhadap rencana atau usulan proyek investasi,
          baik berupa proyek baru maupun usaha lama (rehabilitasi, perluasan,
          dan diversifikasi usaha) untuk mengetahui apakah rencana tersebut
          memberikan manfaat yang lebih besar daripada biaya investasi
          (feasible) atau sebaliknya (no feasible).

          Studi kelayakan mencakup analisa dari berbagai aspek seperti aspek
          hukum dan legal, pasar dan pemasaran, teknis dan produksi, manajemen,
          finansial, serta manfaat ekonomi. Proyeksi dan kesimpulan yang disusun
          menjadi dasar pertimbangan atas keputusan rencana investasi.`,
        },
        {
          title: 'Studi Pemasaran',
          content: `Studi pemasaran dan studi kelayakan rencana usaha berfokus
          pada aspek pasar dan pemasaran yang mencakup pembahasannya lebih
          luas, terdiri dari kondisi dan tren pasar, supply-demand, harga,
          pola distribusi, persaingan usaha, hingga pangsa pasar.

          Hasil studi ini digunakan sebagai dasar pengembangan usaha
          (extension dan diversification product) serta sebagai acuan dalam
          memulai atau melanjutkan suatu rencana usaha.`,
        },
        {
          title: 'Studi Optimalisasi',
          content: `Studi Optimalisasi (Highest and Best Use Study) Studi dilakukan untuk mengetahui produk 
          pengembangan yang terbaik dan optimal atas suatu properti yang dianggap memiliki 
          potensi untuk dikembangkan atau pengembangan atas properti yang ada pada saat 
          sekarang pemanfaatanya belum optimal. Dengan Studi Optimalisasi diharapkan akan 
          diperoleh suatu kesimpulan tentang pemanfaatan yang tertinggi dan terbaik (Highest Best 
          and Best Use Study) akan mencakup kajian terhadap berbagai aspek, antara lain : aspek 
          teknis, aspek legal, aspek keuagan dan aspek pemanfaatan yang paling optimum.`,
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

      intro: `Pengawasan proyek bertujuan untuk memastikan bahwa pelaksanaan
      proyek berjalan sesuai dengan perencanaan, biaya, mutu, dan jadwal
      yang telah ditetapkan.`,

      sections : [
        {
          title: 'Ruang Lingkup Pengawasan',
          type: 'list',
          items: [
            'Pengawasan kemajuan fisik proyek secara berkala dari awal hingga akhir pekerjaan',
            'Monitoring penggunaan dan alokasi dana proyek sesuai dengan rencana dan anggaran (Cost Plan)',
            'Evaluasi kesesuaian pelaksanaan proyek terhadap rencana kerja, jadwal, dan spesifikasi teknis',
            'Identifikasi potensi penyimpangan pelaksanaan proyek serta risiko yang dapat mempengaruhi kelangsungan proyek',
            'Evaluasi realisasi biaya dan progres pekerjaan dibandingkan dengan target yang telah ditetapkan',
          ],
        },
        {
          title: 'Tujuan Pengawasan Proyek',
          type: 'list',
          items: [
            'Memberikan keyakinan kepada pemberi dana atau pemilik proyek bahwa proyek berjalan sesuai rencana',
            'Memastikan penggunaan dana proyek dilakukan secara efektif, efisien, dan tepat sasaran',
            'Mengurangi risiko keterlambatan, pembengkakan biaya, dan kegagalan proyek',
            'Menjadi dasar pengambilan keputusan bagi investor, kreditur, maupun pemilik proyek',
            'Menyediakan laporan independen sebagai alat pengendalian dan evaluasi proyek',
          ],
        },
        {
          title: 'Laporan Pengawasan Proyek',
          content: `
          Laporan pengawasan proyek disusun secara independen dan periodik untuk
          disampaikan kepada pemberi dana atau pemilik proyek. Laporan ini memuat
          informasi mengenai alokasi dan penggunaan dana, realisasi kemajuan proyek
          baik secara fisik maupun biaya, permasalahan yang dihadapi di lapangan,
          serta alternatif solusi dan rekomendasi tindak lanjut.

          Laporan juga mencakup rencana kerja proyek ke depan, termasuk rencana
          penarikan dan penggunaan dana pada periode berikutnya, sehingga dapat
          digunakan sebagai dasar evaluasi dan pengambilan keputusan.
          `,
        }
      ]
    },
  },

  /* =====================================================
     Pengelolaan asset
  ===================================================== */
  {
    slug: 'pengelolaan-aset',
    title: 'Pengelolaan Asset',
    tagline: 'Jasa Pengelolaan Aset (Total Asset Management)',

    image: assetsImg,

    detail: {
      heroTitle: 'PENGELOLAAN ASSET',
      heroSubtitle: 'TOTAL ASSET MANAGEMENT',

      intro: `Jasa Pengelolaan Aset (Total Asset Management) mencakup layanan terpadu dalam pengelolaan, 
      pemanfaatan, dan optimalisasi aset untuk meningkatkan nilai dan kinerja aset secara berkelanjutan.`,
          sections : [
            {
              title: 'Ruang Lingkup Pengelolaan Aset',
              type: 'list',
              items: [
                'Identifikasi dan inventarisasi aset secara menyeluruh untuk mengetahui jumlah, jenis, lokasi, dan spesifikasi aset secara detail',
                'Pendataan aset tetap dan aset tidak bergerak yang mencakup ukuran, bentuk fisik, status legalitas, serta kondisi eksisting aset',
                'Klasifikasi aset berdasarkan fungsi operasional dan non-operasional sebagai dasar pengelolaan dan pengambilan keputusan',
                'Penyusunan database dan sistem informasi manajemen aset yang terintegrasi',
              ],
            },
            {
              title: 'Manajemen dan Pemanfaatan Aset',
              content: `
              Manajemen aset dilakukan dengan memanfaatkan hasil identifikasi dan
              inventarisasi untuk mengembangkan sistem pengelolaan aset yang optimal.
              Pengelolaan ini mencakup pemanfaatan aset untuk mendukung kegiatan usaha,
              peningkatan nilai aset, serta optimalisasi kinerja aset sesuai dengan
              kebutuhan perusahaan atau institusi.

              Pemanfaatan aset dapat dilakukan melalui berbagai skema, antara lain
              pelepasan aset (asset disposal), pendanaan dengan jaminan aset (collateral),
              kerja sama strategis (strategic partner), kerja sama usaha (joint venture),
              maupun skema kerja sama lainnya seperti BOT, BTO, KSO, dan bentuk kerja sama
              sejenis.
              `,
            },
            {
              title: 'Optimalisasi Aset',
              content: `
              Optimalisasi aset dilakukan melalui analisis mendalam untuk mengidentifikasi
              tingkat pemanfaatan aset, baik aset operasional maupun aset non-operasional.
              Untuk aset operasional, dilakukan kajian untuk menilai apakah aset telah
              dimanfaatkan secara optimal dalam mendukung kegiatan usaha.

              Apabila pemanfaatan aset belum optimal, maka disusun studi optimalisasi
              berdasarkan tolok ukur kebutuhan usaha dan efisiensi operasional. Sedangkan
              untuk aset non-operasional, analisis difokuskan pada pemanfaatan kondisi aset
              eksisting, khususnya dari segi penggunaan tanah, potensi pengembangan, dan
              fungsi bangunan yang dinilai dari aspek ekonomi dan kelayakan usaha.
              `,
            },
            {
              title: 'Manajemen Properti',
              content: `
              Jasa manajemen properti merupakan layanan operasional dan pengelolaan properti
              agar aset dapat berdaya guna dan memberikan hasil yang optimal. Pengelolaan
              dilakukan melalui program pemeliharaan dan perbaikan yang terencana sehingga
              properti memiliki nilai manfaat dan nilai ekonomi yang tinggi.

              Properti yang dikelola dapat berupa gedung perkantoran, gedung komersial,
              kawasan usaha, maupun properti lainnya sesuai dengan kebutuhan pemilik aset.
              `,
            },
          ]
    },
  },
  {
    slug: 'konsultan-agribisnis',
    title: 'Konsultan Agribisnis',
    tagline: 'Analisis dan pendampingan strategis untuk pengembangan agribisnis berkelanjutan',

    image: agribisnisImg,

    detail: {
      heroTitle: 'KONSULTAN AGRIBISNIS',
      heroSubtitle: 'AGROBUSINESS CONSULTANCY',

      intro: `Jasa Konsultan Agribisnis menyediakan layanan analisis dan pendampingan untuk pengembangan 
      usaha agribisnis secara berkelanjutan melalui pendekatan teknis, ekonomi, dan lingkungan.`,
        sections : [
          {
            title: 'Ruang Lingkup Konsultasi Agribisnis',
            type: 'list',
            items: [
              'Sensus tanaman melalui inspeksi lapangan secara langsung terhadap objek atau komoditas perkebunan dan pertanian',
              'Analisis kinerja tanaman yang mencakup jenis tanaman, jumlah dan luas tanaman, umur tanaman, kualitas tanaman, serta permasalahan yang dihadapi',
              'Evaluasi kelayakan lahan untuk pengembangan dan pembangunan usaha agribisnis',
              'Identifikasi potensi dan kendala pengembangan usaha perkebunan, hortikultura, tanaman pangan, peternakan, dan perikanan',
            ],
          },
          {
            title: 'Sensus Tanaman',
            content: `
            Sensus tanaman merupakan kegiatan inspeksi lapangan yang dilakukan melalui
            pengamatan langsung terhadap objek atau komoditas perkebunan dan pertanian.
            Kegiatan ini bertujuan untuk mengetahui performa dan kondisi aktual tanaman
            secara menyeluruh.

            Lingkup sensus tanaman meliputi identifikasi jenis tanaman yang tertanam,
            jumlah dan luas tanaman, umur tanaman, kualitas pertumbuhan, serta
            permasalahan teknis yang mempengaruhi produktivitas tanaman.
            `,
          },
          {
            title: 'Studi Evaluasi Kelayakan Lahan',
            content: `
            Studi evaluasi kelayakan lahan merupakan kajian terhadap kesesuaian suatu
            bidang lahan untuk pengembangan atau pembangunan usaha agribisnis, seperti
            perkebunan, hortikultura, tanaman pangan, peternakan, perikanan, dan usaha
            pertanian lainnya.

            Evaluasi dilakukan dengan mempertimbangkan berbagai aspek, antara lain
            kesesuaian lahan dan agroklimatologi, kondisi tanah, ketersediaan air,
            aksesibilitas, serta kondisi sosial dan ekonomi setempat. Hasil studi
            dituangkan dalam bentuk rekomendasi pemanfaatan lahan, peningkatan
            kesuburan tanah, tindakan kultur teknis yang diperlukan, serta analisis
            potensi dan risiko usaha agribisnis.
            `,
          }
        ]
    },
  },
  {
    slug: 'manajemen-properti',
    title: 'Management Properti',
    tagline: 'Pengelolaan properti untuk meningkatkan nilai dan kinerja aset secara berkelanjutan',

    image: managepropertyImg,

    detail: {
      heroTitle: 'MANAGEMENT PROPERTY',
      heroSubtitle: 'TOTAL ASSET MANAGEMENT',

      intro: `Manajemen Properti merupakan layanan profesional dalam pengelolaan
      dan pengoperasian properti guna memastikan keberlangsungan fungsi, keamanan,
      dan peningkatan nilai aset sesuai dengan tujuan pemilik properti.`,
        sections : [
          {
            title: 'Ruang Lingkup Manajemen Properti',
            type: 'list',
            items: [
              'Pengelolaan operasional properti agar dapat berfungsi sesuai peruntukannya secara optimal',
              'Penyusunan dan pelaksanaan program pemeliharaan serta perbaikan properti secara terencana',
              'Pengawasan kondisi fisik bangunan untuk menjaga keamanan, kenyamanan, dan nilai aset',
              'Pengelolaan fasilitas gedung termasuk utilitas, kebersihan, dan sistem pendukung lainnya',
              'Koordinasi dengan penyedia jasa dan pihak terkait dalam operasional properti',
            ],
          },
          {
            title: 'Program Pemeliharaan dan Perbaikan',
            content: `
            Program pemeliharaan dan perbaikan disusun secara sistematis untuk menjaga
            kondisi properti tetap layak fungsi dan bernilai ekonomis. Program ini
            mencakup pemeliharaan rutin, perawatan berkala, serta perbaikan terhadap
            kerusakan bangunan dan fasilitas pendukung.

            Pelaksanaan program dilakukan dengan mempertimbangkan standar teknis,
            efisiensi biaya, serta keberlanjutan pemanfaatan properti dalam jangka
            panjang.
            `,
          },
          {
            title: 'Pengelolaan Gedung dan Fasilitas',
            content: `
            Pengelolaan gedung dan fasilitas bertujuan untuk memastikan seluruh
            infrastruktur pendukung berfungsi dengan baik. Layanan ini mencakup
            pengelolaan utilitas gedung, sistem keamanan, kebersihan, serta kenyamanan
            lingkungan properti.

            Properti yang dikelola dapat berupa gedung perkantoran, gedung komersial,
            maupun jenis properti lainnya sesuai kebutuhan pemilik aset.
            `,
          },
          {
            title: 'Optimalisasi Nilai Properti',
            content: `
            Optimalisasi nilai properti dilakukan melalui pengelolaan yang efektif dan
            efisien sehingga properti mampu memberikan manfaat maksimal serta nilai
            ekonomi yang berkelanjutan.

            Analisis terhadap kinerja properti dilakukan secara berkala untuk
            mengidentifikasi peluang peningkatan nilai, baik melalui perbaikan fisik,
            peningkatan fungsi, maupun pengelolaan operasional yang lebih optimal.
            `,
          }
        ]
    },
  },
  {
    slug: 'investasi-properti',
    title: 'Investasi Properti',
    tagline: 'Pendampingan strategis untuk perencanaan dan realisasi investasi properti',

    image: propertyinvestImg,

    detail: {
      heroTitle: 'INVESTASI PROPERTI',
      heroSubtitle: 'PROPERTY INVESTMENT',

      intro: `Jasa Investasi Properti merupakan layanan pendampingan profesional
      dalam perencanaan, pengembangan, dan realisasi investasi properti. Layanan ini
      bertujuan untuk membantu pengguna jasa dalam mengambil keputusan investasi
      yang tepat, optimal, dan berkelanjutan sesuai dengan kebutuhan dan tujuan usaha.`,
        sections : [
          {
            title: 'Ruang Lingkup Investasi Properti',
            type: 'list',
            items: [
              'Pendampingan perencanaan dan pengembangan investasi properti',
              'Penyusunan strategi investasi sesuai kebutuhan dan tujuan usaha',
              'Analisis peluang dan risiko investasi properti',
              'Pendampingan transaksi dan kerja sama investasi properti',
            ],
          },
          {
            title: 'Agen Investasi (Investment Arrangement)',
            content: `
            Layanan agen investasi mencakup pemberian saran dan konsultasi terhadap
            rencana investasi properti, baik untuk kebutuhan pengembangan usaha maupun
            investasi jangka pendek dan jangka panjang.

            Kebutuhan investasi dapat meliputi penjualan aset, pembelian aset,
            kerja sama pengembangan usaha, hingga pemenuhan kebutuhan modal kerja.
            Pendampingan dilakukan untuk memastikan rencana investasi berjalan efektif
            dan sesuai dengan tujuan investor.
            `,
          },
          {
            title: 'Pelepasan Aset (Asset Disposal Advisory)',
            content: `
            Layanan pelepasan aset bertujuan untuk memberikan advis dan pendampingan
            kepada pengguna jasa dalam rangka memperoleh hasil yang maksimal dari
            pelepasan aset properti.

            Pekerjaan mencakup persiapan dokumen, penyusunan metodologi, penentuan teknik,
            serta perumusan strategi pelepasan aset yang tepat agar proses transaksi
            berjalan efektif, transparan, dan optimal.
            `,
          }
        ]
    },
  },
  {
    slug: 'konsultasi-keuangan',
    title: 'Konsultasi Keuangan',
    tagline: 'Solusi profesional untuk pengelolaan keuangan perusahaan.',

    image: konsultanuangImg,

    detail: {
      heroTitle: 'KONSULTASI KEUANGAN',
      heroSubtitle: 'FINANCIAL CONSULTANCY',

      intro: `Jasa Konsultasi Keuangan merupakan layanan pendampingan profesional
      dalam pengelolaan, analisis, dan pengambilan keputusan keuangan perusahaan.
      Layanan ini diberikan secara independen serta didukung kerja sama dengan
      Kantor Akuntan Publik (KAP) untuk memastikan ketepatan, kepatuhan, dan
      akuntabilitas laporan keuangan.`,
        sections : [
          {
            title: 'Ruang Lingkup Konsultasi Keuangan',
            type: 'list',
            items: [
              'Pendampingan pengelolaan dan perencanaan keuangan perusahaan',
              'Analisis kondisi dan kinerja keuangan sebagai dasar pengambilan keputusan',
              'Penyusunan dan evaluasi strategi keuangan jangka pendek dan jangka panjang',
              'Koordinasi dengan Kantor Akuntan Publik (KAP) dalam pelaksanaan jasa keuangan',
            ],
          },
          {
            title: 'Pemeriksaan Keuangan (General Audit)',
            content: `
            Pemeriksaan keuangan merupakan layanan audit umum yang bertujuan untuk
            menilai kewajaran dan keandalan laporan keuangan perusahaan. Proses audit
            dilakukan sesuai dengan standar akuntansi dan ketentuan yang berlaku serta
            dilaksanakan bekerja sama dengan Kantor Akuntan Publik (KAP).

            Hasil pemeriksaan keuangan memberikan gambaran kondisi keuangan perusahaan
            secara objektif dan independen.
            `,
          },
          {
            title: 'Penyusunan Laporan Keuangan (Home Statement)',
            content: `
            Layanan ini mencakup penyusunan laporan keuangan perusahaan yang disusun
            secara sistematis dan akurat sesuai dengan standar akuntansi yang berlaku.
            Laporan keuangan digunakan sebagai alat pengendalian internal, evaluasi
            kinerja, serta dasar dalam pengambilan keputusan manajemen.
            `,
          }
        ]
    },
  },
]

export default services
