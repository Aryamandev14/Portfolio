import React from 'react';
import logo from "../assets/aryaman.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Technologies", path: "/technologies" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className='mb-20 flex flex-wrap items-center justify-between py-6 px-4'>
      {/* Logo */}
      <div className='flex items-center flex-shrink-0'>
        <img className='mx-2 w-20 h-15 rounded-2xl cursor-pointer' src={logo} alt="Aryaman Logo" onClick={() => navigate('/')} />
      </div>

      {/* Navigation Links */}
      <div className='flex flex-wrap items-center gap-6 text-lg font-medium'>
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className='text-neutral-200 hover:text-purple-500 transition duration-300'
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Social Icons */}
      <div className='flex items-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/aryaman-kumar-071956318/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-800" />
        </a>
        <a href="https://github.com/Aryamandev14" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-gray-800 hover:text-black" />
        </a>
        <a href="https://www.instagram.com/aryamankumar14_?igsh=bm1iNTZxaHFibTZx" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700" />
        </a>
        <a href="https://leetcode.com/u/aryamandev14/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="text-3xl text-orange-500 hover:text-orange-700" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
