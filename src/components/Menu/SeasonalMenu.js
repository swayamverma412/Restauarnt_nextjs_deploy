"use client";
import React, { useState } from "react";
import FoodImage1 from "../../../public/FoodImage/FoodImage1.avif";
import Image from "next/image";
import Modal from "../UI/Modal";
import ItemDetailsModal from "./ItemDetailsModal";
import { LuMoveRight } from "react-icons/lu";

const SeasonalMenu = ({ items }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="grid w-full grid-cols-1 gap-8 mobileL:grid-cols-2 tablet:grid-cols-3">
      {items.map((item) => (
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
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-center opacity-70">{item.description}</p>

            <div className="flex items-center justify-between w-full">
              <p className="text-lg font-bold">${item.price}</p>
              <button
                className="flex items-center justify-center gap-2"
                onClick={() => setShowModal(true)}
              >
                Know More <LuMoveRight />
              </button>
            </div>
          </div>
          <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
            <ItemDetailsModal
              foodDetails={item}
              onClose={() => setShowModal(false)}
            />
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default SeasonalMenu;
