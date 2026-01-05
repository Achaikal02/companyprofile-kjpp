import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* Layout */
import Navbar from './components/Navbar'
import Footer from './components/Footer'

/* Pages */
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import News from './pages/News'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/tentang-kami" element={<About />} />

        {/* TEAM */}
        <Route path="/tim-kami" element={<Team />} />

        {/* SERVICES */}
        <Route path="/layanan" element={<Services />} />
        <Route path="/layanan/:slug" element={<ServiceDetail />} />

        {/* NEWS */}
        <Route path="/berita" element={<News />} />

        {/* CONTACT */}
        <Route path="/kontak" element={<Contact />} />

        {/* FALLBACK (OPTIONAL) */}
        <Route
          path="*"
          element={
            <div style={{ padding: '120px 24px', textAlign: 'center' }}>
              <h1>404</h1>
              <p>Halaman tidak ditemukan</p>
            </div>
          }
        />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
