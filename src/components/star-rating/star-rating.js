import React from 'react';
import './star-rating.scss';
import StarFull from '../../assets/icons/StarFull.svg';
import StarEmpty from '../../assets/icons/StarEmpty.svg';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Nombre d'étoiles pleines
  const halfStar = rating % 1 > 0; // Vérifie s'il y a une étoile partielle
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Nombre d'étoiles vides

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <img key={`full-${index}`} src={StarFull} alt="Star" className="star-icon star-full" />
      ))}
      {halfStar && (
        <img src={StarFull} alt="Half Star" className="star-icon star-half" />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <img key={`empty-${index}`} src={StarEmpty} alt="Star" className="star-icon star-empty" />
      ))}
    </div>
  );
};

export default StarRating;
