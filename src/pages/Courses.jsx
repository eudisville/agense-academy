import React from 'react'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import CoursesCard from '../components/CoursesCard'
import './styles/courses.css';

function Courses() {
  return (
    <div>
      <TopBar />
      <Nav />

      <div className="courses-container">
        <h1>Formations</h1>
        <p>Découvrez nos formations conçues pour vous aider à développer vos compétences et à atteindre vos objectifs professionnels. Que vous soyez débutant ou que vous cherchiez à approfondir vos connaissances, nous avons une formation adaptée à vos besoins.</p>

        <div className="courses-container-cards">
            <CoursesCard image="" title="Communication & Expression" description="Apprendre à s’exprimer clairement, à convaincre et à interagir efficacement dans tous les contextes, personnels ou professionnels." />
            <CoursesCard image="" title="Communication & Expression" description="Apprendre à s’exprimer clairement, à convaincre et à interagir efficacement dans tous les contextes, personnels ou professionnels." />
            <CoursesCard image="" title="Communication & Expression" description="Apprendre à s’exprimer clairement, à convaincre et à interagir efficacement dans tous les contextes, personnels ou professionnels." />
            <CoursesCard image="" title="Communication & Expression" description="Apprendre à s’exprimer clairement, à convaincre et à interagir efficacement dans tous les contextes, personnels ou professionnels." />
        </div>
      </div>
    </div>
  )
}

export default Courses
