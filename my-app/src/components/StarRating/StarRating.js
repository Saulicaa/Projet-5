import React from 'react';
import '../StarRating/StarRating.scss';
import starActive from '../../images/star-active.png';
import starDiscactive from '../../images/star-disactive.png';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= rating ? starActive : starDiscactive}
        alt={i <= rating ? 'Active Star' : 'Disactive Star'}
        className="star"
      />
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
