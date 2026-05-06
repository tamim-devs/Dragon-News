import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-4">
      <div className="text-center bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full">
        <h1 className="text-7xl font-extrabold text-indigo-600">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mt-3">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
