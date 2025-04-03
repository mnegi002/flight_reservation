import React from 'react'

export default function About() {
    return (
      <div className="w-full">
        {/* Hero Section with Background Image */}
        <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/images/bgbanner.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
            About Us
          </div>
        </div>
  
        {/* About Content Section */}
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            We at Air Flight Cart are a well-known name in the airline ticket booking industry. The feature that distinguishes our Air Ticket Booking service is our strategy, which pays attention to every possible part of ticket booking. Our rates are very competitive, and our service level is simply unrivaled. Our air ticket booking systems have been developed to electronically process your every need using cutting-edge software.
          </p>
          <p className="text-gray-700 mb-4">
            We assist with the purchase of airline tickets on both domestic and foreign flights on major airlines. Both of our customers get prompt and efficient service. We are dedicated to doing business in a professional and ethical way. Our travel experts are motivated and driven by our guiding values, which allow us to serve a large range of customers.
          </p>
          <p className="text-gray-700">
            We are continuously striving to make traveling a one-of-a-kind experience, and our fully automated travel solutions are just what you require. When working with travelers, lead time and timelines are crucial.
          </p>
        </div>
      </div>
    );
  }
