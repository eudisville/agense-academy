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

      <div className="cd-wrapper">

        {/* ── HERO SECTION ── */}
        <div className="cd-hero">
          <div className="cd-hero-left">
            <h1 className="cd-title">{course.title}</h1>
            <p className="cd-domain">{course.badge}</p>

            <div className="cd-info-row">
              <span className="cd-info-item">
                <span className="cd-info-icon">⏱</span>
                <span className="cd-info-label">DURÉE</span>
                <span className="cd-info-value">{course.duration}</span>
              </span>
              <span className="cd-separator">|</span>
              <span className="cd-info-item">
                <span className="cd-info-icon">≡</span>
                <span className="cd-info-value">EN LIGNE ET EN PRÉSENTIEL</span>
              </span>
            </div>

            <p className="cd-places">25 Places disponibles/cohorte</p>

            <div className="cd-tarif-block">
              <p className="cd-tarif-label">TARIF</p>
              <p className="cd-tarif-price">{course.price}</p>
            </div>

            <button className="cd-inscrit-btn">S'INSCRIRE</button>
          </div>

          <div className="cd-hero-right">
            <div
              className="cd-hero-image"
              style={{ backgroundColor: course.backgroundColor }}
            >
              {course.backgroundImage ? (
                <img src={course.backgroundImage} alt={course.title} />
              ) : (
                <div className="cd-hero-placeholder">
                  <div className="cd-placeholder-sky"></div>
                  <div className="cd-placeholder-ground"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── DETAILS SECTION ── */}
        <div className="cd-details">
          <p className="cd-details-label">DÉTAILS DE LA FORMATION</p>
          <p className="cd-details-text">{course.description}</p>

          <p className="cd-certificat">Certificat remis à la fin</p>

          <button className="cd-brochure-btn">TÉLÉCHARGER LA BROCHURE</button>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default CourseDetail;
