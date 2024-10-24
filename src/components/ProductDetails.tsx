import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useShade } from "../context/ShadeContext";
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa";
import { products } from "../data/products";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const { selectedShade, setSelectedShade } = useShade();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "description" | "ingredients" | "howToUse"
  >("description");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    const shadeToUse = selectedShade || product.shades[0].name;
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.images[0],
      shade: shadeToUse,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-black"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-600 text-lg mb-4">
                  {product.shortDescription}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">
                    ₹{(product.price / 100).toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ₹{(product.originalPrice / 100).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Shade Selection */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 transition-all hover:shadow-md">
                <h3 className="text-lg font-semibold mb-3">Shade Selection</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.shades.map((shade) => (
                    <button
                      key={shade.name}
                      onClick={() => setSelectedShade(shade.name)}
                      className={`w-8 h-8 rounded-full transition-all ${
                        selectedShade === shade.name
                          ? "ring-2 ring-black"
                          : "hover:ring-1 hover:ring-gray-300"
                      }`}
                      style={{ backgroundColor: shade.color }}
                      title={shade.name}
                    >
                      {selectedShade === shade.name && (
                        <FaCheck className="m-auto text-white text-xs" />
                      )}
                    </button>
                  ))}
                </div>
                {selectedShade && (
                  <div className="w-full animate-fadeIn">
                    <div className="bg-gray-100 p-4 rounded-md">
                      <img
                        src={`/src/assets${
                          product.shades.find((s) => s.name === selectedShade)
                            ?.img
                        }`}
                        alt={`${selectedShade} preview`}
                        className="w-full h-24 object-cover rounded-md mb-4"
                      />
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">Selected Shade</p>
                        <p className="text-lg font-semibold">{selectedShade}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-900">
                  Quantity
                </span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FaMinus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-center min-w-[3rem]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FaPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Add to Cart
              </button>

              {/* Product Details Tabs */}
              <div className="mt-8 border-t pt-8">
                <div className="flex space-x-8 border-b">
                  {(["description", "ingredients", "how To Use"] as const).map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() =>
                          setActiveTab(
                            tab.replace(/\s+/g, "") as
                              | "description"
                              | "ingredients"
                              | "howToUse"
                          )
                        }
                        className={`pb-4 text-sm font-medium ${
                          activeTab === tab.replace(/\s+/g, "")
                            ? "border-b-2 border-black text-black"
                            : "text-gray-500 hover:text-black"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    )
                  )}
                </div>
                <div className="py-6">
                  {activeTab === "description" && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">
                        Product Description
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {product.details.description}
                      </p>
                    </div>
                  )}
                  {activeTab === "ingredients" && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">
                        Ingredients
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {product.details.ingredients}
                      </p>
                      <p className="mt-4 text-sm text-gray-500 italic">
                        * Ingredients are subject to change. Always refer to the
                        product packaging for the most up-to-date ingredient
                        list.
                      </p>
                    </div>
                  )}
                  {activeTab === "howToUse" && (
                    <div className="space-y-6">
                      {product.details.howToUse.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <span className="text-sm font-semibold text-gray-700">
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="text-gray-700 leading-relaxed">
                              {step}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
