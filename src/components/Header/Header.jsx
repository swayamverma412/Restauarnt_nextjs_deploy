import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="absolute left-0 right-0 flex items-center justify-center w-full bg-white">
      <div className="flex items-center justify-between w-full max-w-6xl px-5 tabletM:px-10 h-14">
        <p>LOGO</p>

        <ul className="flex items-center justify-center gap-8">
          <li className="border-b-2 border-transparent cursor-pointer hover:border-Orange">
            <Link prefetch href="/">
              Home
            </Link>
          </li>
          <li className="border-b-2 border-transparent cursor-pointer hover:border-Orange">
            <Link prefetch href="/menu">
              Menu
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-4">
          <p>
            <FaShoppingCart />
          </p>
          <p>
            <FaSearch />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
