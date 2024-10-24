import logo from "../assets/kiki-beauty-white.png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-[#F9E7DA] py-16 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap justify-between items-start">
          {/* Brand Section */}
          <div className="w-full md:w-1/4 mb-12 md:mb-0 group">
            <img
              src={logo}
              alt="Kiki Beauty Logo"
              className="h-16 md:h-20 lg:h-24 w-auto mb-6 transition-all duration-500 group-hover:scale-105"
            />
            <p className="text-base font-medium italic transform transition-all duration-300 group-hover:translate-x-2">
              For the dusky daring and f*cking ravishing.
            </p>
          </div>

          {/* Shop Section */}
          <div className="w-full md:w-1/5 mb-10 md:mb-0">
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider relative inline-block">
              Shop
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#E4AA81] transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-3">
              {["New Arrivals", "Shop All"].map((item) => (
                <li key={item} className="group">
                  <a
                    href="#"
                    className="hover:text-[#E4AA81] transition-all duration-300 text-lg inline-flex items-center group-hover:translate-x-2 transform"
                  >
                    <span className="h-[1px] w-0 bg-[#E4AA81] mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="w-full md:w-1/5 mb-10 md:mb-0">
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider relative inline-block">
              Help
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#E4AA81] transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-3">
              {["Contact Us", "FAQs", "Shipping & Returns"].map((item) => (
                <li key={item} className="group">
                  <a
                    href="#"
                    className="hover:text-[#E4AA81] transition-all duration-300 text-lg inline-flex items-center group-hover:translate-x-2 transform"
                  >
                    <span className="h-[1px] w-0 bg-[#E4AA81] mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
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

            {/* Newsletter Section */}
            <div className="mt-8 group">
              <h4 className="text-lg font-semibold mb-4 relative inline-block">
                Subscribe to our newsletter
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#E4AA81] transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </h4>
              <form className="flex group">
                <input
                  disabled
                  type="email"
                  placeholder="Enter your email"
                  className="cursor-not-allowed bg-black/50 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#E4AA81] flex-grow border border-[#E4AA81]/20 transition-all duration-300 group-hover:border-[#E4AA81]/40"
                />
                <button
                  disabled
                  type="submit"
                  className="cursor-not-allowed bg-[#E4AA81] text-black px-6 py-2 rounded-r-lg font-bold hover:bg-[#F9E7DA] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#E4AA81]/20"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Section - Updated with Terms and Privacy links */}
        <div className="border-t border-[#E4AA81]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm opacity-75 hover:opacity-100 transition-opacity duration-300 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Kiki Beauty. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy-policy"
                className="text-sm hover:text-[#E4AA81] transition-all duration-300 group inline-flex items-center"
              >
                <span className="h-[1px] w-0 bg-[#E4AA81] mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="text-sm hover:text-[#E4AA81] transition-all duration-300 group inline-flex items-center"
              >
                <span className="h-[1px] w-0 bg-[#E4AA81] mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
