import React from 'react'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import CoursesCard from '../components/CoursesCard'
import './styles/courses.css';
import Footer from '../components/Footer';
import coursesData from '../data/coursesData';
import Stud from './assets/stud.jpg';

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

export default Courses
