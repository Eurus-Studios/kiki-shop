import logo from "../assets/kiki-beauty-white.png";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaCheck,
  FaTimes,
  FaSpinner,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(""); // Reset error message
    try {
      const response = await axios.post(
        "https://api-sac6b737pq-uc.a.run.app/subscribe",
        { email }
      );
      if (response.status >= 200 && response.status < 300) {
        setStatus("success");
        setEmail(""); // Reset the input field
        setTimeout(() => setStatus("idle"), 3000); // Reset status after 3 seconds
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Subscription failed:", error);
      setStatus("error");
      // Extract error message
      if (axios.isAxiosError(error) && error.response) {
        setErrorMessage(error.response.data.message || "An error occurred.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
      setTimeout(() => setStatus("idle"), 3000); // Reset status after 3 seconds
    }
  };

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
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#E4AA81] transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </h4>
              <form className="flex group" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/50 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#E4AA81] flex-grow border border-[#E4AA81]/20 transition-all duration-300 group-hover:border-[#E4AA81]/40"
                  required
                  aria-label="Email address"
                />
                <motion.button
                  type="submit"
                  className={`px-6 py-2 rounded-r-lg font-bold transition-all duration-300 transform ${
                    status === "success"
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                      : status === "error"
                      ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                      : "bg-[#E4AA81] text-black hover:bg-[#F9E7DA] hover:scale-105 hover:shadow-lg hover:shadow-[#E4AA81]/20"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    scale: status === "success" ? 1.1 : 1,
                    rotate: status === "error" ? [0, -10, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <FaSpinner className="animate-spin" />
                  ) : status === "success" ? (
                    <div className="flex items-center">
                      <FaCheck className="mr-2" /> Subscribed!
                    </div>
                  ) : status === "error" ? (
                    <div className="flex items-center">
                      <FaTimes className="mr-2" /> Try Again
                    </div>
                  ) : (
                    "Subscribe"
                  )}
                </motion.button>
              </form>
              <div
                className="mt-2 text-sm"
                aria-live="polite"
                aria-atomic="true"
              >
                {status === "success" && (
                  <p className="text-green-500">Thank you for subscribing!</p>
                )}
                {status === "error" && (
                  <p className="text-red-500">{errorMessage}</p>
                )}
              </div>
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
