import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
import PageTransitionWrapper from "./PageTransitionWrapper";

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
        <motion.main
          className="flex-grow w-full overflow-hidden"
          style={{
            isolation: "isolate",
            perspective: "3000px",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            WebkitFontSmoothing: "antialiased",
          }}
          animate={{
            opacity: isNavigating ? 0.95 : 1,
            scale: isNavigating ? 0.985 : 1,
            filter: isNavigating
              ? "blur(3px) brightness(0.95)"
              : "blur(0px) brightness(1)",
            y: isNavigating ? -8 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.6, 0, 0.2, 1],
          }}
        >
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => {
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
          >
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransitionWrapper>
                    <Shop />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <PageTransitionWrapper>
                    <ProductDetails />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/privacy-policy"
                element={
                  <PageTransitionWrapper>
                    <PrivacyPolicy />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/cart"
                element={
                  <PageTransitionWrapper>
                    <ShoppingCart />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/shade-finder"
                element={
                  <PageTransitionWrapper>
                    <ShadeFinder />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/our-story"
                element={
                  <PageTransitionWrapper>
                    <OurStory />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/blogs"
                element={
                  <PageTransitionWrapper>
                    <BlogsPage />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/blog/:id"
                element={
                  <PageTransitionWrapper>
                    <BlogPage />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/terms"
                element={
                  <PageTransitionWrapper>
                    <TermsAndConditions />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/returns-and-exchange"
                element={
                  <PageTransitionWrapper>
                    <ReturnsAndExchange />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/faqs"
                element={
                  <PageTransitionWrapper>
                    <FAQs />
                  </PageTransitionWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default AppContent;
