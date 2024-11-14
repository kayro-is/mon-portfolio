import {  motion  } from 'framer-motion';

import './Hero.scss';

const textVariants = {
    initial :{
         x:-500,
         opacity: 0,
    },
    animate: {
        x:0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },

    scrollButton: {
        opacity: 0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        },
    },
};
const sliderVariants = {
    initial :{
         x:0, 
    },
    animate: {
        x:"100%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:50,
        },
    },
};

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
        <motion.div 
        className="textContainer" 
        variants={textVariants} 
        initial="initial" 
        animate="animate"
        >

            <motion.h1 
                 initial={{ backgroundPosition: "200% center" }}
                 animate={{ backgroundPosition: "0% center" }}
                 transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                 style={{
                   background: "linear-gradient(270deg, #59f1fb, #fee5f5)",
                   backgroundClip: "text",
                   color: "transparent",
                   backgroundSize: "200% 200%",
                 }}
            variants={textVariants}>Développeur Front-End : React, JavaScript, Next.js ... </motion.h1>
        </motion.div>
        
        <div className="scroll-img">
        <motion.img 
        variants={textVariants}
         animate="scrollButton" 
         
         src="/scroll.png" alt="" />
        </div>
       
        </div>
        <motion.div 
        className="slidingTextContainer" 
        variants={sliderVariants} 
        initial="initial" 
        animate="animate" 
        >
        Kayro Web
        </motion.div>
        <div className="imageContainer">
            <img src="" alt="" />
            
        </div>
        </div>
  );
}

export default Hero;