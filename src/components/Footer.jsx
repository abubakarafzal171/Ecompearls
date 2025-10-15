import React from 'react'
import { FiMail } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { BsBrowserChrome } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { ImOffice } from "react-icons/im";
const Footer = () => {
  return (
    <div className="w-full h-full py-10 px-6 md:px-16 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-gray-300">
      
      {/* Top Section */}
      <div className="top flex flex-col justify-center items-center md:items-start mb-16 text-center md:text-left">
        <Link to={'/'}>
          <img src="logo.png" alt="Logo" className="object-cover h-32 w-32 md:h-40 md:w-40 mb-4" />
        </Link>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-amber-400 tracking-wide drop-shadow-md">
          EcomPearls.com
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="bottom grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 py-8 border-t border-gray-600">
        
        {/* Contact */}
        <div className="contact flex flex-col gap-5 text-center md:text-left">
          <h1 className="font-bold text-2xl text-white">Reach out to Rises</h1>
          <div className="flex flex-col gap-3 text-lg">
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <FaPhone className="text-amber-400" />
              <p>+92 306 8141828</p>
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <FiMail className="text-amber-400" />
              <p>info@ecompearls.com</p>
            </div>
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <BsBrowserChrome className="text-amber-400" />
              <p>www.ecompearls.com</p>
            </div>
            <div className="flex gap-4  justify-center md:justify-start mt-3">
              <ImOffice className="text-amber-400 " />
              <p className='w-[50%]'>First Floor, Nadra Office, Chishtian Road Bahawalnagar, Punjab, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="links flex flex-col gap-4 text-center md:text-left">
          <h1 className="font-bold text-2xl text-white mb-2">Quick Links</h1>
          <Link className="hover:text-amber-400 transition-colors duration-200" to={'/objective'}>Our Objective</Link>
          <Link className="hover:text-amber-400 transition-colors duration-200" to={'/team'}>Our Team</Link>
          <Link className="hover:text-amber-400 transition-colors duration-200" to={'/services'}>All Services</Link>
          <Link className="hover:text-amber-400 transition-colors duration-200" to={'/casestudies'}>Case Studies</Link>
          <Link className="hover:text-amber-400 transition-colors duration-200" to={'/testimonials'}>Testimonials</Link>
          <Link className="hover:text-amber-400 transition-colors duration-200" to={'/contact'}>Contact Us</Link>
          <Link className="hover:text-amber-400 transition-colors duration-200" to={'/location'}>Location</Link>
        </div>

        {/* Socials */}
        <div className="socials flex flex-col gap-4 text-center md:text-left">
          <h1 className="font-bold text-2xl text-white mb-2">Social Links</h1>
          <div className="flex flex-col gap-3">
            <span className="text-lg hover:text-amber-400 cursor-pointer transition-colors duration-200">Facebook</span>
            <span className="text-lg hover:text-amber-400 cursor-pointer transition-colors duration-200">Twitter X</span>
            <span className="text-lg hover:text-amber-400 cursor-pointer transition-colors duration-200">TikTok</span>
            <span className="text-lg hover:text-amber-400 cursor-pointer transition-colors duration-200">Instagram</span>
            <span className="text-lg hover:text-amber-400 cursor-pointer transition-colors duration-200">LinkedIn</span>
            <span className="text-lg hover:text-amber-400 cursor-pointer transition-colors duration-200">YouTube</span>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        Made with ❤️ by Abubakar © 2025 EcomPearls.com — All rights reserved.
      </div>
    </div>
  )
}

export default Footer
