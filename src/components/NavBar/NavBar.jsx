import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './NavBar.scss';

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
        <img src="kayrologo.png" alt="Logo" />
      </motion.a>
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <motion.a whileHover={{ scale: 1.2 }} href="#home">Accueil</motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#apropos">Compétences</motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#services">Projets</motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#contact">Contact</motion.a>
      </nav>
      <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default NavBar;
