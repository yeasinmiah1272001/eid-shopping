"use client"

import Container from "../../components/Container";

import { getBottle } from "../../helper";
import Link from "next/link";
import Image from "next/image";

import {  FaStore } from "react-icons/fa"; 
import { AiOutlineStock } from "react-icons/ai"; 
import { IoIosStar } from "react-icons/io";
import AddToCartBtn from "../../components/AddToCartBtn";
import ProductsCard from "../../components/ProductsCard";

const BottlePage =  async() => {
  const product = await getBottle()


  return (
    <div>
     <Container className={"py-10"}>
      <h1 className="text-2xl font-semibold text-black">All Trending Bottle Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {product.map((item) => (
          <ProductsCard product={item}/>
        ))}
      </div>
    </Container>

    </div>
 
  );
};

export default BottlePage;
