import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Team from '../components/Team'
import './styles/teampage.css';
import Founder from './assets/dom.png';
import Mouna from './assets/hello.png';
import B from './assets/steve.png';

function TeamPage() {
  return (
    <div>
      <TopBar />
      <Nav />
      <section className="teams">
        <div className="courses-container">
          <h1>Notre Equipe</h1>
          <p>Notre équipe de professionnels expérimentés est dédiée à vous accompagner dans votre parcours académique et professionnel. Chacun de nos membres apporte son expertise pour vous offrir une formation de qualité et un accompagnement personnalisé.</p>

          <div className="team-cards">
            <Team image={Founder} name="Marie Dominique BEUGRE" role="Executive Manager" />
            <Team image={Mouna} name="Mouna Yeboue" role="Responsable pédagogique et Projets" />
            <Team image={B} name="Junior Bole" role="Chargé des Opérations et Logistique" />
          </div>
          
        </div>
      </section>

      <section className='join'>
        <div className="join-text">
          <h1>Rejoignez notre équipe</h1>
          <p>Vous êtes passionné par l'éducation et le développement des jeunes talents ? 
           <br />Nous sommes toujours à la recherche de personnes motivées pour rejoindre notre équipe. 
          </p>

          <Link to="mailto:agense.academy@gmail.com" target='_blank'>
            <button>Nous contacter</button>
          </Link>
          
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TeamPage
