"use client";

import { useState, useEffect } from "react";
import { getData } from "../helper";
import ProductCard from "./ProductsCard";

const SideNav = () => {
  const endPoint = "https://shoppingapi.vercel.app/products";
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getData(endPoint);
      setProducts(productsData);
      setFilteredProducts(productsData);
    };

    fetchProducts();
  }, []);

  // Function to filter products
  const handleCategoryClick = (category) => {
    if (category === "All Products") {
      setFilteredProducts(products); // Show all products
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="flex">
      <div className="p-3 space-y-3 cursor-pointer gap-10  h-96 bg-white sticky top-28 z-50   shadow-md opacity-100">
        <h1 className="text-red-400 font-bold ">Category Filter</h1>
        <p
          onClick={() => handleCategoryClick("All Products")}
          className="text-black hover:underline"
        >
          All Products
        </p>
        <p
          onClick={() => handleCategoryClick("Men's Sneaker")}
          className="text-black hover:underline"
        >
          Mens Sneaker
        </p>
        <p
          onClick={() => handleCategoryClick("Men's Pants")}
          className="text-black hover:underline"
        >
          Mens Pants
        </p>
        <p
          onClick={() => handleCategoryClick("Men's Boot")}
          className="text-black hover:underline"
        >
          Mens Boot
        </p>
        <p
          onClick={() => handleCategoryClick("Bag")}
          className="text-black hover:underline"
        >
          Bag
        </p>
        <p
          onClick={() => handleCategoryClick("Cap")}
          className="text-black hover:underline"
        >
          Cap
        </p>
        <p
          onClick={() => handleCategoryClick("Earphones")}
          className="text-black hover:underline"
        >
          Earphones
        </p>
        <p
          onClick={() => handleCategoryClick("Bottle")}
          className="text-black hover:underline"
        >
          Bottle
        </p>
      </div>

      {/* Display the products in a card layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default SideNav;
