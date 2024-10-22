import logo from "../assets/kiki-beauty-white.png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-[#F9E7DA] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/4 mb-12 md:mb-0">
            <img
              src={logo}
              alt="Kiki Beauty Logo"
              className="h-16 md:h-20 lg:h-24 w-auto mb-6 transition-transform duration-300 hover:scale-105"
            />
            <p className="text-base font-medium italic">
              For the dusky daring and f*cking ravishing.
            </p>
          </div>
          <div className="w-full md:w-1/5 mb-10 md:mb-0">
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">
              Shop
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-[#E4AA81] transition-colors duration-300 text-lg"
                >
                  Bestsellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#E4AA81] transition-colors duration-300 text-lg"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#E4AA81] transition-colors duration-300 text-lg"
                >
                  Shop All
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-10 md:mb-0">
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">
              Help
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-[#E4AA81] transition-colors duration-300 text-lg"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#E4AA81] transition-colors duration-300 text-lg"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#E4AA81] transition-colors duration-300 text-lg"
                >
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-3xl hover:text-[#E4AA81] transition-colors duration-300 transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-3xl hover:text-[#E4AA81] transition-colors duration-300 transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-3xl hover:text-[#E4AA81] transition-colors duration-300 transform hover:scale-110"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">
                Subscribe to our newsletter
              </h4>
              <form className="flex">
                <input
                  disabled
                  type="email"
                  placeholder="Enter your email"
                  className="cursor-not-allowed text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#E4AA81] flex-grow"
                />
                <button
                  disabled
                  type="submit"
                  className="cursor-not-allowed bg-[#E4AA81] text-black px-6 py-2 rounded-r-lg font-bold hover:bg-[#F9E7DA] transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm">
            &copy; 2023 Kiki Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
