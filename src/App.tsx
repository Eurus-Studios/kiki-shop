import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import ProductDetails from "./components/ProductDetails";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import ShoppingCart from "./components/ShoppingCart";
import { CartProvider } from "./context/CartContext";
import ShadeFinder from "./components/ShadeFinder";
import { ShadeProvider } from "./context/ShadeContext";
import BlogsPage from "./components/BlogsPage";
import BlogPage from "./components/BlogPage";
import ScrollToTop from "./components/ScrollToTop";
import OurStory from "./components/OurStory";

const App: React.FC = () => {
  return (
    <CartProvider>
      <ShadeProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-white font-sans">
            <Navbar />
            <main className="flex-grow w-full">
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/shade-finder" element={<ShadeFinder />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/blog/:id" element={<BlogPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ShadeProvider>
    </CartProvider>
  );
};

export default App;
