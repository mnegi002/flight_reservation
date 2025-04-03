import React from 'react';

const AboutUs = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container flex   mx-auto p-4">
        <div className="max-w-4xl  mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Airflightcart: Cheap Flight Ticket Booking Agency</h2>
          <p className="text-lg text-gray-600 mb-8">
            Airflightcart is your one-stop solution for all your travel and airline reservation issues. As a flight finder, we help you find the cheapest deals on flight tickets for your domestic as well as international travel to almost all major countries of America, Europe, Canada, and Asia.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Why choose Airflightcart?</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">We have a team of dedicated and experienced travel agents to help you manage your travel with cheap tickets.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">Our 24/7 customer support can help you book flights, change, or cancel flight tickets even at the last moment.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">With Airflightcart, you can book flight tickets at the lowest cost all year round. Yes, before you book a flight with any airline, make sure you visit the Airflightcart deals section and choose the deal that suits you the best.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">At Airflightcart, we understand that an emergency can occur at any point in time. Therefore, our flight deals are perfect for your last-minute flight booking.</span>
            </li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-gray-800">
              Also, if you need any help in browsing the website, feel free to call us at <span className="font-bold">1-888-928-1369</span>.
            </p>
          </div>
        </div>
        <div className=' flex justify-center items-center'>
            <img src='/images/1.png' alt='img'/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;