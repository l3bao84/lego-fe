import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ averageRating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        icon={i <= averageRating ? fasStar : fasStar}
        style={{ color: i <= averageRating ? '#FFCF00' : "#CCCCCC" }}
        key={i}
      />
    );
  }

  return <div style={{display: 'flex'}}>{stars}</div>;
};

export default Rating;
