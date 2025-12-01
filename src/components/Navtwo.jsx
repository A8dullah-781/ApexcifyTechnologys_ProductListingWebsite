import { useState } from "react";
import React from "react";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50">
      <div className="bg-[#EAEFEE] flex justify-between items-center px-6 py-3 w-[97vw] rounded-4xl mt-2">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <RiHomeSmileFill className="w-10 h-10" />
          <div className="font-raleway font-bold text-2xl lg:text-3xl">ShopHere</div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
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

        {/* Mobile Cart + Burger */}
        <div className="md:hidden flex items-center gap-2">
          <div className="bg-black text-white rounded-full p-2.5">
            <GrCart className="w-6 h-6" />
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className="w-8 h-8 text-black" /> : <HiMenu className="w-8 h-8 text-black" />}
          </button>
        </div>

        {/* Desktop Cart */}
        <div className="hidden md:flex">
          <div className="bg-black rounded-full p-2.5">
            <GrCart className="text-white w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Slide */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center bg-[#EAEFEE] rounded-4xl mx-2 py-4 gap-4">
          <Link to="/" className="text-black font-semibold" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/products" className="text-black font-semibold" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link to="/contact" className="text-black font-semibold" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
