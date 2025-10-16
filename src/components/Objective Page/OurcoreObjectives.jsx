import React from 'react'
import { FaChartLine, FaBoxOpen, FaShieldAlt, FaLightbulb, FaGlobe } from "react-icons/fa";

const OurcoreObjectives = () => {
  const objectives = [
  {
    title: "Client-Centric Growth",
    desc: "We aim to drive sustainable growth for our clients by leveraging data-driven Amazon strategies.",
    icon: <FaChartLine className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    title: "Ecommerce Excellence",
    desc: "Delivering optimized product listings, enhanced brand presence, and better conversions.",
    icon: <FaBoxOpen className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    title: "Transparency & Trust",
    desc: "Building long-term client relationships through honest communication and measurable results.",
    icon: <FaShieldAlt className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    title: "Innovation First",
    desc: "We adapt to the evolving ecommerce landscape, ensuring our clients always stay ahead.",
    icon: <FaLightbulb className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    title: "Global Expansion",
    desc: "Helping brands reach new markets by optimizing Amazon international channels.",
    icon: <FaGlobe className="w-12 h-12 text-blue-600 mb-4" />,
  },
];

  return (
    <div className='w-full h-full py-6 px-4'>
      <h1 className='text-3xl font-bold py-6 pl-10 uppercase text-gray-800'>Our Core Objectives</h1>
<div className='flex flex-wrap gap-10 justify-center items-center'>

  {
    objectives.map((item ,index)=>(
      <div key={index} className="flex flex-col gap-2 justify-center items-start w-[90%] sm:w-[90%] md:w-[45%] lg:w-[30%] shadow-2xl p-6 hover:scale-102 transition-all duration-300">
    <div className="icon text-5xl text-green-600">{item.icon}</div>
    <h1 className='font-bold text-2xl md:text-3xl font-[outfit]'>{item.title}</h1>
    <p className='w-[80%] text-gray-800 font-[outfit text-justify]'>{item.desc}</p>
</div>
    ))
  }
</div>
    </div>
  )
}

export default OurcoreObjectives