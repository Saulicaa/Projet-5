import React from 'react';
import './Banner.scss';

function Banner({ title, backgroundImage }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>
        {title.split(',').map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </h1>
    </div>
  );
}

export default Banner;
