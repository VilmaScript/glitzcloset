"use client";
import { useState } from "react";

const PriceRange = ({ minPrice = 0, maxPrice = 500, onChange }) => {
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  const handleChange = (e) => {
    const price = Number(e.target.value);
    setSelectedPrice(price);
    onChange([minPrice, price]); // Send selected range to parent
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-tertiary">Price Range</h3>

      {/* Display Selected Price */}
      <p className="text-sm text-gray-600 mb-3">
        Up to: <span className="font-semibold text-primary">${selectedPrice}</span>
      </p>

      {/* Range Slider */}
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        value={selectedPrice}
        onChange={handleChange}
        className="w-full outline-none h-1.5 rounded accent-primary appearance-none bg-transparent"
        style={{
          background: `linear-gradient(to right, #d1d5db ${((selectedPrice - minPrice) / (maxPrice - minPrice)) * 100}%, #e5e7eb 0%)`,
        }}
      />

      {/* Min & Max Labels */}
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span className="text-primary font-medium">${minPrice}</span>
        <span className="text-primary font-medium">${maxPrice}</span>
      </div>
    </div>
  );
};

export default PriceRange;
