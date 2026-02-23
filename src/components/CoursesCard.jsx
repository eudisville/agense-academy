import React from "react";
import './styles/coursescard.css'

const Card = ({ backgroundImage, title, content, button, backgroundColor }) => {
  return (
    <div className="card">
      <div
        className="card-background"
        style={{
          backgroundImage: backgroundImage
            ? `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(${backgroundImage})`
            : undefined,
          backgroundColor: backgroundColor || 'black',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="card-content">
        <div className="card-text">
            <h2>{title}</h2>
            <p>{content}</p>
            <button>En savoir plus</button>
        </div>
      </div>
    </div>
  );
};

export default Card;