import React from "react";
import Rating from "../UI/Rating";

const ItemDetailsModal = ({ foodDetails, onClose }) => {
  return (
    <div className="z-10 w-11/12 p-8 bg-white rounded-md shadow-md md:w-1/2 lg:w-1/3 max-h-[60vh] overflow-y-auto">
      <div className="flex justify-end">
        <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <h2 className="mb-4 text-2xl font-bold">{foodDetails.name}</h2>
      <p className="mb-4 text-gray-600">{foodDetails.description}</p>
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-bold">Ingredients:</h3>
        <ul className="pl-6 list-disc">
          {foodDetails.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-bold">Nutritional Information:</h3>
        <p>Calories: {foodDetails.nutritional_info.calories}</p>
        <p>Carbohydrates: {foodDetails.nutritional_info.carbohydrates}g</p>
        <p>Fat: {foodDetails.nutritional_info.fat}g</p>
        <p>Protein: {foodDetails.nutritional_info.protein}g</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">${foodDetails.price.toFixed(2)}</p>
        <div className="flex items-center">
          <p className="mr-2">{foodDetails.rating}</p>
          <Rating rating={foodDetails.rating} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsModal;
