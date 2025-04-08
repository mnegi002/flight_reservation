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
          At AirlineBookingDeals, we take pride in being a trusted name in the flight booking industry. What sets us apart is our customer-first approach—focused on streamlining every step of your air travel booking experience. From competitive airfare pricing to smooth, tech-driven services, we aim to make booking flights simple, affordable, and hassle-free.          </p>
          <p className="text-gray-700 mb-4">
          Our platform is powered by advanced travel technology that enables us to handle every aspect of flight bookings seamlessly. Whether you're planning a domestic journey or flying overseas, we work with all major airlines to offer you reliable options at great prices. A minimal processing fee applies, ensuring transparency and value with every ticket you purchase.
          </p>
          {/* <p className="text-gray-700">
            We are continuously striving to make traveling a one-of-a-kind experience, and our fully automated travel solutions are just what you require. When working with travelers, lead time and timelines are crucial.
          </p> */}
        </div>

        <div className="max-w-6xl mx-auto p-6 mb-4  ">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-700 mb-4">
          At AirlineBookingDeals, we operate with a clear focus on professionalism, integrity, and service quality. Our team of experienced travel experts is guided by strong core values that reflect in the way we serve our customers.          </p>
          <p className="text-gray-700 mb-4">
          Over time, we've built a strong reputation within the travel community—earning the trust of both our customers and airline partners. Our growing presence in the market is a testament to the reliability and care we bring to every booking.
          </p>
          <p className="text-gray-700">
          We believe that <span className='font-bold'>travel is more than just a journey — it's an experience </span>, and it should begin stress-free. That's why our fully automated systems are designed to give you a fast, intuitive, and satisfying booking experience.
          </p>
        </div>
      </div>
    );
  }
