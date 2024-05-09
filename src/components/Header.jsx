import React from "react";
import { IoMdRocket } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 justify-center items-center">
        <IoMdRocket size={30} />
        <h3 className="font-bold">Hosterr</h3>
        <button className="px-4 py-1 text-white rounded-full bg-gradient-to-r from-amber-400 to-red-600 md:ml-8">
          Hoster is Hiring
        </button>
      </div>
      <ul className="flex justify-center items-center gap-24 font-playfair font-bold">
        <li className="hover:text-red-600">
          <a href="">Home</a>
        </li>
        <li className="hover:text-red-600">
          <a href="">About</a>
        </li>
        <li className="hover:text-red-600">
          <a href="">Services</a>
        </li>
        <li className="hover:text-red-600">
          <a href="">Contact Us</a>
        </li>
        <li className="hover:text-red-600">
          <a href="">Login</a>
        </li>
      </ul>
      <div>
        <AiOutlineMenu size={22} />
      </div>
    </div>
  );
};

export default Header;
