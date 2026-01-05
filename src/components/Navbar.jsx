import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../styles/navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        {/* Brand */}
        <div className="brand">
          <img src={logo} alt="KJPP ASR" />
        </div>

        {/* Navigation */}
        <nav className={menuOpen ? 'open' : ''}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/tentang-kami" onClick={closeMenu}>Tentang Kami</NavLink>
          <NavLink to="/tim-kami" onClick={closeMenu}>Tim Kami</NavLink>
          <NavLink to="/layanan" onClick={closeMenu}>Layanan</NavLink>
          <NavLink to="/berita" onClick={closeMenu}>Berita</NavLink>
          <NavLink to="/kontak" onClick={closeMenu}>Kontak</NavLink>
        </nav>

        {/* Hamburger */}
        <button
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
