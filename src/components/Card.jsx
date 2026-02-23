import React from "react";
import './styles/card.css'

const Card = ({ backgroundImage, title, content, backgroundColor }) => {
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
        </div>
      </div>
    </div>
  );
};

export default Card;