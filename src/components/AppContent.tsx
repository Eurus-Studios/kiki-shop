import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Shop from "./Shop";
import ProductDetails from "./ProductDetails";
import PrivacyPolicy from "./PrivacyPolicy";
import ShoppingCart from "./ShoppingCart";
import ShadeFinder from "./ShadeFinder";
import BlogsPage from "./BlogsPage";
import BlogPage from "./BlogPage";
import ScrollToTop from "./ScrollToTop";
import OurStory from "./OurStory";
import TermsAndConditions from "./TermsAndConditions";
import ReturnsAndExchange from "./ReturnsAndExchange";
import FAQs from "./FAQs";

const AppContent: React.FC = () => {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/"]');

    const preloadLink = (url: string) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = url;
      document.head.appendChild(link);
    };

    const handleNavigation = () => {
      setIsNavigating(true);
      setTimeout(() => setIsNavigating(false), 1000);
    };

    links.forEach((link) => {
      if (link instanceof HTMLAnchorElement) {
        link.addEventListener("mouseenter", () => preloadLink(link.href));
        link.addEventListener("click", handleNavigation);
      }
    });

    return () => {
      links.forEach((link) => {
        if (link instanceof HTMLAnchorElement) {
          link.removeEventListener("click", handleNavigation);
        }
      });
    };
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white font-sans">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/shade-finder" element={<ShadeFinder />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route
              path="/returns-and-exchange"
              element={<ReturnsAndExchange />}
            />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AppContent;
