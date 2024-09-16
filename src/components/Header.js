"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const pathname = usePathname();

  const selector = useSelector((state) => state.name.cart)
  // console.log("selector", selector)

  return (
    <div className="bg-white sticky top-0 z-50 p-4 shadow-md opacity-100">
      <Container className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold">Logo</h1>
        </div>

        {/* Navbar links - Hidden on small screens */}
        <div className="hidden md:flex gap-7">
          {navbar.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-blue-500 font-bold"
                  : "text-gray-700"
              } hover:text-blue-500 transition-colors duration-300`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Favorite and Cart Icons */}
        <div className="flex gap-8">
          <div className="relative">
            <FaHeart className="text-gray-700 hover:text-red-600 text-xl cursor-pointer transition-colors duration-300" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>

          <Link href={"/cart"} className="relative">
            <FaShoppingCart className="text-gray-700 hover:text-blue-600 text-xl cursor-pointer transition-colors duration-300" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">{selector.length > 0 ? selector.length : "0"}</span>
          </Link>

          {/* Hamburger Menu for mobile */}
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ) : (
              <FaBars
                className="text-2xl cursor-pointer"
                onClick={() => setIsMobileMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </Container>

      {/* Mobile menu - Toggle visibility */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          {navbar.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`block p-2 ${
                pathname === item.href
                  ? "text-blue-500 font-bold"
                  : "text-gray-700"
              } hover:text-blue-500 transition-colors duration-300`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
