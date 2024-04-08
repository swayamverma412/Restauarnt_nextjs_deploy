"use client";
import React, { useState } from "react";
import { LuMoveRight } from "react-icons/lu";
import Rating from "../UI/Rating";

const Testimonials = ({ review }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextHandler = () => {
    setCurrentIndex(currentIndex === review.length - 1 ? 0 : currentIndex + 1);
  };
  const previousHandler = () => {
    setCurrentIndex(currentIndex === 0 ? review.length - 1 : currentIndex - 1);
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-12 px-5 tabletM:px-10">
        <h2 className="text-4xl font-bold text-center">Customers Reaction</h2>
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full max-w-[560px] max-h-[280px]">
          <div className="flex flex-col items-center justify-center w-full h-full max-w-[560px]  gap-4 px-10 border-2 border-Orange/50 py-9 rounded-xl">
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold">
                {review[currentIndex].customer_name}
              </p>
              <Rating rating={review[currentIndex].rating} />
            </div>
            <p className="text-sm text-center">
              {review[currentIndex].comment}
            </p>
          </div>

          <div className="flex items-center justify-between w-full gap-4">
            <button
              onClick={previousHandler}
              className="px-5 text-3xl text-white rounded rounded-tr-2xl rounded-bl-2xl bg-Orange"
            >
              <LuMoveRight className="rotate-180" />
            </button>
            <button
              onClick={nextHandler}
              className="px-5 text-3xl text-white rounded rounded-tr-2xl rounded-bl-2xl bg-Orange"
            >
              <LuMoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
