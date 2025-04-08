import React, { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FlightBooking() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full flex justify-center items-center space-x-10 shadow-md">
      {/* Navbar */}
      <nav className="flex  w-full sm:justify-center sm:space-x-8 lg:space-x-20 justify-between  items-center border p-4 bg-white">
        {/* Logo */}
        <p className="text-2xl font-bold text-red-500 md:text-xl">Airflightcart</p>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-red-500">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-red-500">About Us</Link>
          <Link to="/" className="text-gray-700 hover:text-red-500">Travel</Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-500">Contact Us</Link>
        </div>

        {/* Helpline */}
        <div className="hidden md:flex items-center text-green-600 border-l border-gray-400 pl-2 font-bold">
          <img
            src="/images/helpline.jpg"
            alt="Helpline"
            className="rounded-full h-10 w-10 mr-3 object-cover"
          />
          <FaPhoneAlt className="mr-2" /> +1-888-928-1369
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <FaBars className="text-2xl text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center">
          <div className="bg-white w-4/5 p-6 rounded-lg shadow-lg text-center relative">
            {/* Close Button */}
            <button className="absolute top-4 right-4" onClick={closeMenu}>
              <FaTimes className="text-2xl text-gray-700" />
            </button>
            
            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-6 mt-6 text-lg">
              <Link to="/" className="text-gray-700 hover:text-red-500" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-500" onClick={closeMenu}>About Us</Link>
              <Link to="/" className="text-gray-700 hover:text-red-500" onClick={closeMenu}>Travel</Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-500" onClick={closeMenu}>Contact Us</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
