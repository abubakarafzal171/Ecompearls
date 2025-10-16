import React from 'react'
import Banner from '../components/Banner'
import OurcoreObjectives from '../components/Objective Page/OurcoreObjectives'
import HowWeAchieve from '../components/Objective Page/HowWeAchieve'
import Cta from '../components/Cta'

const Objective = () => {
  return (
    <div>
      <Banner headline={'Our Objective'} para={'Your Success is Our Mission'}/>
      <OurcoreObjectives/>
      <HowWeAchieve/>
      <Cta/>
    </div>
  )
}

export default Objective