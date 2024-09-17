
import { IoIosStar } from 'react-icons/io'; // Import star icons for ratings
import { AiOutlineStock } from 'react-icons/ai'; // Stock icon for availability
import Image from 'next/image';
import Link from 'next/link';
import AddToCartbtn from './AddToCartbtn'; // Your AddToCart button component
import { FaHeart } from 'react-icons/fa';

const ProductCard = ({ product}) => {
  return (
    <div className="bg-[#ECEEF0] w-full shadow-lg relative hover:shadow-black duration-500 rounded-lg p-4 hover:shadow-lg transition-shadow">
      <Link href={{ pathname: `/product/${product.id}`, query: { id: product.id } }}>
        <Image
          src={product.img}
          alt={product.name}
          width={200}
          height={200}
          className="object-cover hover:scale-110 duration-500 mx-auto rounded-md bg-none h-48 w-full"
        />
      </Link>
      
      {/* Favourite Icon Section */}
      <div className='absolute top-5 right-5'>
        <p><FaHeart size={20}/></p>
      </div>
     

      <div className="mt-4">
        <h2 className="text-xl font-semibold">{product.name.slice(0, 10)}</h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold text-gray-600 line-through">${product.oldprice}</p>
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
          <p className="text-sm text-gray-600">Seller: {product.seller}</p>
        </div>

        <div>
          <AddToCartbtn product={product} className={"text-black"} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
