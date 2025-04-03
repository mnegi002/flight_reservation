import React from 'react'
import ContactSection from '../components/home/ContactSection'

export default function Contact() {
  return (
    <div className="w-full">
    {/* Hero Section with Background Image */}
    <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/images/bgbanner.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
        Contact Us
      </div>
    </div>

    {/* About Content Section */}
    <div className="max-w-6xl mx-auto p-6">
     <ContactSection/>
    </div>
  </div>
  )
}
