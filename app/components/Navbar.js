'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Menu & Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-6 bg-black/50 backdrop-blur-sm"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <Link 
          href="/"
          className="text-[#F67011] text-3xl font-regular"
        >
          Fortune Mthembu
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          <NavLinks />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm px-4 py-4 space-y-4">
          <NavLinks mobile />
        </div>
      )}
    </motion.nav>
  );
};

// Reusable Links
const NavLinks = ({ mobile }) => (
  <div className={mobile ? 'flex flex-col space-y-4' : 'flex space-x-12'}>
    <Link href="#Services" className="text-white text-lg font-light hover:text-gray-400">Services</Link>
    <Link href="#Projects" className="text-white text-lg font-light hover:text-gray-400">Projects</Link>
    <Link href="#Myprocess" className="text-white text-lg font-light hover:text-gray-400">My Process</Link>
    <Link href="#Tools" className="text-white text-lg font-light hover:text-gray-400">Tools</Link>
    <Link href="#Contact" className="text-white text-lg font-light hover:text-gray-400">Contact Me</Link>
  </div>
);

export default Navbar;
