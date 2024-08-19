import React, { useState } from 'react';
import './carousel.scss';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const totalImages = images.length;

  return (
    <div className="carousel">
      {totalImages > 1 && (
        <>
          
          <button className="carousel-button prev" onClick={goToPrevious}>
            &lt;
          </button>
          
          <div className="carousel-image">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          </div>
          
          <button className="carousel-button next" onClick={goToNext}>
            &gt;
          </button>
          
          <div className="carousel-counter">
            {currentIndex + 1} / {totalImages}
          </div>
        </>
      )}
      {totalImages === 1 && (
        <div className="carousel-single">
          <img src={images[0]} alt="Single slide" />
        </div>
      )}
    </div>
  );
};

export default Carousel;
