import React, { useState, useEffect } from 'react' 
import TopBar from '../components/TopBar';
import Nav from '../components/Nav';
import Card from '../components/Card';
import './styles/home.css';
import img1 from './assets/AgenSe.png';
import Founder from './assets/dom.png';
import T1 from './assets/djedje.jpg';
import ClientCard from '../components/ClientCard';
import Footer from '../components/Footer';
import IA from './assets/ia.jpg';
import Com from './assets/foc.jpg';
import Edu from './assets/peo.jpg';
import Entre from './assets/business.jpg';
import Lead from './assets/leader.jpg';
import Stud from './assets/stud.jpg';
import Academy from './assets/BA.jpg';
import Beriverse from './assets/beriverse.png';
import Jera from './assets/jera.png';
import Impact from './assets/impact.jpeg';
import Jo from './assets/ff.jpeg'

function Home() {
  const slides = [
    {
      image: Academy,
      title: "Bienvenue à l'Agense Academy",
      subtitle: "Site officiel de l'Agense Academy. Centre de formation basé à Abidjan",
    },
    {
      image: Com,
      title: "Excellence. Innovation. Imapct. Collaboration",
      subtitle: "les fondements d’Agense Academy pour former des talents d’exception et construire ensemble un avenir durable.",
    },
    {
      image: Edu,
      title: "L’éducation repensée",
      subtitle: "Nous combinons pédagogie moderne, technologies émergentes et approche pratique pour préparer nos apprenants aux défis réels.",
    }
  ];

  const [current, setCurrent] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // const prevSlide = () => {
  //   setCurrent((prev) =>
  //     prev === 0 ? slides.length - 1 : prev - 1
  //   );
  // };

  return (
    <div>
      <TopBar />
      <Nav />
      
      <header
      style={{
        backgroundImage: `url(${slides[current].image})`
      }}
    >
      <div className="header-content">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].subtitle}</p>
      </div>

      {/* Flèches */}
      {/* <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button> */}

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </header>

      <section className='about'>
        <div className="text">
          <h1>A Propos de <br />l'Agense Academy</h1>
          <p>L’Agense Academy est née de la conviction que le véritable changement commence par la formation et s’adresse principalement aux jeunes lycéens, étudiants, jeunes professionnels, porteurs de projets et entrepreneurs, pour les préparer à devenir compétents, confiants et conscients de leur potentiel. 
            <br />Reposant sur le principe de jeunes qui forment des jeunes, nos formations sont animées par des formateurs jeunes, expérimentés et engagés, capables de comprendre les réalités et les ambitions de leur génération. 
            <br />Inspirée de modèles internationaux alliant pratique, créativité et leadership, L’Agense Academy mise sur des apprentissages concrets, interactifs et orientés vers l’action, guidés par les valeurs d’excellence, d’innovation, d’engagement et d’impact, afin de développer des compétences utiles et applicables, créer un réseau de talents connectés et accompagner les jeunes dans la construction de l’avenir qu’ils méritent.</p>

          <a href="/brochure.pdf" download>
          <h4>
            Télécharger la brochure
          </h4>
          </a>
          
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

      <div className="partnerships">
        <div className="items">

          <div className="partnership-text">
            <h1>Nos Partenaires</h1>
            <p>Nous sommes fiers de collaborer avec des partenaires qui partagent notre vision et notre engagement envers l’éducation et le développement des jeunes talents.</p>
          </div>
          <div className="partners">
            <img src={Beriverse} alt="" />
            <img src={Jera} alt="" />
            <img src={Impact} alt="" />
          </div>

        </div>
      </div>
      
      <section className='temoignages'>
        <div className="title">
          <h1>Ils nous font confiance</h1>
          <p>Ajouter des lignes dans le corps du texte</p>
        </div>

        <div className="clients">
          <ClientCard image={Founder} description="En tant que partenaire, l'Agense c'est du professionnalisme pure. Je vous les recommande vivement !" name="Eudes Koffi" role="Executive Manager à Beriverse Inc." />
          <ClientCard image={T1} description="Transformer et révéler une génération de leaders, telle est notre mission.Agense Academy vous accompagne pour développer les compétences qui feront de vous les leaders dont le monde a besoin. Inscrivez-vous et commencez votre transformation.." name="Christian Emmanuel Djedje" role="PCA Wake Up Côte d’Ivoire," />
          <ClientCard image={Jo} description="Je rejoins ce programme avec la conviction que la formation et l’accompagnement des jeunes sont des leviers essentiels pour leur développement personnel et professionnel. Mon rôle sera d’accompagner les participants tout au long de leur parcours, en rendant l’apprentissage accessible, interactif et progressif." name="Jonathan KOFFI" role="Formateur" />
        </div>
      </section>

      <section className='box'>
        <div className="box-image">
          <img src={Stud} alt="" />
        </div>

        <div className="formulaire">
          <h1><span>Hello</span>, inscrivez-vous à notre newsletter</h1>
          <p>Recevez nos dernières actualités et nos offres exclusives directement dans votre boîte de réception.</p>

          <form action="">
            <input type="text" placeholder='Votre nom' />
            <input type="email" placeholder='Votre adresse email' />
            <button type='submit'>S'inscire</button>
          </form>
        </div>
      </section>

      <Footer />
      
    </div>
  )
}

export default Home