import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Objective from './pages/Objective'
import Team from './pages/Team'
import Services from './pages/Services'
import Casestudies from './pages/Casestudies'
import Payments from './pages/Payments'
import Testimonials from './pages/Testimonials'
import About from './pages/About'
import Socials from './pages/Socials'
import Location from './pages/Location'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
<>
<Navbar/>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/objective' element={<Objective/>}/>
  <Route path='/team' element={<Team/>}/>
  <Route path='/services' element={<Services/>}/>
  <Route path='/casestudies' element={<Casestudies/>}/>
  <Route path='/payments' element={<Payments/>}/>
  <Route path='/testimonials' element={<Testimonials/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/socials' element={<Socials/>}/>
  <Route path='/location' element={<Location/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>

<Footer/>
</>
  )
}

export default App