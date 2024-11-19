import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider relative inline-block">
              Connect
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#E4AA81] transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <div className="flex space-x-6">
              {[
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaFacebook, label: "Facebook" },
                { Icon: FaTwitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-3xl hover:text-[#E4AA81] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Icon className="filter hover:drop-shadow-lg" />
                </a>
              ))}
            </div>

            <div className="mt-8 group">
              <h4 className="text-lg font-semibold mb-4 relative inline-block">
                Subscribe to our newsletter
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#E4AA81] transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-900 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#E4AA81] flex-grow"
                />
                <button className="bg-[#E4AA81] text-black px-6 py-2 rounded-r-lg hover:bg-[#d39b72] transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
