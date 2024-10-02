import React, { useState } from 'react';
import '../Slideshow/Slideshow.scss';
import arrow from '../../images/arrow.svg';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
      
      {images.length > 1 && (
        <>
          <img src={arrow} alt="Précédent" className="arrow prev" onClick={prevSlide} />
          <img src={arrow} alt="Suivant" className="arrow next" onClick={nextSlide} />
          <div className="counter">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
