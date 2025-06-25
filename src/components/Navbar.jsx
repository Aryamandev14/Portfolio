import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../assets/aryaman.png";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Technologies", path: "/technologies" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="mb-10 border-b border-neutral-800 px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-2xl cursor-pointer"
            src={logo}
            alt="Aryaman Logo"
            onClick={() => navigate('/')}
          />
        </div>

        {/* Hamburger (Mobile) */}
        <div className="lg:hidden text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 text-lg font-medium">
          {navItems.map((item) => (
            <div key={item.path} className="flex flex-col items-center">
              <button
                onClick={() => navigate(item.path)}
                className={`transition duration-300 ${
                  location.pathname === item.path
                    ? "text-purple-500"
                    : "text-neutral-200 hover:text-purple-500"
                }`}
              >
                {item.label}
              </button>
              <hr
                className={`h-0.5 w-3/5 bg-purple-800 rounded-full mt-1 transition-all duration-300 ${
                  location.pathname === item.path ? "block" : "hidden"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/aryaman-kumar-071956318/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 hover:text-blue-800" />
          </a>
          <a href="https://github.com/Aryamandev14" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-300 hover:text-white" />
          </a>
          <a href="https://www.instagram.com/aryamankumar14_?igsh=bm1iNTZxaHFibTZx" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 hover:text-pink-700" />
          </a>
          <a href="https://leetcode.com/u/aryamandev14/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="text-orange-500 hover:text-orange-700" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col items-start gap-4 lg:hidden">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setMenuOpen(false);
              }}
              className={`text-lg ${
                location.pathname === item.path
                  ? "text-purple-500"
                  : "text-neutral-200 hover:text-purple-500"
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="flex gap-4 mt-4 text-2xl">
            <a href="https://www.linkedin.com/in/aryaman-kumar-071956318/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 hover:text-blue-800" />
            </a>
            <a href="https://github.com/Aryamandev14" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-300 hover:text-white" />
            </a>
            <a href="https://www.instagram.com/aryamankumar14_?igsh=bm1iNTZxaHFibTZx" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 hover:text-pink-700" />
            </a>
            <a href="https://leetcode.com/u/aryamandev14/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="text-orange-500 hover:text-orange-700" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
