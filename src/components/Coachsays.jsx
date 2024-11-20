import React from "react";
import { FaUserAstronaut } from "react-icons/fa";

const CoachTestimonial = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-8 flex flex-col items-center">
      {/* Heading and Description */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-semibold">
          What our <span className="text-orange-500">Coaches</span> Say
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl">
          FitnEarnPal empowers coaches to grow and reach a global audience while
          providing valuable health and fitness insights to users.
        </p>
      </div>

      {/* Testimonial Section */}
      <div className="relative mt-12 flex justify-center items-center">
        {/* Profile pictures */}
        <div className="absolute h-24 w-24 top-0 left-0 transform -translate-x-16 -translate-y-16 hover:scale-110 transition-transform">
          <FaUserAstronaut size={80}  />
        </div>
        <div className="absolute h-24 w-24 top-0 right-0 transform translate-x-16 -translate-y-16 hover:scale-110 transition-transform">
          <FaUserAstronaut size={80}  />
        </div>
        <div className="absolute h-24 w-24 bottom-0 left-0 transform -translate-x-16 translate-y-16 hover:scale-110 transition-transform">
          <FaUserAstronaut size={80} />
        </div>
        <div className="absolute h-24 w-24 bottom-0 right-0 transform translate-x-16 translate-y-16 hover:scale-110 transition-transform">
          <FaUserAstronaut size={80} />
        </div>

        {/* Central Testimonial */}
        <div className="text-center space-y-4 z-50 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Star rating */}
            <span className="text-yellow-500 text-3xl">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            After Joining FitnEarnPal, my audience reach has increased, and I
            can work according to my time, which I liked the most.
          </p>
          <h3 className="text-xl font-semibold">Coach Name</h3>
          <p className="text-gray-400">Yoga Trainer</p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2 mt-8">
        <span className="w-3 h-3 bg-gray-500 rounded-full hover:bg-gray-400 transition"></span>
        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-500 rounded-full hover:bg-gray-400 transition"></span>
        <span className="w-3 h-3 bg-gray-500 rounded-full hover:bg-gray-400 transition"></span>
      </div>
    </div>
  );
};

export default CoachTestimonial;
