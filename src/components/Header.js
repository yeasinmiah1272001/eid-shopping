"use client";
import Link from "next/link";
import Container from "./Container";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const navbar = [
    { title: "Home", href: "/" },
    { title: "Mens Sneaker", href: "/mansneaker" },
    { title: "Mens Pants", href: "/pants" },
    { title: "Mens Boot", href: "/menboot" },
    { title: "Bag", href: "/bag" },
    { title: "Cap", href: "/cap" },
    { title: "Earphones", href: "/earphone" },
    { title: "Bottle", href: "/bottle" },
  ];

  return (
    <div className="bg-white sticky top-0 z-50  p-4 shadow-md">
      <Container className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Logo</h1>
        </div>

        <div className="flex gap-7">
          {navbar.map((item, index) => (
            <Link
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              key={index}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex gap-8">
          {/* Favorite Icon with Count */}
          <div className="relative">
            <FaHeart className="text-gray-700 hover:text-red-600 text-xl cursor-pointer transition-colors duration-300" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>

          {/* Cart Icon with Count */}
          <div className="relative">
            <FaShoppingCart className="text-gray-700 hover:text-blue-600 text-xl cursor-pointer transition-colors duration-300" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
