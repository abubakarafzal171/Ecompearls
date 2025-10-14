import React from 'react'
import HeroSection from '../components/Homepage/HeroSection'
import Marqueesection from '../components/Homepage/Marqueesection'
import Aboutsection from '../components/Homepage/Aboutsection'
import Ourservies from '../components/Homepage/Ourservies'
import Numbersection from '../components/Homepage/numbersection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Marqueesection/>
      <Aboutsection/>
      <Ourservies/>
      <Numbersection/>
    </div>
 

  )
}

export default Home