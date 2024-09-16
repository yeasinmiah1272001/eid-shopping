"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
import CartSummary from '../components/CartSummary'

const Cart = () => {
  const selector = useSelector((state) => state.name.cart);
  console.log("selector", selector);
  return (
    <div>
      <div className="overflow-x-auto mt-10">
        <h1 className="text-xl font-semibold text-black">
          Your Products Shopping Cart
        </h1>
        <table className="min-w-full bg-[#ECEEF0] border mt-5">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Remove</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Unit Price</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {selector.map((product) => (
              <tr key={product.id} className="text-center">
                <td className="px-4 py-2 border border-white">
                  <button className="text-red-500 hover:text-red-700">
                    <IoMdClose size={20} />
                  </button>
                </td>
                <td className="px-4 py-2 border border-white">
                  <Image
                    width={200}
                    height={200}
                    src={product.img}
                    alt={product.name}
                    className="w-20 mx-auto h-20 object-cover"
                  />
                </td>
                <td className="px-4 py-2 border border-white">
                  {product.name.slice(0, 10)}
                </td>
                <td className="px-4 py-2 border border-white">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-4 py-2 border border-white">
                  <div className="flex items-center justify-center">
                    <button className="px-2 py-1 text-white bg-gray-500 hover:bg-gray-700 rounded">
                      <FaMinus />
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button className="px-2 py-1 text-white bg-blue-500 hover:bg-blue-700 rounded">
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 border">
                  ${(product.price * product.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="  ">
        <button
          className={
            "bg-transparent border  border-gray-500 text-black rounded-lg px-6 py-1.5 hover:bg-red-500 hover:text-black duration-300 my-2"
          }
        >
          All Delete
        </button>
      </div>
      <div>
        <CartSummary/>

      </div>
    </div>
  );
};

export default Cart;
