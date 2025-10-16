import React from 'react'
import {team_data} from '../../assets/data'
import { FaCog, FaUsers, FaShoppingCart, FaHeadset } from "react-icons/fa";
const Moreaboutteam = () => {
  return (
    <div className='py-6 w-full h-full px-4 flex flex-col gap-4 justify-center items-center'>
    <div className="top flex flex-col gap-2 items-center justify-center">
        <h1 className='font-semibold text-3xl text-gray-800 font-[oswald]'>More About Our Team</h1>
        <p className='text-center text-gray-600'>Our Team Success is directly tied to the success of our respected clients.</p>
    </div>
    <div className="bottom  flex flex-wrap gap-4 md:gap-8 justify-center items-center">
        <div className="card m-1 flex flex-col gap-2 items-center justify-center shadow-2xl p-4 w-[90vw] md:w-[40vw] hover:scale-101  duration-300 transition-all">
            <div className="icon text-4xl text-red-700"><FaCog/></div>
            <h1 className='font-bold text-2xl text-red-700'>Operation Team</h1>
            <p className='text-gray-800 text-center w-[90%]'>The Operations Team at Ecom Pearls ensures that everything behind the scenes runs smoothly—turning client visions into reality. From product sourcing and supplier management to quality assurance and logistics, this team is the engine powering every successful private label project.</p>
        </div>

         <div className="card m-1 flex flex-col gap-2 items-center justify-center shadow-2xl p-4 w-[90vw] md:w-[40vw] hover:scale-101  duration-300 transition-all">
            <div className="icon text-4xl text-blue-700"><FaUsers/></div>
            <h1 className='font-bold text-2xl text-blue-700'>Managers Team</h1>
            <p className='text-gray-800 text-center w-[90%]'>At Ecom Pearls, our Managers Team ensures that every project runs smoothly and efficiently. They coordinate between departments, align goals with company strategy, and provide leadership that empowers teams to perform at their best. With a focus on accountability, planning, and execution, the Managers Team drives productivity and helps maintain a culture of excellence across the organization.</p>
        </div>
         <div className="card m-1 flex flex-col gap-2 items-center justify-center shadow-2xl p-4 w-[90vw] md:w-[40vw] hover:scale-101  duration-300 transition-all">
            <div className="icon text-4xl text-green-700"><FaShoppingCart/></div>
            <h1 className='font-bold text-2xl text-green-700'>Sales Team</h1>
            <p className='text-gray-800 text-center w-[90%]'>At Ecom Pearls, our Sales Team plays a pivotal role in growing the business by connecting with brands and entrepreneurs looking to launch or scale their private label products. With a deep understanding of market trends and client needs, the team delivers tailored solutions that help build successful, profitable brands on platforms like Amazon and more.</p>
        </div>
         <div className="card m-1 flex flex-col gap-2 items-center justify-center shadow-2xl p-4 w-[90vw] md:w-[40vw] hover:scale-101  duration-300 transition-all">
            <div className="icon text-4xl text-purple-700"><FaHeadset/></div>
            <h1 className='font-bold text-2xl text-purple-700'>Support Team</h1>
            <p className='text-gray-800 text-center w-[90%]'>At Ecom Pearls, our Support Team is dedicated to providing exceptional assistance to clients and partners at every stage of their journey. From resolving queries to offering guidance on processes, the team ensures a seamless experience that builds trust and satisfaction. Their commitment to quick, reliable, and empathetic support strengthens relationships and enables brands to focus on growth without operational hurdles.</p>
        </div>
        

    </div>
 
<div className='mt-5'>
    <h1 className='text-3xl lg:text-4lx font-bold text-gray-800 text-center py-5'>Our Team Members</h1>
     <div className="mt-10 flex flex-wrap justify-center items-center gap-10">
    {
        team_data.map((item , index)=>(
            <div key={index} className="flex flex-col gap-2 items-center justify-center w-[40%] md:w-[30%] lg:w-[20%] shadow-md hover:shadow-2xl rounded-2xl hover:scale-103 transition-all duration-300">
                <img src={item.image} alt="" className='object-cover h-25 w-25 rounded-full' />
                <h1 className='font-bold text-xl text-gray-800'>{item.name}</h1>
                <p className='text-gray-600'>{item.post}</p>
            </div>
        ))
    }
 </div>
</div>

    </div>
  )
}

export default Moreaboutteam