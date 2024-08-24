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
       <h2>À propos de moi</h2>
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
        <h2>Mes Compétences</h2>
        <p>Technologies avec lesquelles j'ai récemment travaillé</p>
        <div className="logos">
        
          <img src="/html.webp" alt="html" />
          <img src="/css.webp" alt="css" />
          <img src="/js.webp" alt="javascript" />
          <img src="vercel.webp" alt="vercel" />
          <img src="vscode.webp" alt="vscode" />
          <img src="react.webp" alt="react" />
          <img src="/next.webp" alt="next" />
          
        </div>
      </motion.div>
    </div>
  );
};

export default Competence;
