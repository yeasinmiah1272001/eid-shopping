import Link from 'next/link'
import React from 'react'

const SuccesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
      <h1 className="text-4xl font-bold text-green-500 mb-4">Success!</h1>
      <p className="text-lg text-gray-700 mb-6">Your Payment was successful. You can now explore our store.</p>
      <Link href="/">
        <p className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Go to Shopping
        </p>
      </Link>
    </div>
  </div>
  )
}

export default SuccesPage