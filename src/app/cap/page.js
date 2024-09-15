
import React from "react";

import Link from "next/link";
import Image from "next/image";
import Container from "../../components/Container";
import {  FaStore } from "react-icons/fa"; 
import { AiOutlineStock } from "react-icons/ai"; 
import { IoIosStar } from "react-icons/io";
import { getManCap } from "../../helper";


const CapPage = async() => {
  const cap = await getManCap()
  return (
    <Container className={"py-10"}>
      <h1 className="text-2xl font-semibold text-black">All Trending Cap Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {cap.map((item) => (
          <div
            key={item.id}
            className="bg-[#ECEEF0] shadow-lg hover:shadow-black duration-500 rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <Link href={{ pathname: `/product/${item.id}`, query: { id: item.id } }}>
              <Image
                src={item.img}
                alt={item.name}
                height={200}
                width={200}
                className="object-cover mx-auto rounded-md bg-none"
              />
            </Link>
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{item.name.slice(0,10)}</h2>
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-bold text-gray-600">${item.price}</p>
                <div className="flex items-center text-yellow-500">
                  {Array.from({ length: item.ratings }, (_, index) => (
                    <IoIosStar key={index} className="text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({item.ratings})</span>
                </div>
              </div>
              <div className="flex items-center mt-2 justify-between">
               <div>
               <AiOutlineStock className={`mr-2 ${item.stock ? "text-green-500" : "text-red-500"}`} />
                <p className={`text-sm ${item.stock ? "text-green-500" : "text-red-500"}`}>
                  {item.stock ? "In Stock" : "Out of Stock"}
                </p>
               </div>
               <p>{item.stock}</p>
              </div>
              <div className="flex items-center mt-2">
                <FaStore className="mr-2 text-blue-600" />
                <p className="text-sm text-gray-600">Seller: {item.seller}</p>
              </div>
              <Link href={`/product/${item.id}`}>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CapPage