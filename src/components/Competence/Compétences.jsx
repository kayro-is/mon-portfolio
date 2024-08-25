import "./Competences.scss";
import { motion } from "framer-motion";

const Competence = () => {
  

  return (
    <div className="competence">
      <motion.div  
      initial={{opacity: 0, scale: 0.5}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{type:"spring", stiffness:100, delay:0.2}}
      className="about-me">
       <motion.h2 
         initial={{ backgroundPosition: "200% center" }}
         animate={{ backgroundPosition: "0% center" }}
         transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
         style={{
          background: "linear-gradient(270deg, #e66465, #9198e5)",
           backgroundClip: "text",
           color: "transparent",
           backgroundSize: "200% 200%",
         }}
       >À propos de moi</motion.h2>
<p>
  Salut ! Je suis Mehadi Khireddine, un développeur web passionné avec un fort intérêt pour la création de sites et d'applications web dynamiques et réactifs. Mon objectif principal est de concevoir des interfaces utilisateur fluides et engageantes.
</p>
<p>
  En tant que développeur, je me tiens constamment informé des dernières technologies et pratiques du domaine pour améliorer mes compétences et la qualité de mes projets. Mon enthousiasme pour le développement web me pousse à être à l'avant-garde des tendances et à m'adapter aux évolutions du marché.
</p>
<p>
  En dehors de mon travail, je suis un curieux de la technologie, toujours prêt à découvrir de nouvelles innovations. J'aime également lire sur les avancées techniques, pratiquer du sport et savourer les plaisirs de la vie. Je suis ouvert aux collaborations sur des projets créatifs et ambitieux.
</p>
      </motion.div>

      <motion.div  
      initial={{opacity: 0, scale: 0.5}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{type:"spring", stiffness:100, delay:0.5}}
      className="skills">
        <motion.h2
          initial={{ backgroundPosition: "200% center" }}
          animate={{ backgroundPosition: "0% center" }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          style={{
            background: "linear-gradient(270deg, #e66465, #9198e5)",
            backgroundClip: "text",
            color: "transparent",
            backgroundSize: "200% 200%",
          }}
        >Mes Compétences</motion.h2>
        <p>Technologies avec lesquelles j'ai récemment travaillé</p>
        <motion.div className="logos" >
        
          <motion.img 
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
           src="/html.webp"  alt="html5" />
          <motion.img 
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
           src="/css.webp" alt="css" />
          <motion.img 
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
           src="/js.webp" alt="javascript" />
          <motion.img 
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
           src="vercel.webp" alt="vercel" />
          <motion.img 
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
           src="vscode.webp" alt="vscode" />
          <motion.img 
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
           src="react.webp" alt="react" />
          <motion.img 
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
           src="/next.webp" alt="next" />
          
        </motion.div>
      </motion.div>
      
    </div>
  );
};

export default Competence;
