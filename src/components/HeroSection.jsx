import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";
import { LuAppWindowMac } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import hero_img from '../assets/images/hero_img.jpg'
const HeroSection = () => {
  return (
   <>
    <div className=' w-full h-[85vh] flex flex-col md:flex-row justify-between gap-6 p-10  '
    >
        <div className="left flex flex-col gap-6 justify-center md:w-[50%]">
         <h1 className='text-5xl md:text-7xl lg:text-10xl font-bold font-[parata] md:leading-25'>Driving Sustainable Growth</h1>
         <p className='text-lg text-gray-800 w-[100%] lg:w-[60%]'>Get Proffessional E-commerce Services from our Team Experts that help you to grow your business</p>
         <button className='rounded bg-black text-white font-[oswald] w-[180px] h-[40px] cursor-pointer hover:border-black border hover:bg-white hover:text-black transition-all duration-200'>Get Started</button>
         <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-start pt-10 ">
            <div className="flex  gap-2 items-center">
                <div className="icon  text-4xl"><MdOutlineSecurity /></div>
                <div className="details text-sm md:text-base text-gray-800">Speed & <br />Security</div>
            </div>
            <div className="flex  gap-2 items-center">
                <div className="icon text-4xl "><LuAppWindowMac /></div>
                <div className="details text-sm md:text-base text-gray-800">Flexibilty & <br /> Scalability</div>
            </div>
            <div className="flex  gap-2 items-center">
                <div className="icon text-4xl "><RiTeamFill /></div>
                <div className="details text-sm md:text-base text-gray-800">Better Collaboration</div>
            </div>
         </div>
        </div>
        <div className="right   md:w-[50%] flex justify-center items-center">
            <img src={hero_img} alt="image" className='lg:h-[500px] w-[850px] rounded' />
        </div>
    </div>
   </>
  )
}

export default HeroSection