import React from 'react';
import './Card.scss';

function Card({ title, imageUrl, link }) {
  return (
    <a href={link} className="card-link">
      <div className="card">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-content">
          <h3>{title}</h3>
        </div>
      </div>
    </a>
  );
}

export default Card;
