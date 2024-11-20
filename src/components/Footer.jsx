import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-16 px-8">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/3 space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/Final FitnEarn Pal Logo.png" // replace with actual logo path
              alt="FitnEarnPal Logo"
              className="w-12 h-12"
            />
            <span className="text-2xl font-semibold text-orange-500">
              FitnEarnPal
            </span>
          </div>
          <p className="text-sm text-gray-400">
            FitnEarnPal is your all-in-one place where you can train people as
            per your schedule. It's a place where you can upload workout videos,
            create live sessions, write blogs, and much more. Available on
            Android and iOS. Join our community of coaches today!
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-orange-500 text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-orange-500 text-lg">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-orange-500 text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-500 text-lg">
              <FaYoutube />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            <a href="mailto:help@fitnearnpal.com" className="hover:text-orange-500">
              help@fitnearnpal.com
            </a>
          </p>
        </div>

        {/* Useful Links Section */}
        <div className="w-full md:w-1/4 space-y-4">
          <h3 className="font-semibold text-lg">Useful Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Sign Up form
              </a>
            </li>
          </ul>
        </div>

        {/* Policies Section */}
        <div className="w-full md:w-1/4 space-y-4">
          <h3 className="font-semibold text-lg">Policies</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-orange-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Data Deletion
              </a>
            </li>
          </ul>
        </div>

        {/* Download Section */}
        <div className="w-full md:w-1/4 flex flex-col items-center space-y-4">
          <h3 className="font-semibold text-lg">Download Now</h3>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white py-3 px-6 rounded-lg flex items-center space-x-2 hover:bg-red-500">
              <FaApple size={24} />
              <span>App Store</span>
            </button>
            <button className="bg-red-600 text-white py-3 px-6 rounded-lg flex items-center space-x-2 hover:bg-red-500">
              <FaGooglePlay size={24} />
              <span>Google Play</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-sm text-gray-400">
        <p>© Copyright 2024, All Rights Reserved.</p>
        <p className="mt-2">Made with ❤️ in India</p>
        <p className="mt-2">Reg@2024</p>
      </div>
    </footer>
  );
};

export default Footer;
