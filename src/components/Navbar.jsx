import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import logo from '../assets/logo.png' // simpan logo di src/assets/

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <img src={logo} alt="KJPP ASR" />
        </div>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tentang-kami">Tentang Kami</NavLink>
          <NavLink to="/tim-kami">Tim Kami</NavLink>
          <NavLink to="/layanan">Layanan</NavLink>
          <NavLink to="/berita">Berita</NavLink>
          <NavLink to="/kontak">Kontak</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
