import { twMerge } from "tailwind-merge";


const AddToCartBtn = ({className}) => {
  return (
    <button className={twMerge("bg-transparent w-full border border-gray-500 text-black rounded-full px-6 py-1.5 hover:bg-white hover:text-black duration-300 my-2", className)}>
      Add To Cart
    </button>
  );
};

export default AddToCartBtn;
