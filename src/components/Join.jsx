import React from "react";
import { FaUsers, FaArrowRight } from "react-icons/fa"; // Importing icons

const Join = () => {
  const imageCollections = [
    {
      name: "Sunset Beach",
      image: "/img.jpg",
    },
    {
      name: "Mountain View",
      image: "/img.jpg",
    },
    {
      name: "City Lights",
      image: "/img.jpg",
    },
    {
      name: "Forest Trail",
      image: "/img.jpg",
    },
    {
      name: "Desert Dunes",
      image: "/img.jpg",
    },
    {
      name: "Ocean Waves",
      image: "/img.jpg",
    },
  ];

  return (
    <div className="w-full text-white py-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center space-x-2">
          <FaUsers className="text-orange-500" /> {/* Users Icon */}
          <span>Join the Growing Community of Coaches</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          FitnEarnPal is your gateway to connect with a global community of
          health and fitness enthusiasts, share experiences and valuable
          knowledge, and grow your audience. As a coach, you have the power to
          inspire, educate, and motivate users worldwide by creating and sharing
          impactful content, workout videos, conducting live sessions, and much
          more.
        </p>
        <button className="bg-orange-700 px-6 py-3 rounded-full hover:bg-orange-600 transition-shadow shadow-lg flex items-center space-x-2">
          <span>Join Now</span>
          <FaArrowRight /> {/* Arrow Icon */}
        </button>
      </div>

      {/* Image Collections Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {imageCollections.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center flex items-center justify-center space-x-2">
                <span>{item.name}</span>
                <FaArrowRight className="text-orange-500" /> {/* Arrow Icon */}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Join;
