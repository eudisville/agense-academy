import React from 'react'
import './styles/nav.css';
import Logo from './assets/3.png';

function Nav() {
  return (
    <div className='nav'>
      <nav>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="links">
            <a href="/">Accueil</a>
            <a href="/courses">Nos Formations</a>
            <a href="/team">Notre Equipe</a>
            <a href="/actus">Actus</a>
        </div>
        <div className="button">
            <h4>Contactez-nous</h4>
        </div>
      </nav>
    </div>
  )
}

export default Nav
