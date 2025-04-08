import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 w-full text-white ">
      <div className="  w-full">
        {/* Quick Links */}
        <div className="mb-8 px-4 sm:px-40 pt-4">
          <h3 className="text-lg font-bold mb-4 uppercase">Quick Links</h3>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
            <Link to="/about" className="text-white transition">About Us</Link>
            <a href="#" className="text-white transition">Disclaimer</a>
            <a href='#' className="text-white transition">Privacy Policy</a>
            <a href='#'className="text-white transition">Terms & Conditions</a>
            <a href='#' className="text-white transition">Cancellation & Refund Policy</a>
            <a href='#' className="text-white transition">Site Map</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-8 sm:px-40 px-4 ">
          <h3 className="text-lg font-bold mb-4 uppercase">Contact Info</h3>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
            <div className="flex items-center gap-2">
              <FaGlobe className="text-white" />
              <span>10540 Little Patuxent Pkwy ste 300, Columbia, MD 21044, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-white" />
              <a href="tel:+1-888-928-1369" className="text-white transition">+1-888-928-1369</a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <a href="mailto:info@airflightcart.us" className="text-white transition">info@airflightcart.us</a>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-white" />
              <a href="https://airflightcart.us" target="_blank" rel="noopener noreferrer" className="text-white transition">airflightcart.us</a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-6 text-sm sm:px-40 px-4 text-white">
            <p className='text-lg font-bold mb-4 uppercase'>Disclaimer</p>
          <p>
            Air Flight Cart is a travel reservations portal in the United States. We don't have any subsidiary or sister company. 
            We are working as independent travel agents to sell travel products and services. Our company is not responsible 
            for any kind of loss or damage by using this website or by browsing the Air Flight Cart.
          </p>
        </div>
        <div className='bg-white flex items-center justify-center sm:space-x-5 space-x-1 p-2'>
            <img src='/images/6.png' alt='card'/>
            <img src='/images/7.png' alt='card'/>

            <img src='/images/8.png' alt='card'/>

            <img src='/images/9.png' alt='card'/>

        </div>
        {/* Copyright */}
        <div className="flex items-center gap-2 p-4 justify-center text-xs text-white">
          <FaCopyright />
          <span>Copyright © 2025 Airflightcart.us is a unit of Airflightcart LLC. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;