import React from "react";
import {
  FaSortAmountDown,
  FaSortAmountUp,
  FaTags,
  FaFilter,
  FaDollarSign,
  FaStarHalfAlt,
} from "react-icons/fa";

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  showNewArrivals: boolean;
  setShowNewArrivals: (show: boolean) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
  categories: string[];
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  showNewArrivals,
  setShowNewArrivals,
  sortOrder,
  setSortOrder,
  categories,
  showFilters,
  setShowFilters,
}) => {
  return (
    <div className="lg:w-1/4 border-r border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-black">Filters</h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden text-black hover:text-gray-600 transition-colors duration-300"
          >
            <FaFilter size={20} />
          </button>
        </div>
        <div className={`${showFilters ? "block" : "hidden lg:block"}`}>
          <div className="mb-6">
            <label className="flex items-center text-sm font-medium text-black mb-2">
              <FaTags className="mr-2 text-gray-600" />
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="flex items-center text-sm font-medium text-black mb-2">
              <FaDollarSign className="mr-2 text-gray-600" />
              Price Range
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-1/2 px-3 py-2 bg-white border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-1/2 px-3 py-2 bg-white border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="flex items-center text-sm font-medium text-black mb-2">
              <FaSortAmountDown className="mr-2 text-gray-600" />
              Sort by Price
            </label>
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="w-full px-3 py-2 bg-white border border-gray-300 focus:outline-none focus:border-black text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
            >
              <span>
                {sortOrder === "asc"
                  ? "Lowest to Highest"
                  : "Highest to Lowest"}
              </span>
              {sortOrder === "asc" ? (
                <FaSortAmountUp className="text-gray-600" />
              ) : (
                <FaSortAmountDown className="text-gray-600" />
              )}
            </button>
          </div>
          <div className="mb-6">
            <label className="flex items-center text-sm font-medium text-black mb-2">
              <FaStarHalfAlt className="mr-2 text-gray-600" />
              New Arrivals
            </label>
            <button
              onClick={() => setShowNewArrivals(!showNewArrivals)}
              className={`w-full px-4 py-2 text-sm font-medium ${
                showNewArrivals
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300"
              } transition-colors duration-300`}
            >
              {showNewArrivals ? "Show All" : "New Arrivals Only"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
