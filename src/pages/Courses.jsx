import React from 'react'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import CoursesCard from '../components/CoursesCard'
import './styles/courses.css';
import Footer from '../components/Footer';

function Courses() {
  return (
    <div>
      <TopBar />
      <Nav />

      <div className="courses-container">
        <h1>Formations</h1>
        <p>Découvrez nos formations conçues pour vous aider à développer vos compétences et à atteindre vos objectifs professionnels. Que vous soyez débutant ou que vous cherchiez à approfondir vos connaissances, nous avons une formation adaptée à vos besoins.</p>

        <div className="courses-container-cards">
            <CoursesCard backgroundImag="" title="Bootcamp" content="Formation intensive pour acquérir rapidement les compétences essentielles dans un domaine particulier." />
            <CoursesCard backgroundImag="" title="Introduction à la Gestion de Projet" content="Apprendre à gérer efficacement des projets complexes dans un environnement professionnel." />
            <CoursesCard backgroundImag="" title="Leadership" content="Développer les compétences nécessaires pour motiver et guider une équipe vers la réussite." />
            <CoursesCard backgroundImag="" title="Initiation à l'Intelligence Artificielle" content="Apprendre à s’exprimer clairement, à convaincre et à interagir efficacement dans tous les contextes, personnels ou professionnels." />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Courses
