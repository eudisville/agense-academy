import React from 'react'
import './styles/card.css';

function Card({ image, title, description }) {
  return (
    <div className="card">
        <div className="card-image">
            <img src={image} alt={title} />
        </div>
        <div className="card-infos">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card
