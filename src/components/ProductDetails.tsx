import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="product-details bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>
      <p className="text-lg mb-4">Product ID: {id}</p>
      {/* Add more product details here */}
      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Back to Shop
      </Link>
    </div>
  );
};

export default ProductDetails;
