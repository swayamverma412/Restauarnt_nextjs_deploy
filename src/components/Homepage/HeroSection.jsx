import React from "react";
import Image from "next/image";
// Images
import FoodImage from "../../../public/FoodImage/FoodImage.avif";
import { LuMoveRight } from "react-icons/lu";
import Link from "next/link";
const HeroSection = ({ description }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center justify-between w-full max-w-6xl px-5 tabletM:px-10">
        {/* Left Side */}
        <div className="flex flex-col items-center justify-start w-full max-w-xl gap-4 pt-10 tablet:items-start tablet:pt-0">
          <p className="text-6xl font-bold text-center tablet:text-left">
            Be The First Delivery & Easy Pick Up
          </p>
          <p className="text-sm text-center opacity-80 tablet:text-left">
            {description}
          </p>
          <Link
            href="/menu"
            className="flex items-center justify-center gap-2 px-4 py-2 text-white rounded rounded-tr-xl rounded-bl-xl bg-Orange"
          >
            See All Dishes <LuMoveRight />
          </Link>
        </div>
        {/* Right Side */}
        <Image
          src={FoodImage}
          alt="Food Image"
          objectFit="contain"
          width={340}
          height={400}
          className="hidden rounded-b-full tablet:block"
        />
      </div>
    </div>
  );
};

export default HeroSection;
