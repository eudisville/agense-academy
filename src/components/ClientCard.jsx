import React from "react";
import  "./styles/clientcard.css";

export default function ClientCard({
  image,
  description,
  name,
  role,
}) {
  return (
      <div className="card-client">
        <div className="avatar-wrapper">
          <img src={image} alt={name} className="avatar" />
        </div>

        <p className="description-card">{description}</p>

        <h2 className="name">{name}</h2>
        <p className="role-card">{role}</p>
      </div>
  );
}