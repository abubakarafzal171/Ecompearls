import React from 'react'
const Banner = ({headline , para}) => {
  return (
    <div className='flex flex-col gap-4 text-white bg-gray-800 shadow-xl justify-center items-center px-2 h-[30vh] '>
        <h1 className='font-bold text-4xl uppercase lg:text-6xl'>{headline}</h1>
       <p className='font-semibold text-md lg:text-xl text-amber-300 text-center'>{para}</p>
    </div>
  )
}

export default Banner