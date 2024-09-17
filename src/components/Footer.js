import { FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcStripe } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 mt-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      
      {/* Company Information */}
      <div>
        <h2 className="text-xl font-bold mb-4">Company</h2>
        <p className="text-gray-400 mb-4">
          We are dedicated to bringing you the best shopping experience with a wide range of products and quality services.
        </p>
        <p className="text-gray-400">© 2024 YourCompany, All rights reserved.</p>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
        <ul className="space-y-2">
          <li>
           
              <p className="hover:underline text-gray-400">About Us</p>
          
          </li>
          <li>
          
              <p className="hover:underline text-gray-400">Contact Us</p>
          
          </li>
          <li>
           
              <p className="hover:underline text-gray-400">Privacy Policy</p>
            
          </li>
          <li>
          
              <p className="hover:underline text-gray-400">Terms & Conditions</p>
          
          </li>
        </ul>
      </div>

      {/* Customer Service */}
      <div>
        <h2 className="text-xl font-bold mb-4">Customer Service</h2>
        <ul className="space-y-2">
          <li>
           
              <p className="hover:underline text-gray-400">Shipping & Returns</p>
           
          </li>
          <li>
           
              <p className="hover:underline text-gray-400">Track Order</p>
          
          </li>
          <li>
            
              <p className="hover:underline text-gray-400">FAQs</p>
            
          </li>
          <li>
           
              <p className="hover:underline text-gray-400">Support Center</p>
           
          </li>
        </ul>
      </div>

      {/* Newsletter Signup */}
      <div>
        <h2 className="text-xl font-bold mb-4">Newsletter</h2>
        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
        <form className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-l-md focus:outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-white">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Payment Methods Section */}
    <div className="container mx-auto mt-8">
      <h2 className="text-lg font-bold mb-4 text-center">We Accept</h2>
      <div className="flex justify-center items-center space-x-6 py-4">
        {/* PayPal Icon */}
        <div className="hover:text-blue-500">
          <FaPaypal size={50} />
        </div>
        {/* Visa Icon */}
        <div className="hover:text-blue-500">
          <FaCcVisa size={50} />
        </div>
        {/* MasterCard Icon */}
        <div className="hover:text-blue-500">
          <FaCcMastercard size={50} />
        </div>
        {/* American Express Icon */}
        <div className="hover:text-blue-500">
          <FaCcAmex size={50} />
        </div>
        {/* Stripe Icon */}
        <div className="hover:text-blue-500">
          <FaCcStripe size={50} />
        </div>
      </div>
    </div>

  
  </footer>
  )
}

export default Footer