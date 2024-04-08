import React from "react";
import Image from "next/image";
import FoodImage1 from "../../../public/FoodImage/FoodImage1.avif";
import { LuMoveRight } from "react-icons/lu";
import Link from "next/link";

const PopularDish = ({ popular }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-12 px-5 tabletM:px-10">
        <h2 className="text-4xl font-bold text-center">Our Popular Dishes</h2>

        <div className="flex flex-col items-center justify-center w-full gap-8 tablet:flex-row">
          {popular.map((items) => (
            <div
              key={items}
              className="flex flex-col items-center justify-start w-full gap-4 p-4 pt-0 overflow-hidden rounded-tl-full rounded-tr-full rounded-bl-md rounded-br-md hover:shadow-md"
            >
              <div className="relative rounded-full w-36 h-36">
                <Image
                  priority
                  src={FoodImage1}
                  alt="Food Image"
                  objectFit="cover"
                  fill
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-2">
                <p className="font-semibold">{items.name}</p>
                <p className="text-sm text-center opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores eius quod doloremque nostrum nulla. Id ad velit,
                  modi earum consequuntur doloremque quidem molestiae eos
                  maiores.
                </p>

                <div className="flex items-center justify-between w-full">
                  <p className="text-lg font-bold">$50.99</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/menu"
          className="flex items-center justify-center gap-2 px-4 py-2 text-white rounded rounded-tr-xl rounded-bl-xl bg-Orange"
        >
          See All Dishes <LuMoveRight />
        </Link>
      </div>
    </div>
  );
};

export default PopularDish;
