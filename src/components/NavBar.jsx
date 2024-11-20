import React from "react";
import { FaHome, FaCog, FaRegFileAlt } from "react-icons/fa"; // Correct imports

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/Final FitnEarn Pal Logo.png"
          alt="Logo"
          className="h-8 w-8 mr-2 animate-pulse"
        />
        <span className="text-2xl font-extrabold text-orange-500">
          FitnEarnPal
        </span>
      </div>

      {/* Navigation Links with Icons */}
      <ul className="hidden md:flex space-x-8 text-gray-300 text-lg">
        <li className="flex items-center hover:text-white cursor-pointer">
          <FaHome className="mr-2" />
          Home
        </li>
        <li className="flex items-center hover:text-white cursor-pointer">
          <FaRegFileAlt className="mr-2" />
          Features
        </li>
        <li className="flex items-center hover:text-white cursor-pointer">
          <FaCog className="mr-2" />
          How It Works
        </li>
      </ul>

      {/* Call-to-Action Button */}
      <button className="bg-orange-500 text-black px-6 py-2 rounded-full hover:bg-orange-600 hover:text-white transition duration-300 shadow-md">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
