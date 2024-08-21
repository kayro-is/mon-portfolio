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
        x:"-220%",
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

            <motion.h1 variants={textVariants}>Hello 👋,
            </motion.h1>
            <motion.h1 variants={textVariants}>Développeur Front passionné par les technologies modernes</motion.h1>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
        Kayro webdev
        </motion.div>
        <div className="imageContainer">
            <img src="" alt="" />
            
        </div>
        </div>
  );
}

export default Hero;