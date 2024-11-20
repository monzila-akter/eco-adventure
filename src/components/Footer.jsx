import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-lime-900 text-white py-10 ">
      <div className="w-11/12 mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* first section */}
          <div>
            <h1 className="text-2xl font-bold mb-3">Eco Adventure</h1>
            <p className="text-sm mb-6">
              Embark on unforgettable eco-friendly travel experiences while
              preserving the planet. Explore, learn, and connect with nature.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                className="hover:text-gray-300 text-2xl"
              >
                <FaFacebook />
              </a>
             
              <a
                href="https://twitter.com"
                className="hover:text-gray-300 text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-gray-300 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-gray-300 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ml-0 lg:ml-20">
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-300 flex items-center space-x-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/updateProfile"
                  className="hover:text-gray-300 flex items-center space-x-2"
                >
                  Update Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/adventures"
                  className="hover:text-gray-300 flex items-center space-x-2"
                >
                  Adventures
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-300 flex items-center space-x-2"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-300 flex items-center space-x-2"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* last part  */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Stay Connected</h2>
            <p className="text-sm mb-4">
              Sign up for our newsletter to receive the latest updates on eco-adventures.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-3 rounded-md text-black focus:outline-none"
              />
              <button
                type="submit"
                className="w-full btn bg-lime-500 border-none hover:bg-green-600 text-white text-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm">
          <p>@ 2024 Eco Adventure. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
