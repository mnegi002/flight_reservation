

import React, { useState } from 'react';
import { IoCallSharp } from "react-icons/io5";
import FlightComp from './FlightComp';

const HeroSection  = () => {
  const [formData, setFormData] = useState({
    tripType: 'round-trip',
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    class: 'economy'
  });

  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle flight search logic here
    console.log('Searching flights:', formData);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing with email:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Background Image */}
      <div 
        className="relative flex-grow  bg-cover bg-center"
       
      >
        <div className="absolute inset-0 opacity-95"  style={{ backgroundImage: "url('/images/newbg.jpg')" }}></div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <p className="text-xl  font-semibold text-white mb-4">
              Book Now. Enjoy Your Trip Later.
            </p>
            {/* <p className="text-xl text-white mb-8">
              Discover amazing destinations at unbeatable prices
            </p> */}
            <div className="flex text-white text-2xl w-full items-center justify-center  px-4 py-2  font-bold">
            <IoCallSharp className=' p-2 rounded-full bg-red-500 mr-4' size={40}/>
              FOR PHONE-ONLY FLIGHT DEALS, CALL <span className='text-red-500 ml-2'>+1-888-928-1369</span>
            </div>
          </div>

          <FlightComp/>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="bg-gray-100 py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-cover bg-center hidden md:block" 
                   style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
              </div>
              <div className="p-8 md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Get special offers, and more from Traveler
                </h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to see secret deals prices drop the moment you sign up!
                </p>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter Your Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  />
                  <p
                    type="submit"
                    className="w-full  cursor-pointer bg-red-600 text-white text-center rounded-lg font-semibold py-3 px-4  transition duration-200"
                  >
                    SUBSCRIBE
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
