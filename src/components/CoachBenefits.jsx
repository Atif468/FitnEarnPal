import React from "react";

const CoachBenefits = () => {
  const features = [
    {
      title: "Global Audience Access",
      description: "Reach a global audience to expand your impact.",
      icon: "🌐",
    },
    {
      title: "Revenue Opportunities",
      description: "Unlock diverse revenue streams for growth.",
      icon: "💰",
    },
    {
      title: "Personal Brand",
      description: "Build and establish your personal brand.",
      icon: "✨",
    },
    {
      title: "Work on Your Own Schedule",
      description: "Enjoy the flexibility to work on your own terms.",
      icon: "🕒",
    },
  ];

  return (
    <div className="text-white py-16 px-6 ">
      <div className="text-center mb-12"
      data-aos="zoom-in"
      >
        <h1 className="text-4xl font-bold mb-4">
          What's in it for <span className="text-orange-500">Coaches?</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          FitnEarnPal empowers coaches to grow and reach a global audience while
          providing valuable health and fitness insights to users.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row justify-center gap-12 items-center">
        {/* Phone Mockup */}
        <div className="relative">
          <div className="absolute inset-0 m-auto w-96 h-96 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 blur-3xl opacity-30"></div>
          <img
            src="/iPhone.png"
            alt="Phone Mockup"
            className="rounded-lg w-72 h-auto relative z-10 hover:scale-105 transition duration-500"
          />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-gray-800 rounded-xl p-6 shadow-lg hover:bg-gray-700 transition duration-300"
              data-aos="fade-right"
            >
              <div className="text-5xl text-orange-500">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachBenefits;
