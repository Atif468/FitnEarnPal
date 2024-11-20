import React from "react";
import { FaMobileAlt, FaLock, FaImages, FaComments } from "react-icons/fa"; // Import React Icons

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaMobileAlt />, // Icon for "Register"
      title: "Register",
      description:
        "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
    },
    {
      icon: <FaLock />, // Icon for "Verify"
      title: "Verify",
      description:
        "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
    },
    {
      icon: <FaImages />, // Icon for "Create Content"
      title: "Create Content",
      description:
        "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
    },
    {
      icon: <FaComments />, // Icon for "Engage With Users"
      title: "Engage With Users",
      description:
        "Support for multiple languages, making health monitoring accessible and easy for users around the globe.",
    },
  ];

  return (
    <div className="py-16 text-white">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">How It Works ?</h2>
      </div>

      {/* Steps */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {steps.map((step, index) => (
          <div key={index} className="text-center w-full sm:w-1/2 md:w-1/4">
            <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mx-auto shadow-lg">
              <span className="text-white text-3xl">{step.icon}</span>
            </div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
