import React from "react";

const KeyFeatures = () => {
  const features = [
    { title: "Blog Writing", description: "Coach can write blogs", icon: "📖" },
    {
      title: "Live Sessions",
      description: "Coach can create live sessions",
      icon: "🔴",
    },
    {
      title: "Content Creation",
      description: "Coach can create contents",
      icon: "🖼️",
    },
    {
      title: "Workout Videos",
      description: "Coach can create workout videos",
      icon: "🎥",
    },
  ];

  return (
    <div className="text-white  h-full w-screen min-h-screen">
      {/* Key Features Section */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8"
        data-aos="zoom-in-up"
        >Key Features</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-lg p-6 w-64 shadow-lg text-center bg-gradient-to-r from-gray-800 to-gray-900 hover:scale-105 hover:shadow-2xl transition-all duration-300"
              data-aos="flip-up"
            >
              {/* Circular Icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 border-2 border-gray-700 rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-black text-2xl">{feature.icon}</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className="mt-10 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Become Coach Today Section */}
      <div className="py-16 px-6 text-center text-white">
        <h2 className="text-5xl font-bold mb-6">
          Become <span className="text-red-500">Coach</span> Today
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Join our platform and unlock the tools to create blogs, live sessions,
          workout videos, and more!
        </p>
      </div>
      <div className="py-16 px-6 text-center text-white">
       
        <div className="relative flex justify-center items-center mt-12">
          {/* First Mockup Image */}
          <div 
          data-aos="fade-down-left"
          className="absolute transform -translate-x-14 -rotate-12 hover:rotate-0 transition-transform duration-500 z-10">
            <img
              src="iPhone 13 Pro Max (2).png"
              alt="App Screen 1"
              className="w-80 sm:w-80 h-auto object-cover"
            />
          </div>

          {/* Second Mockup Image */}
          <div 
          data-aos="fade-down-right"
          className="absolute transform translate-x-14 rotate-12 hover:rotate-0 transition-transform duration-500 ">
            <img
              src="iPhone 13 Pro Max (3).png"
              alt="App Screen 2"
              className="w-96 sm:w-96 h-auto object-cover"
            />
          </div>
        </div>
        <br />
        <br />

        {/* App Store Buttons */}
        <div className="flex justify-center gap-6 mt-32 bg-black">
          <button className="bg-gradient-to-r from-red-500 to-red-700 flex items-center px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="App Store"
              className="w-6 h-6 mr-3"
            />
            <span className="text-white font-semibold">
              Download on the App Store
            </span>
          </button>
          <button className="bg-gradient-to-r from-green-500 to-green-700 flex items-center px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-6 h-6 mr-3"
            />
            <span className="text-white font-semibold">
              Get it on Google Play
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
