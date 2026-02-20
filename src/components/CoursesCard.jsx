import React from 'react'
import './styles/coursescard.css';

function CoursesCard({ image, title, description }) {
  return (
    <div className="courses-card">
        <div className="card-image">
            <img src={image} alt={title} />
        </div>
        <div className="card-infos">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>En savoir plus</button>
        </div>
    </div>
  )
}

export default CoursesCard
