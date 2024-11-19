import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ShadeProvider } from "./context/ShadeContext";
import AppContent from "./components/AppContent";

const App: React.FC = () => {
  return (
    <CartProvider>
      <ShadeProvider>
        <Router>
          <AppContent />
        </Router>
      </ShadeProvider>
    </CartProvider>
  );
};

export default App;
