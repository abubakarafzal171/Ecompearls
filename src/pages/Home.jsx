import React from 'react'
import HeroSection from '../components/Homepage/HeroSection'
import Marqueesection from '../components/Homepage/Marqueesection'
import Aboutsection from '../components/Homepage/Aboutsection'
import Ourservies from '../components/Homepage/Ourservies'
import Numbersection from '../components/Homepage/Numbersection'
import Whychoose from '../components/Homepage/Whychoose'
import FaqsandTestimonials from '../components/Homepage/FaqsandTestimonials'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Marqueesection/>
      <Aboutsection/>
        <Numbersection/>
      <Ourservies bg={'#FFA550'}/>
      <Whychoose/>
      <FaqsandTestimonials/>
    </div>
 

  )
}

export default Home