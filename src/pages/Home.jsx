import React from 'react' 
import TopBar from '../components/TopBar';
import Nav from '../components/Nav';
import Card from '../components/Card';
import './styles/home.css';
import img1 from './assets/1.png';
import Founder from './assets/founder.png';
import ClientCard from '../components/ClientCard';
import Footer from '../components/Footer';
import IA from './assets/ia.jpg';
import Com from './assets/com.jpg';
import Edu from './assets/projet.jpg';
import Entre from './assets/business.jpg';
import Lead from './assets/leader.jpg';

function Home() {
  return (
    <div>
      <TopBar />
      <Nav />
      
      <header>

      </header>

      <section className='about'>
        <div className="text">
          <h1>A Propos de <br />l'Agense Academy</h1>
          <p>L’Agense Academy est née de la conviction que le véritable changement commence par la formation et s’adresse principalement aux jeunes lycéens, étudiants, jeunes professionnels, porteurs de projets et entrepreneurs, pour les préparer à devenir compétents, confiants et conscients de leur potentiel. 
            <br />Reposant sur le principe de jeunes qui forment des jeunes, nos formations sont animées par des formateurs jeunes, expérimentés et engagés, capables de comprendre les réalités et les ambitions de leur génération. 
            <br />Inspirée de modèles internationaux alliant pratique, créativité et leadership, L’Agense Academy mise sur des apprentissages concrets, interactifs et orientés vers l’action, guidés par les valeurs d’excellence, d’innovation, d’engagement et d’impact, afin de développer des compétences utiles et applicables, créer un réseau de talents connectés et accompagner les jeunes dans la construction de l’avenir qu’ils méritent.</p>

          <h4>
            Télécharger la brochure
          </h4>
        </div>

        <div className="image">
          <img src={img1} alt="" />
        </div>
      </section>

      <section className='formations'>
        <div className="formation-text">
          <div className="formation-top">
            <h1>Les Domaines de Formations</h1>
            <a href="/courses">Nos Formations</a>
          </div>

          <p>L’Agense Academy propose cinq domaines de formation clés, pensés pour être transversaux et complémentaires. Chaque programme est conçu pour développer des compétences essentielles dans des secteurs variés: communication, leadership, entrepreneuriat, gestion de projet, éducation financière et culture digitale afin que les jeunes puissent appliquer leurs apprentissages de manière concrète et globale, quel que soit leur parcours ou leur projet.</p>
        </div>

        <div className="cards">
          <Card backgroundImage={Com} title="Communication & Expression" content="Apprendre à s’exprimer clairement, à convaincre et à interagir efficacement dans tous les contextes, personnels ou professionnels." />
          <Card backgroundImage={Lead} title="Leadership & Développement personnel" content="Développer la confiance en soi, la prise d’initiative et les compétences pour guider et inspirer les autres." />
          <Card backgroundImage={Entre} title="Gestion de Projets & Entrepreneuriat" content="Apprendre à planifier, organiser et mener à bien des projets innovants, tout en développant un esprit entrepreneurial." />
          <Card backgroundImage={Edu} title="Éducation Financière & Culture Business" content="Comprendre les bases de la gestion financière, de l’épargne et de l’investissement pour un avenir plus sûr." />
          <Card backgroundImage={IA} title="Digital & Initiation à l'IA" content="Maîtriser les outils numériques essentiels pour s’adapter aux évolutions rapides du monde professionnel." />
        </div>
      </section>
      
      <section className='founder'>
        <div className="founder-image">
          <div className="image-container">
            <img src={Founder} alt="" />
          </div>
        </div>
        <div className="founder-text">
          <h4>"</h4>
          <h5>L’avenir se construit avec des idées, mais il se bâtit avec des compétences. Former, ce n’est pas seulement transmettre des connaissances, c’est donner à une génération les outils pour transformer ses idées en impact réel.</h5>

          <div className="role">
            <h3>Marie Dominique BEUGRE</h3>
            <h6>Fondateur de l'Agense Academy</h6>
          </div>

        </div>
      </section>
      
      <section className='temoignages'>
        <div className="title">
          <h1>Ils nous font confiance</h1>
          <p>Ajouter des lignes dans le corps du texte</p>
        </div>

        <div className="clients">
          <ClientCard image={Founder} description="Marie Dominique BEUGRE est une jeune entrepreneur passionnée par l'éducation et le développement des jeunes talents. Elle a fondé l'Agense Academy avec l'objectif de former les jeunes à devenir des leaders capables de transformer leur environnement." name="Marie Dominique BEUGRE" role="Fondateur de l'Agense Academy" />
          <ClientCard image={Founder} description="Marie Dominique BEUGRE est une jeune entrepreneur passionnée par l'éducation et le développement des jeunes talents. Elle a fondé l'Agense Academy avec l'objectif de former les jeunes à devenir des leaders capables de transformer leur environnement." name="Marie Dominique BEUGRE" role="Fondateur de l'Agense Academy" />
          <ClientCard image={Founder} description="Marie Dominique BEUGRE est une jeune entrepreneur passionnée par l'éducation et le développement des jeunes talents. Elle a fondé l'Agense Academy avec l'objectif de former les jeunes à devenir des leaders capables de transformer leur environnement." name="Marie Dominique BEUGRE" role="Fondateur de l'Agense Academy" />
        </div>
      </section>

      <Footer />
      
    </div>
  )
}

export default Home