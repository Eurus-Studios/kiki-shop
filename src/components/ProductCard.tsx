import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  rating,
  description,
  image,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, name, price, quantity: 1, image });
  };

  return (
    <Link to={`/product/${id}`} className="block h-full">
      <div className="group relative bg-white transition-all duration-300 ease-in-out h-full flex flex-col cursor-pointer">
        <div className="relative aspect-w-1 aspect-h-1 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
          <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 text-xs font-semibold rounded-full">
            New
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-black group-hover:text-gray-700 transition-colors duration-300">
              {name}
            </h2>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-800 font-medium text-lg">
                ${price.toFixed(2)}
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <FaStar className="text-yellow-500 mr-1 w-4 h-4" />
                <span>{rating.toFixed(1)}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-500 transition-colors duration-300">
              {description}
            </p>
          </div>
          <div className="mt-4">
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center bg-white text-black border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 ease-in-out w-full"
              aria-label="Add to Cart"
            >
              <FaShoppingCart className="w-4 h-4 mr-2" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
