import React from "react";
import products from "./utils/product";

function ProductCard({ title, description, price, image }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">

      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
          >
            {/* Image */}
            <div className="bg-gray-100 p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                {product.title}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                Premium quality product with modern design and best performance.
              </p>

              {/* Button */}
              <button className="w-full mt-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;