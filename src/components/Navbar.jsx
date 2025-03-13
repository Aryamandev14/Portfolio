import React from 'react'
import logo from "../assets/aryaman.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-20 h-15 rounded-2xl' src={logo} alt="Aryaman Logo"  />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/aryaman-kumar-071956318/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-800" />
      </a>
      <a href="https://github.com/Aryamandev14" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-3xl text-gray-800 hover:text-black" />
      </a>
      <a href="https://www.instagram.com/aryamankumar14_?igsh=bm1iNTZxaHFibTZx " target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700" />
      </a>
      <a href="https://leetcode.com/u/aryamandev14/" target="_blank" rel="noopener noreferrer">
      <SiLeetcode className="text-3xl text-orange-500 hover:text-orange-700" />
      </a>
        </div>
    </nav>
  )
}

export default Navbar