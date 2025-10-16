import React from 'react'
import ceo_img from '../../assets/images/ceo_img.png'
const Ceo = () => {
  return (
    <div className='flex flex-col md:flex-row gap-8 justify-between px-4 md:px-10 lg:px-15 w-full h-full'>
 <div className="left flex justify-center items-start flex-col gap-6 py-4 ">
 <h1 className='text-3xl md:text-4xl lg:text-5xl font-[oswald] text-gray-800'>About Our CEO</h1>
    <p className='text-gray-700 text-justify '>Mr. Tahir Saeed, an esteemed consultant and trainer in the realm of e-commerce pearls. With over a decade of dedicated experience in the broader e-commerce industry, including an impressive six years of specialization on the dynamic platform of Amazon, Mr. Saeed has emerged as a true expert in the field. Throughout his illustrious career, Mr. Tahir Saeed has collaborated with numerous renowned brands, playing a pivotal role in establishing and nurturing their Amazon business ventures. His comprehensive understanding of the e-commerce landscape, coupled with his sharp insights into Amazon’s ever-evolving dynamics, has enabled these brands to flourish and reach new heights of success. One of the hallmarks of Mr. Saeed’s remarkable journey is his passion for knowledge-sharing and mentorship. He has had the privilege of guiding thousands of aspiring students, all of whom are now actively engaged in the field of e-commerce. As a mentor, he is dedicated to imparting practical wisdom and time-tested strategies, Mr. Tahir Saeed’s invaluable contributions to the e-commerce community have earned him a reputation as a go-to resource for all things related to Amazon and e-commerce at large.</p>

    <div>
        <h1 className='font-bold text-2xl text-blue-700'>Tahir Saeed</h1>
        <p className='text-base text-gray-800'>Founder of ECOMPEARLS PVT LTD</p>
    </div>

 </div>
 <div className="right flex items-start justify-center">
    <img src={ceo_img} alt="" className='object-cover max-w-[400px] max-h-[400px]' />
 </div>
    </div>
  )
}

export default Ceo