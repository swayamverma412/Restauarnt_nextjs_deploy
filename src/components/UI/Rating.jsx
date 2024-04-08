import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ rating }) => {
  // Function to round the rating to the nearest half
  const roundToHalf = (num) => Math.round(num * 2) / 2;

  // Calculate the number of filled and empty stars
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = hasHalfStar ? 4 - filledStars : 5 - filledStars;

  // Create an array to loop through and render stars
  const stars = Array.from({ length: filledStars }, (_, index) => (
    <FaStar className="text-yellow-400" key={index} />
  ));

  if (hasHalfStar) {
    // Add half-filled star
    stars.push(<FaStarHalfAlt className="text-yellow-400" key="half" />);
  }

  // Add empty stars
  stars.push(
    ...Array.from({ length: emptyStars }, (_, index) => (
      <FaRegStar key={`empty-${index}`} />
    ))
  );

  return <div className="flex items-center">{stars}</div>;
};

export default Rating;
