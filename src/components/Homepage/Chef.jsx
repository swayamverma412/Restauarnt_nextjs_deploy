import React from "react";
import Image from "next/image";
import ChefImage from "../../../public/ChefImage.avif";

const Chef = ({ chef }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-12 px-5 tabletM:px-10">
        <h2 className="text-4xl font-bold">Our Chef</h2>

        <div className="flex flex-col items-center justify-center w-full max-w-md gap-8">
          <div className="relative w-96 h-[400px] rounded-md">
            <Image
              src={ChefImage}
              alt="Chef's Image"
              objectFit="contain"
              fill
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-semibold">{chef.name}</p>
            <p className="text-sm text-center opacity-70">{chef.bio}</p>
            <p>
              <span className="text-sm opacity-70">Signature Dish:</span>{" "}
              <span className="font-medium">{chef.signature_dish}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
