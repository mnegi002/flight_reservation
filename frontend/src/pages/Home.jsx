import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutUs from '../components/home/AboutFlight'
import PopularDestinations from '../components/home/Destination'
import Features from '../components/home/Features'
import Flyer from '../components/home/Flyer'

export default function Home() {

  return (
    <>
    

    <Flyer />
    
    <HeroSection/>
    <PopularDestinations/>
    <Features/>
    <AboutUs/>
    </>
  )
}
