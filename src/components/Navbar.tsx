import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Kiki Shop
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:text-gray-300">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms-and-conditions" className="hover:text-gray-300">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
