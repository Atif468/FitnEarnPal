import React from "react";

const PromotionalComponent = () => {
  return (
    <div data-aos="zoom-in" className="bg-black  text-white min-h-screen py-16 px-8 flex flex-col md:flex-row items-center justify-around space-y-12 md:space-y-0">
      <div className="text-center md:text-left max-w-xl space-y-6">
        <h1 className="text-5xl font-bold flex items-center space-x-2">
          <span role="img" aria-label="emoji" className="hover:rotate-180 hover:scale-150 duration-1000">
            🌟
          </span>
          <span>Hey, Awesome Coach</span>
        </h1>
        <p className="text-lg text-gray-300">
          Expand Your Reach, Inspire More Lives{" "}
          <span className="text-orange-500 font-bold">
            Join FitnEarnPal Today!
          </span>
        </p>
        <p className="text-gray-400">
          A global platform for coaches to connect, inspire, and change lives.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          {/* App Store Button */}
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center shadow-md space-x-2">
            <img
              src="/Vector.png"
              alt="App Store"
              className="h-6 w-auto" // Ensures proportional scaling
            />
            <span>App Store</span>
          </button>

          {/* Google Play Button */}
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center shadow-md space-x-2">
            <img
              src="/Group.png"
              alt="Google Play"
              className="h-6 w-auto" // Ensures proportional scaling
            />
            <span>Google Play</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="w-96 h-96 rounded-full bg-orange-400  flex items-center justify-center">
            <div className="w-64 h-64 rounded-3xl shadow-black bg-black flex items-center justify-center">
              
                <img
                src="/iPhone.png"
                alt="iPhone"
                className="absolute w-auto h-auto hover:scale-110 hover:rotate-12 duration-1000 z-50"
               /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalComponent;
