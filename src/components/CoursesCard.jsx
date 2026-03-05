import React from "react";
import { useNavigate } from "react-router-dom";
import './styles/coursescard.css'

const Card = ({ backgroundImage, title, content, backgroundColor, courseId }) => {
  const navigate = useNavigate();

  return (
    <div className="card-course">
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
          <button onClick={() => navigate(`/courses/${courseId}`)}>
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
