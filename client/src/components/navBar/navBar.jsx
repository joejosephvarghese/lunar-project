import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import Logo from "../../assets/9993da1c19e6bd81bcd4db894d8b1d59.png";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a token exists in local storage
    const token = localStorage.getItem("token");
    if (token) {
      // Decode token to extract user details
      const decodedToken = atob(token.split('.')[1]);
      const userData = JSON.parse(decodedToken);
      setUser(userData);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

 

  return (
    <div className="bg-white shadow-md h-24">
      <div className="container mx-auto flex items-center justify-between mr-72">
        {/* Logo */}
        <a href="/">
          <img className="w-28 h-28" src={Logo} alt="Logo" />
        </a>
        
        {/* Search */}
        <div className="relative">
          <input
            className="bg-gray-100 rounded-md w-11/12 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-64"
            type="text"
            placeholder="What are you looking for?"
          />
          <FaSearch className="absolute top-3 left-96 text-gray-400" />
        </div>
        
        {/* Conditional rendering based on user existence */}
        {user ? (
          // If user exists, render user details and logout buttons separately
          <nav className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaRegUser className="w-6 h-6 mr-1" />
            <span className="mt-2">{user.email}</span>
          </div>
          <button className="hidden md:flex space-x-12 text-black hover:rounded-md hover:bg-red-600 py-2 px-4 transition duration-300 items-center ml-9" onClick={handleLogout}>
            Logout
          </button>
        </nav>
        ) : (
          // If user doesn't exist, render login button
          <Link to="/login" className="text-black hover:rounded-md hover:bg-red-600 py-2 px-4 transition duration-300">
            Login
          </Link>
        )}
        
        {/* Navigation Links - Example */}
        <nav className="hidden md:flex space-x-12">
          <button >
            <IoCartOutline className="w-6 h-6 focus:outline-none" />
          </button>
          <button >
            <GrFavorite className="w-6 h-6 focus:outline-none "  />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
