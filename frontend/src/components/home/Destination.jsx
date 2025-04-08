import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { GoArrowBoth } from "react-icons/go";
const PopularDestinations = () => {
  // Destination data with image URLs
  const destinations = [
    {
      name: 'Dubai',
      price: '$1,637',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80'
    },
    {
      name: 'Europe',
      price: '$1,198',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80'
    },
    {
      name: 'Canada',
      price: '$682',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80'
    },
    {
      name: 'London',
      price: '$170',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80'
    },
    {
      name: 'Las Vegas',
      price: '$148',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80'
    }
  ];

  // Flight routes data
  const routes = [
    {
      date: '27 Oct 2004 - 04 Nov 2004',
      code: 'QRD',
      price: '$274.00',
      from: 'GP/HTE',
      to: 'Orlando',
      airline: '',
      image: '/images/latam.png'
    },
    {
      date: '27 Nov 2004 - 08 Dec 2004',
      code: 'SLC',
      price: '$305.00',
      from: 'GP/HTE',
      to: 'Salt Lake City',
      airline: '',
      image: '/images/latam.png'
    },
    {
      date: '27 Oct 2004 - 04 Nov 2004',
      code: 'SCLL',
      price: '$608.00',
      from: 'Santiago',
      to: 'Purita Avenue',
      airline: '',
      image: '/images/sprit.gif'
    },
    {
      date: '20 Nov 2004 - 30 Nov 2004',
      code: 'MEM',
      price: '$707.00',
      from: 'Memphis',
      to: 'Las Vegas',
      airline: '',
      image: '/images/latam.png'
    },
    {
      date: '22 Nov 2004 - 01 Dec 2004',
      code: 'ORL',
      price: '$271.22',
      from: 'NYC',
      to: 'New York',
      airline: 'UNITED',
      image: '/images/latam.png'
    },
    {
      date: '22 Nov 2004 - 01 Dec 2004',
      code: 'ORL',
      price: '$271.22',
      from: 'NYC',
      to: 'New York',
      airline: 'UNITED',
      image: '/images/latam.png'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-2xl font-bold text-gray-800 mb-2">Explore Our Popular Destination</p   >
          <p className="text-[16px] text-gray-600 max-w-4xl mx-auto">
            Explore your dream domestic and international destinations at the lowest airline today.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 mx-auto space-y-2 md:grid-cols-3 lg:grid-cols-5 max-w-4xl  mb-12">
          {destinations.map((dest, index) => (
            <div key={index} className="flex  flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{dest.name}</h3>
              <p className="text-blue-600 font-semibold">FARE FROM <span className='text-red-500 text-lg font-bold'>{dest.price}</span></p>
            </div>
          ))}
        </div>

        {/* Flight Routes */}
        <div className="mb-8 ">
          <h3 className="text-2xl font-bold  text-gray-800 mb-6 text-center">Domestic & International Routes</h3>
          <div className="grid grid-cols-1  mx-auto  max-w-5xl md:grid-cols-2 p-8  gap-6">
            {routes.map((route, index) => (
              <div key={index} className="border shadow-xl md:p-2  border-blue-600 rounded-lg  hover:shadow-md transition-shadow">
                <div className="flex sm:flex-row flex-col items-center  justify-around h-full text-center mb-4">
                  <div className="w-14 h-10   overflow-hidden ">
                    <img
                      src={route.image}
                      alt={route.to}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className=' w-[60%]'>
                    <p className="text-sm text-gray-500 ">{route.date}</p>
                    <div className="flex items-center  mt-1 w-full  justify-center space-x-10">
                      {/* {route.airline && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-2">
                        {route.airline}
                      </span>
                    )} */}
                      <span className="font-bold text-blue-600">{route.from}</span>
                      <GoArrowBoth size={30}/>
                      <span className="font-bold text-blue-600">{route.to}</span>

                    </div>

                  </div>
                  <div className="text-lg font-bold  text-red-600">
                    <div>

                      <p className=''>
                        {route.price}
                      </p>
                    </div>
                    <div className='flex justify-center'>
                      <FaArrowRight className='border rounded-full  p-1 text-bold' size={30} />
                    </div>
                  </div>
                </div>


              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;