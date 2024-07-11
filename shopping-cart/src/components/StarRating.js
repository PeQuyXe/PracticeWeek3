import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = [];
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="text-yellow-500" />);
  }

  if (hasHalfStar) {
    stars.push(
      <FaStarHalfAlt key={stars.length} className="text-yellow-500" />
    );
  }

  while (stars.length < totalStars) {
    stars.push(<FaStar key={stars.length} className="text-gray-300" />);
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
