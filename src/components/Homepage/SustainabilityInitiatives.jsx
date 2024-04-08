import React from "react";
import Image from "next/image";
import Image1 from "../../../public/farm.avif";
import { LuMoveRight } from "react-icons/lu";

const SustainabilityInitiatives = ({ initiatives }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-12 px-5 tabletM:px-10">
        <h2 className="text-4xl font-bold text-center">
          Sustainability Initiatives
        </h2>

        <div className="flex flex-col items-center justify-center w-full gap-8 tablet:flex-row">
          {initiatives.map((items) => (
            <div
              key={items}
              className="flex flex-col items-center justify-start w-full gap-4 p-4 pt-0 overflow-hidden rounded-t-full rounded-b-2xl hover:shadow-md"
            >
              <div className="relative rounded-full w-36 h-36">
                <Image
                  priority
                  src={Image1}
                  alt="Food Image"
                  objectFit="cover"
                  fill
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-2">
                <p className="font-semibold ">{items.name}</p>
                <p className="text-sm text-center opacity-70">
                  {items.description}
                </p>

                <button className="flex items-center justify-center gap-2">
                  Read More <LuMoveRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SustainabilityInitiatives;
