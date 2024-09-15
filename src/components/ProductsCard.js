"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { AiOutlineStock } from "react-icons/ai";
import { FaStore } from 'react-icons/fa'; // Added import for FaStore

const ProductsCard = ({ product }) => {
  return (
    <div>
      <div
        key={product.id}
        className="bg-[#ECEEF0] w-full shadow-lg hover:shadow-black duration-500 rounded-lg p-4 hover:shadow-lg transition-shadow"
      >
        <Link href={`/product/${product.id}`} passHref>
          <Image
            src={product.img}
            alt={product.name}
            width={200} // Set width
            height={200} // Set height
            className="object-cover mx-auto rounded-md bg-none h-48 w-full"
          />
        </Link>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{product.name.slice(0,10)}</h2>
          <div className="flex justify-between items-center mt-2">
            <p className="text-lg font-bold text-gray-600">${product.price}</p>
            <div className="flex items-center text-yellow-500">
              {Array.from({ length: product.ratings }, (_, index) => (
                <IoIosStar key={index} className="text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-gray-600">({product.ratings})</span>
            </div>
          </div>
          <div className="flex items-center mt-2 justify-between">
            <div className="flex items-center">
              <AiOutlineStock className={`mr-2 ${product.stock ? "text-green-500" : "text-red-500"}`} />
              <p className={`text-sm ${product.stock ? "text-green-500" : "text-red-500"}`}>
                {product.stock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
            <p className="text-sm">{product.stock}</p>
          </div>
          <div className="flex items-center mt-2">
            {/* <FaStore className="mr-2 text-blue-600" /> */}
            <p className="text-sm text-gray-600">Seller: {product.seller}</p>
          </div>
          <Link href={`/product/${product.id}`} passHref>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
