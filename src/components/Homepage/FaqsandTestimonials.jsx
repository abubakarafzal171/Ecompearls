import React from 'react'
import {heroData , faqs, testimonials} from '../../assets/data'

const FaqsandTestimonials = () => {
  return (
    <div className='bg-[#BCC5F2] w-full py-10 px-4'>

<div className="top flex flex-col md:flex-row gap-6 justify-between items-center md:px-12 mb-10">
    <div className="left flex flex-col gap-8 justify-end items-center">
        <h1 className='text-blue-800 text-3xl md:text-4xl lg:text-5xl font-bold'>Some Asked Questions</h1>
        <p className=' text-md md:text-lg text-blue-800 font-[outfit]'>Frequently Asked Question that will help you to clear your mind questions</p>
    </div>
    <div className="right flex justify-start items-center">
        <img src={heroData[4]} alt="" className='object-cover h-[300px] w-[500px] hover:scale-105 transition-all duration-300 rounded-xl md:relative md:bottom-45'/>
    </div>
</div>

<div className="mb-10">
    {
    faqs.map((item , i)=>{
        return <>
        <div 
        key={i}
        className='flex flex-col md:flex-row justify-start items-center gap-10 md:gap-16  px-2 hover:scale-101 p-8 rounded transition-all duration-200'>
<h1 className='font-bold text-5xl font-[oswald] text-blue-800'>{item.id}</h1>
<h2 className='font-bold text-xl lg:text-2xl text-blue-800'>{item.question}</h2>
<p className='text-blue-800 text-center text-base lg:text-xl'>{item.answer}</p>
</div>
<hr />
        </>
    })
}
</div>


<div className='flex flex-col gap-10 px-4 justify-center items-center pt-10'>
<div className="top flex flex-col gap-4 justify-center items-center">
    <h1 className='text-5xl md:text-6xl lg:text-7xl  font-[outfit] text-blue-800'>Testimonails</h1>
    <p className='text-lg md:text-xl text-blue-800'>Read What our Clients say about our company</p>
</div>

<div className="bottom flex flex-wrap gap-10 md:gap-20 justify-center items-center">
    {
        testimonials.map((item , index)=>(
            <div key={index} className='flex flex-col justify-center items-start gap-1 md:gap-3 w-[90%] md:w-[45%] lg:w-[30%]'>
        <img src={item.image} alt="" className='w-20 h-20 rounded-full'/>
        <div className="stars flex gap-1 text-xl text-amber-800">
            <div>&#9733;</div>
            <div>&#9733;</div>
            <div>&#9733;</div>
            <div>&#9733;</div>
            <div>&#9733;</div>
        </div>
        <p className='text-base lg:text-xl text-gray-800'>{item.feedback}</p>
        <h2 className='font-bold text-2xl'>{item.name}</h2>
        <h4 className='font-semibold text-sm text-blue-800'>{item.position}</h4>

    </div>
        ))
    }
</div>
</div>


    </div>
  )
}

export default FaqsandTestimonials