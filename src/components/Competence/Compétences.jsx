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
          Bonjour ! Je m'appelle Mehadi Khireddine, et je suis un développeur web passionné par la création de sites et d'applications web modernes et réactifs. je m'efforce de construire des interfaces utilisateur intuitives et attrayantes.
        </p>
        <p>
          En tant que développeur , je suis constamment à la recherche de nouvelles technologies et de meilleures pratiques pour améliorer mes compétences et mes projets. Ma passion pour le développement web me pousse à apprendre et à m'adapter rapidement aux nouvelles tendances et aux besoins du marché.
        </p>
        <p>
          En dehors du code, j'aime explorer de nouvelles technologies, lire des articles techniques, faire du sport et profiter de la vie. Je suis toujours ouvert aux opportunités de travailler sur des projets innovants et stimulants.
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
          <img src="/next.webp" alt="next" />
          <img src="react.webp" alt="react" />
          <img src="/html.webp" alt="html" />
          <img src="/css.webp" alt="css" />
          <img src="/js.webp" alt="javascript" />
          <img src="vercel.webp" alt="vercel" />
          <img src="vscode.webp" alt="vscode" />
        </div>
      </motion.div>
    </div>
  );
};

export default Competence;
