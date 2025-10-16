import React from 'react'
import Banner from '../components/Banner'
import Cta from '../components/Cta'
import Ceo from '../components/Team Page/Ceo'
import Moreaboutteam from '../components/Team Page/Moreaboutteam'
const Team = () => {
  return (
    <div className='w-full h-full py-6'>

      <Banner headline={'Our Team'} para={'Our Team focus only on your Growth and Success'}/>
      <Ceo/>
      <Moreaboutteam/>
      <Cta/>
    </div>

  )
}

export default Team