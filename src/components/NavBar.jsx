import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-10">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/path-to-logo"
          alt="Logo"
          className="h-8 w-8 mr-2 animate-pulse"
        />
        <span className="text-2xl font-extrabold text-orange-500">
          FitnEarnPal
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-300 text-lg">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">Features</li>
        <li className="hover:text-white cursor-pointer">How It Works</li>
      </ul>

      {/* Call-to-Action Button */}
      <button className="bg-orange-500 text-black px-6 py-2 rounded-full hover:bg-orange-600 hover:text-white transition duration-300 shadow-md">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
