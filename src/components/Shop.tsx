import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import product1Image from "../assets/product1.png";
import product2Image from "../assets/product2.png";
import { FaSearch } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  image: string;
  category: string;
  isNewArrival: boolean;
}

const Shop: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showNewArrivals, setShowNewArrivals] = useState(false);

  // Mock product data
  const allProducts: Product[] = [
    {
      id: 1,
      name: "Radiant Foundation",
      price: 39.99,
      rating: 4.5,
      description:
        "Achieve a flawless, luminous complexion with our lightweight formula.",
      image: product1Image,
      category: "face",
      isNewArrival: true,
    },
    {
      id: 2,
      name: "Velvet Matte Lipstick",
      price: 24.99,
      rating: 4.8,
      description:
        "Long-lasting, creamy matte lipstick for bold, beautiful lips.",
      image: product2Image,
      category: "lips",
      isNewArrival: false,
    },
    {
      id: 3,
      name: "Glow Highlighter",
      price: 29.99,
      rating: 4.7,
      description:
        "Illuminate your features with our silky-smooth highlighter.",
      image: product1Image,
      category: "face",
      isNewArrival: false,
    },
    {
      id: 4,
      name: "Smokey Eye Palette",
      price: 49.99,
      rating: 4.6,
      description:
        "Create sultry, dramatic looks with our versatile eyeshadow palette.",
      image: product2Image,
      category: "eyes",
      isNewArrival: true,
    },
    {
      id: 5,
      name: "Volumizing Mascara",
      price: 19.99,
      rating: 4.4,
      description:
        "Achieve lush, voluminous lashes with our smudge-proof formula.",
      image: product1Image,
      category: "eyes",
      isNewArrival: false,
    },
    {
      id: 6,
      name: "Hydrating Lip Gloss",
      price: 17.99,
      rating: 4.3,
      description:
        "Add a glossy shine while nourishing your lips with our hydrating formula.",
      image: product2Image,
      category: "lips",
      isNewArrival: false,
    },
  ];

  const filteredProducts = allProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "all" || product.category === selectedCategory) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (!showNewArrivals || product.isNewArrival)
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  const categories = [
    "all",
    ...new Set(allProducts.map((product) => product.category)),
  ];

  return (
    <div className="shop bg-white w-full">
      <div className="flex flex-col lg:flex-row">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          showNewArrivals={showNewArrivals}
          setShowNewArrivals={setShowNewArrivals}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          categories={categories}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
        <div className="lg:flex-grow p-6">
          <div className="mb-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white border-b-2 border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500 mt-8 text-lg">
              No products found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t border-l border-gray-200">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border-r border-b border-gray-200"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
