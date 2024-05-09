import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-center mx-4 md:justify-around mb-4">
        <AiFillFacebook size={30} color="#1D4ED8" />
        <AiFillInstagram size={30} color="#1D4ED8" />
        <AiFillTwitterSquare size={30} color="#1D4ED8" />
        <AiFillLinkedin size={30} color="#1D4ED8" />
      </div>
      <div className="flex gap-2  items-center mt-4 md:justify-center ">
        <img
          src="/src/assets/avatar.jpg"
          alt="avatar  "
          srcset=""
          className="h-10 w-10"
        />
        <div>
          <p className="font-playfair font-thin">Have any Questions?</p>
          <a href="#" className=" font-lato font-medium">
            Talk to a specialist
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
