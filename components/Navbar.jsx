"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <nav className="bg-[#0a192f] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
        <motion.button
      onClick={() => setIsOpen(!isOpen)}
      className="focus:outline-none"
      initial={{ rotate: 0 }}
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </motion.button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-purple-300">About</a>
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-purple-300">Skills</a>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-purple-300">Experience</a>
          <a href="#achievements" onClick={(e) => handleScroll(e, 'achievements')} className="hover:text-purple-300">Achievements</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-purple-300">Projects</a>
          <a href="#connect" onClick={(e) => handleScroll(e, 'connect')} className="hover:text-purple-300">Connect</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a192f] border-t border-gray-700 py-4">
          <div className="flex flex-col items-center space-y-4">
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-purple-300">About</a>
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-purple-300">Skills</a>
            <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-purple-300">Experience</a>
            <a href="#achievements" onClick={(e) => handleScroll(e, 'achievements')} className="hover:text-purple-300">Achievements</a>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-purple-300">Projects</a>
            <a href="#connect" onClick={(e) => handleScroll(e, 'connect')} className="hover:text-purple-300">Connect</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;