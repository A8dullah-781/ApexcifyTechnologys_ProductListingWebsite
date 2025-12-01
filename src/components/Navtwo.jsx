import { useState } from "react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className=" fixed top-0 left-0 justify-center flex items-center ">
      <div className="bg-[#EAEFEE] justify-between px-15 flex items-center  w-[97vw] h-[10vh] rounded-4xl  mx-4 mt-4">
        <div className="justify-center first  gap-1 flex items-center">
          <RiHomeSmileFill  className=" w-10 h-10" />
          <div className="font-raleway font-bold text-3xl">ShopHere</div>
        </div>
        <div className="flex second font-semibold gap-8">
          <Link to="/" className="relative text-black group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
          </Link>

          <Link to="/products" className="relative text-black group">
            Products
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
          </Link>

          <Link to="/contact" className="relative text-black group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
          </Link>
        </div>
        <div className="third bg-black rounded-full p-2.5">
          <GrCart className="text-white w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
