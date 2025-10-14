import React from 'react'
import {images} from '../assets/data'
const Marqueesection = () => {
    const slogans = [
  "Grow Your Business ",
  "Drive More Sales ",
  "Expand Your Reach ",
  "Build Your Brand ",
  "Achieve Success ",
];

  return (
    <div className='w-full overflow-hidden'>
 <marquee
        behavior="scroll"
        direction="left"
        scrollamount="15" // speed control (zyada number = fast)
      >
        {slogans.map((slogan, index) => (
          <span
            key={index} 
            className="mx-8 text-5xl font-semibold text-gray-700"
          >
            {slogan}
          </span>
        ))}
          {slogans.map((slogan, index) => (
          <span
            key={index} 
            className="mx-8 text-5xl font-semibold text-gray-700"
          >
            {slogan}
          </span>
        ))}
      </marquee>
<div className="banner py-3">
<img src={images.banner_img} alt="banner img" className='object-cover'/>
</div>
    </div>
  )
}

export default Marqueesection