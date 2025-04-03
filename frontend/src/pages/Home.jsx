import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutUs from '../components/home/AboutFlight'
import PopularDestinations from '../components/home/Destination'
import Features from '../components/home/Features'

export default function Home() {
  return (
    <>
    <HeroSection/>
    <PopularDestinations/>
    <Features/>
    <AboutUs/>
    </>
  )
}
