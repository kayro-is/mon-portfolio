
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
  Salut ! Je m'appelle Mehadi Khireddine, développeur web passionné et toujours en quête de nouveaux défis. Mon expertise réside dans la création de sites et d'applications web modernes, alliant performance et esthétique. 
  J'accorde une importance particulière à l'expérience utilisateur, cherchant à offrir des interfaces intuitives et agréables.
</p>
<p>
Je suis constamment à l'affût des dernières tendances technologiques pour rester à jour et enrichir mes compétences.
 Mon approche du développement web est centrée sur l'innovation et l'amélioration continue, 
 ce qui me permet de livrer des projets de qualité, adaptés aux besoins actuels du marché.</p>
<p>
En dehors de mon métier, je suis un fervent amateur de technologie, curieux des nouvelles tendances et des progrès dans le domaine.
 J'apprécie également le sport et les moments de détente qui me permettent de garder un bon équilibre entre vie professionnelle et personnelle. 
Je suis toujours ouvert aux collaborations enrichissantes et aux projets ambitieux qui repoussent les limites de la créativité.</p>
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
        <motion.div
  style={{ marginTop: "20px" }}
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <a
    href="/CVDEV.WEB.pdf"
    download="Mehadi_Khireddine_CV.pdf"
    className="btn-cv"
  >
    Télécharger mon CV
  </a>
</motion.div>
      </motion.div>


    </div>
  );
};

export default Competence;
