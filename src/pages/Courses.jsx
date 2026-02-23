import React from 'react'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import CoursesCard from '../components/CoursesCard'
import './styles/courses.css';
import Footer from '../components/Footer';
import coursesData from '../data/coursesData';

function Courses() {
  return (
    <div>
      <TopBar />
      <Nav />

      <div className="courses-container">
        <h1>Formations</h1>
        <p>Découvrez nos formations conçues pour vous aider à développer vos compétences et à atteindre vos objectifs professionnels. Que vous soyez débutant ou que vous cherchiez à approfondir vos connaissances, nous avons une formation adaptée à vos besoins.</p>

        <div className="courses-container-cards">
          {coursesData.map((course) => (
            <CoursesCard
              key={course.id}
              courseId={course.id}
              backgroundImage={course.backgroundImage}
              backgroundColor={course.backgroundColor}
              title={course.title}
              content={course.content}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Courses
