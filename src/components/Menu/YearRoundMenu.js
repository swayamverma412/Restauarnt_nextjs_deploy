"use client";
import React, { useState } from "react";
import FoodImage1 from "../../../public/FoodImage/FoodImage1.avif";
import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";
import Modal from "../UI/Modal";
import ItemDetailsModal from "./ItemDetailsModal";

const YearRoundMenu = ({ categories }) => {
  const [showItem, setShowItem] = useState(null);

  return categories.map((category) => (
    <div
      key={category.name}
      className="flex flex-col items-start justify-start gap-8"
    >
      <p className="text-2xl font-semibold underline underline-offset-8 decoration-Orange decoration-4">
        {category.name}
      </p>
      <div className="grid w-full grid-cols-1 gap-8 mobileL:grid-cols-2 tablet:grid-cols-3">
        {category.items.map((item) => (
          <div
            key={item.name}
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
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-center opacity-70">
                {item.description}
              </p>

              <div className="flex items-center justify-between w-full">
                <p className="text-lg font-bold">${item.price}</p>
                <button
                  className="flex items-center justify-center gap-2"
                  onClick={() => setShowItem(item)}
                >
                  Know More <LuMoveRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal isVisible={!!showItem} onClose={() => setShowItem(null)}>
        <ItemDetailsModal
          foodDetails={showItem}
          onClose={() => setShowItem(null)}
        />
      </Modal>
    </div>
  ));
};

export default YearRoundMenu;
