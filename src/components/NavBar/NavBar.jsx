import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './NavBar.scss';
import { BsTwitterX } from 'react-icons/bs';
import { FaGithub, FaInstagram,  FaLinkedinIn } from 'react-icons/fa';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className="header">
      <motion.a 
      
        href="#home" 
        className='logo'
        whileHover={{ scale: 1.2 }}
      >
        <img src="kayrologo.webp" alt="Logo" />
      </motion.a>

      <div className="social">
      <motion.a href="https://www.linkedin.com/in/khireddine-mehadi-6447402a6/" target="_blank" rel="noopener noreferrer"  whileHover={{ scale: 1.5, rotate: 15, color: '#59f1fb' }} ><FaLinkedinIn /></motion.a>
          <motion.a href="https://github.com/kayro-is?tab=overview&from=2024-08-01&to=2024-08-12" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.5, rotate: 15, color: '#59f1fb' }}><FaGithub /></motion.a>
          <motion.a href="https://x.com/KayroWebDev" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.5, rotate: 15, color: '#59f1fb' }}><BsTwitterX /></motion.a>
          <motion.a href="https://www.instagram.com/kayro7892/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.5, rotate: 15, color: '#59f1fb' }}><FaInstagram /></motion.a>
            </div>

      <motion.nav  className={`navbar ${isOpen ? 'active' : ''}`}>
        <motion.a whileHover={{ scale: 1.2 }} href="#home">Accueil</motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#apropos">Compétences</motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#services">Projets</motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#contact">Contact</motion.a>
      </motion.nav>
      <motion.button className={`hamburger ${isOpen ? 'active' : ''}`} 
      onClick={toggleMenu}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      >
        <span></span>
        <span></span>
        <span></span>
      </motion.button>
    </div>
  );
}

export default NavBar;
