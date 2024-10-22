import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/kiki-white.png";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 w-full flex flex-col bg-black text-white z-50">
      <div className="flex justify-between p-2 md:p-6 items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="KIK Logo"
            className="h-8 md:h-8 lg:h-10 transition-transform duration-300 hover:scale-110 w-auto"
          />
        </div>
        <div className="hidden md:flex items-center space-x-6 md:space-x-10 text-sm md:text-base font-bold">
          <Link
            to="/bestsellers"
            className="hover:text-gray-300 transition-colors duration-300 border-b-2 border-transparent hover:border-gray-300 pb-1"
          >
            Bestsellers
          </Link>
          <Link
            to="/shop"
            className="hover:text-gray-300 transition-colors duration-300 border-b-2 border-transparent hover:border-gray-300 pb-1"
          >
            Shop By Category
          </Link>
          <Link
            to="/shade-finder"
            className="hover:text-gray-300 transition-colors duration-300 border-b-2 border-transparent hover:border-gray-300 pb-1"
          >
            Find your Shade
          </Link>
          <Link
            to="/blogs"
            className="hover:text-gray-300 transition-colors duration-300 border-b-2 border-transparent hover:border-gray-300 pb-1"
          >
            Blogs
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/our-story"
            className="px-4 py-2 bg-white text-black border-2 border-white rounded-full text-sm font-bold hover:bg-black hover:text-white transition-colors duration-300"
          >
            Our Story
          </Link>
          <Link
            to="/cart"
            className="px-4 py-2 bg-white text-black border-2 border-white rounded-full text-sm font-bold hover:bg-black hover:text-white transition-colors duration-300 flex items-center"
          >
            <FaShoppingCart className="mr-2" />
            Cart ({cart.length})
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-black w-full ${
          isMobileMenuOpen ? "block animate-fade-in-down" : "hidden"
        }`}
      >
        <div className="px-4 py-2 space-y-2">
          <Link
            to="/bestsellers"
            className="block px-4 py-3 text-base font-medium text-white hover:bg-white hover:text-black rounded-lg transition-all duration-300 ease-in-out"
          >
            Bestsellers
          </Link>
          <Link
            to="/shop"
            className="block px-4 py-3 text-base font-medium text-white hover:bg-white hover:text-black rounded-lg transition-all duration-300 ease-in-out"
          >
            Shop By Category
          </Link>
          <Link
            to="/shade-finder"
            className="block px-4 py-3 text-base font-medium text-white hover:bg-white hover:text-black rounded-lg transition-all duration-300 ease-in-out"
          >
            Find your Shade
          </Link>
          <Link
            to="/blogs"
            className="block px-4 py-3 text-base font-medium text-white hover:bg-white hover:text-black rounded-lg transition-all duration-300 ease-in-out"
          >
            Blogs
          </Link>
          <Link
            to="/cart"
            className="block px-4 py-3 text-base font-medium text-white hover:bg-white hover:text-black rounded-lg transition-all duration-300 ease-in-out"
          >
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
