import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const ShoppingCart: React.FC = () => {
  const { cart, removeFromCart, clearCart, getTotalCost, updateQuantity } =
    useCart();
  const [showModal, setShowModal] = useState(false);

  const ComingSoonModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
        <p className="text-gray-600 mb-6">
          We're working hard to implement the checkout process. Please check
          back later!
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {showModal && <ComingSoonModal />}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-center">Shopping Cart</h1>
          <p className="text-gray-500 text-center mt-2">
            {cart.length} {cart.length === 1 ? "item" : "items"}
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-semibold mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-gray-800"
              >
                <FaArrowLeft className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {cart.map((item, index) => (
                  <div
                    key={item.id}
                    className={`p-6 ${
                      index !== cart.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      {/* Product Image */}
                      <div className="w-24 h-24 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold mb-1">
                              {item.name}
                            </h3>
                            <p className="text-gray-500 text-sm mb-2">
                              Shade: {item.shade}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                            aria-label="Remove item"
                          >
                            <FaTrash size={16} />
                          </button>
                        </div>

                        {/* Price and Quantity */}
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border border-gray-200 rounded-lg">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                              className="p-2 hover:bg-gray-50 transition-colors duration-200"
                            >
                              <FaMinus size={12} />
                            </button>
                            <span className="px-4 py-2 text-center min-w-[3rem]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-2 hover:bg-gray-50 transition-colors duration-200"
                            >
                              <FaPlus size={12} />
                            </button>
                          </div>
                          <span className="font-semibold">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">
                      ₹{getTotalCost().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold">
                        ₹{getTotalCost().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowModal(true)}
                  className="w-full bg-black text-white py-3 rounded-lg font-medium mb-4 hover:bg-gray-800 transition-colors duration-300"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={clearCart}
                  className="w-full bg-white text-black border border-black py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300"
                >
                  Clear Cart
                </button>
              </div>

              <Link
                to="/"
                className="inline-flex items-center text-gray-600 hover:text-black mt-6 transition-colors duration-200"
              >
                <FaArrowLeft className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
