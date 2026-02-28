import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import coursesData from '../data/coursesData';
import './styles/courseDetail.css';

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find((c) => c.id === id);

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
        <div className="header-text">
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
            <span className="info-value">En Ligne & en Présentiel</span>
            </span>
          </div>

          <p className="places">25 Places disponibles/cohorte</p>

          <div className="tarif-block">
            {/* <p>TARIF</p> */}
            <p className="price">{course.price}</p>
          </div>

          <button className="inscrit-btn">Discuter</button>
          <button className="brochure-btn">Télécharger la brochure</button>
        </div>

        <div className="header-text">
          <div
            className="hero-image"
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
        <div className="objectives">
          <h2>Objectifs de la formation</h2>
          <ul>
            {course.objectives.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </div>

        <div className="programme">
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

      <div className="instructor">
        {/* <h2>Formateur</h2> */}
        <h6><strong>{course.instructor}</strong></h6>
        <p>{course.instructorRole}</p>
      </div>

      <Footer />
    </div>
  );
}

export default CourseDetail;
