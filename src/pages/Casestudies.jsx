import React from 'react'
import Banner from '../components/Banner'
import Aboutsection from '../components/Homepage/Aboutsection.jsx'
import Whychoose from '../components/Homepage/Whychoose.jsx'
import stats1 from '../assets/images/stats1.jpg'
import stats2 from '../assets/images/stats2.jpg'
import stats3 from '../assets/images/stats3.jpg'
import stats4 from '../assets/images/stats4.jpg'
import stats5 from '../assets/images/stats5.jpg'
import stats6 from '../assets/images/stats6.jpg'
import stats7 from '../assets/images/stats7.jpg'
import Cta from '../components/Cta'

const Casestudies = () => {
  return (
    <div className='w-full h-full py-6'>
      <Banner headline={'Case Studies'} para={'See how we launch, scale, and transform Amazon businesses with proven strategies'}/>
     <Aboutsection/>
     <Whychoose/>
    <div className=' mx-10 md:mx-50 my-5'>
       <img src={stats1} alt="" className='object-cover h-full w-full my-10'/>
     <img src={stats2} alt="" className='object-cover h-full w-full my-10'/>
     <img src={stats3} alt="" className='object-cover h-full w-full my-10'/>
     <img src={stats4} alt="" className='object-cover h-full w-full my-10'/>
     <img src={stats5} alt="" className='object-cover h-full w-full my-10'/>
     <img src={stats6} alt="" className='object-cover h-full w-full my-10'/>
     <img src={stats7} alt="" className='object-cover h-full w-full my-10'/>
    </div>

     <Cta/>
    </div>
  )
}

export default Casestudies