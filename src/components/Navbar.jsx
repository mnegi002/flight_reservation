import React , { useState } from "react";
import { FaSearch, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

export default function FlightBooking() {
  const [tripType, setTripType] = useState("round");

  return (
    <div className="w-full flex justify-center items-center space-x-10 shadow-md">
      {/* Navbar */}
      <nav className="flex space-x-16 justify-between items-center p-4 bg-white ">
        <p className="text-2xl font-bold text-red-500">Airflightcart</p>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-red-500">Home</Link>
          <Link to="/about" className="text-gray-7ld00 hover:text-red-500">About Us</Link>
          <Link to="/" className="text-gray-700 hover:text-red-500">Travel</Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-500">Contact Us</Link>
        </div>
        <div className="flex items-center text-green-600 border-l border-gray-400 pl-2 font-bold">
            <img src="/images/helpline.jpg" alt="img" className="rounded-full h-10 w-10 mr-3   object-cover"/>
          <FaPhoneAlt className="mr-2" /> +1-888-928-1369
        </div>
      </nav>

      
    </div>
  );
}
