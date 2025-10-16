import React from 'react'
import Banner from '../components/Banner'
import Cta from '../components/Cta'
import Ourservices from '../components/Homepage/Ourservies'
import Numbersection from '../components/Homepage/numbersection'
const Services = () => {
  return (
    <div className='w-full h-full py-6'>
    <Banner headline={'Our Services'} para={'How Our Amazon Experts Elevate Your Brand with Product Research, Sourcing, and Growth Strategies'}/>
    <Ourservices bg={'#fff'}/>
    <Numbersection/>
    <Cta/>
    </div>
  )
}

export default Services