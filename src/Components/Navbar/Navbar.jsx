import logo from "../../assets/svgviewer-png-output.png";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 lg:px-14 bg-white">
      <div className="flex items-center justify-between py-4">
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <a href="/">
            <img className="h-10 w-auto" src={logo} alt="Genius Car" />
          </a>
          <h1 className="font-bold text-[#444444] text-lg">Car Doctor</h1>
        </div>

        {/* Center - Navbar Links (Hidden on Mobile) */}
        <ul className="hidden lg:flex space-x-6 text-lg font-semibold text-[#444444]">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Right - Icons & Button */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-3 text-2xl text-[#444444]">
            <IoBagHandleOutline />
            <CiSearch />
          </div>

          <AnimatedButton text="Appointment" primaryColor="#FF3811" extraClasses="bg-white lg:block hidden" />
          
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-8 6h8"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col items-center space-y-4 py-4 text-lg font-semibold text-[#444444] bg-gray-100 rounded-md shadow-md">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <AnimatedButton text="Appointment" primaryColor="#FF3811" extraClasses="bg-white" />
        </ul>
      )}
    </div>
  );
};

export default Navbar;
