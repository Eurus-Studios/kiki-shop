import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash, FaArrowLeft } from "react-icons/fa";

const ShoppingCart: React.FC = () => {
  const { cart, removeFromCart, clearCart, getTotalCost } = useCart();

  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Your Shopping Cart
        </h1>
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-xl mb-8">Your cart is empty.</p>
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 text-sm font-medium transition-colors duration-300 ease-in-out hover:bg-gray-800"
            >
              <FaArrowLeft className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-8">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-200 pb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover mr-6"
                    />
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        {item.name}
                      </h2>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-xl font-bold mr-8">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-black transition-colors duration-300"
                      aria-label="Remove item"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-end">
              <p className="text-2xl font-bold mb-6">
                Total: ${getTotalCost().toFixed(2)}
              </p>
              <div className="space-x-4">
                <button
                  onClick={clearCart}
                  className="bg-white text-black border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Clear Cart
                </button>
                <button
                  onClick={() =>
                    alert("Checkout functionality not implemented")
                  }
                  className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                >
                  Checkout
                </button>
              </div>
            </div>
            <div className="mt-12">
              <Link
                to="/"
                className="inline-flex items-center text-black hover:text-gray-600 transition-colors duration-300"
              >
                <FaArrowLeft className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
