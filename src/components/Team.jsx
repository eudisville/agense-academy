import React from 'react'
import './styles/team.css';

function Team({ image, name, role }) {
  return (
    <div className="team-container">
      <div className="member-image">
        <img src={image} alt={name} />
      </div>
      <div className="member-infos">
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  )
}

export default Team
