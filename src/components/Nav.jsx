import React, { useState } from 'react'
import './styles/nav.css';
import Logo from './assets/3.png';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='nav'>
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div className={`links ${menuOpen ? 'open' : ''}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>Accueil</a>
          <a href="/courses" onClick={() => setMenuOpen(false)}>Nos Formations</a>
          <a href="/team" onClick={() => setMenuOpen(false)}>Notre Equipe</a>
          <a href="/actus" onClick={() => setMenuOpen(false)}>Actus</a>
        </div>

        <div className="button desktop-only">
          <h4>Contactez-nous</h4>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  )
}

export default Nav