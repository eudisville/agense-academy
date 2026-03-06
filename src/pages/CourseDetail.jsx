import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useParams, useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import coursesData from '../data/coursesData';
import './styles/courseDetail.css';
import Beriverse from './assets/beriverse.png';
import Jera from './assets/jera.png';
import Impact from './assets/impact.jpeg';
import Wake from './assets/wake.jpeg'

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find((c) => c.id === id);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Optionnel: durée de l'animation en ms
      once: true, // Optionnel: animer une seule fois au premier défilement
    });
  }, []);

  if (!course) {
    return (
      <div>
        <TopBar />
        <Nav />
        <div className="cd-notfound">
          <h2>Formation introuvable.</h2>
          <button onClick={() => navigate('/courses')}>← Retour aux formations</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="cd-page">
      <TopBar />
      <Nav />

      <div className="header">
        <div className="header-text" data-aos="fade-up">
          <h1>{course.title}</h1>
          <h5>{course.badge}</h5>

          <p>{course.description}</p>

          <div className="info-row">
            <span className="info-item">
            <span className="info-icon">⏱ </span>
              {/* <span className="info-label">DURÉE</span> */}
                <span className="info-value">{course.duration}</span>
                </span>
                {/* <span className="separator"> | </span> */}
              <span className="info-item">
            {/* <span className="info-icon">≡ </span> */}
            <span className="info-value">{course.format}</span>
            </span>
          </div>

          <p className="places">{course.students} Places disponibles</p>

          <div className="tarif-block">
            {/* <p>TARIF</p> */}
            <p className="price">{course.price}</p>
          </div>

          <a href={course.link} target="_blank" rel="noopener noreferrer">
            <button className="inscrit-btn">S'inscrire</button>
          </a>

          <a href={course.brochure} download={`brochure-${course.id}.pdf`}>
            <button className="brochure-btn">Télécharger la brochure</button>
          </a>
        </div>

        <div className="header-text">
          <div
            className="hero-image" data-aos="fade-down-left"
            style={{ backgroundImage: `url(${course.backgroundImage})` }}
            >
             {course.backgroundImage ? (
                <img src={course.backgroundImage} alt={course.title} />
              ) : (
                <div className="hero-placeholder">
                  <div className="placeholder-sky"></div>
                  <div className="placeholder-ground"></div>
                </div>
              )}
          </div>
        </div>
        
      </div>

      <section className='details'>
        <div className="objectives" data-aos="flip-right">
          <h2>Objectifs de la formation</h2>
          <ul>
            {course.objectives.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </div>

        <div className="programme" data-aos="flip-right">
          <h2>Programme de la formation</h2>
          <ul>
            {course.programme.map((item, index) => (
              <li key={index}>
                <strong>{item.semaine}:</strong> {item.contenu}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="instructors">
        {/* <h2>Formateur</h2> */}
        <div className="instructor">
          <h6><strong>{course.otherInstructor}</strong></h6>
          <p>{course.otherInstructorRole}</p>
        </div>

        <div className="instructor">
          <h6><strong>{course.instructor}</strong></h6>
          <p>{course.instructorRole}</p>
        </div>

        <div className="instructor">
          <h6><strong>{course.otherInstructor2}</strong></h6>
          <p>{course.otherInstructorRole2}</p>
        </div>

      </div>

      <div className="date">
        <div className="date-items" data-aos="zoom-in">
          <div className="date-title">
            <h1>Date des Prochaines sessions</h1>
            <p>Retrouvez les dates de nos prochaines sessions et réservez votre place avant qu'elles ne soient complètes.</p>
          </div>

          <div className="date-box">
            <h2>{course.date}</h2>
            <h5>{course.place}</h5>

            <a href={course.brochure} download={`brochure-${course.id}.pdf`}>
              <button className="brochure-btn">Télécharger la brochure</button>
            </a>
          </div>
        </div>
      </div>

      <div className="partnerships" data-aos="zoom-in">
        <div className="items">

          <div className="partnership-text">
            <h1>Nos Partenaires</h1>
            <p>Nous collaborons avec les entreprises expertes dans leurs domaines.</p>
          </div>
          <div className="partners">
            <img src={Beriverse} alt="" />
            <img src={Jera} alt="" />
            <img src={Impact} alt="" />
            <img src={Wake} alt="" />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CourseDetail;
