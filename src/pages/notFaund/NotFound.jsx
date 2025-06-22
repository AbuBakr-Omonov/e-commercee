import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fefefe] px-4 text-center">
      <img
        src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif"
        alt="Not Found"
        className="w-full max-w-[400px] mb-6"
      />
      <h1 className="text-[32px] font-bold text-[#333] mb-2">Oops! Page not found.</h1>
      <p className="text-gray-600 text-lg mb-6">
        The page you are looking for might have been removed or doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-[#B88E2F] text-white font-semibold rounded-md shadow-md hover:bg-[#946d1e] transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
