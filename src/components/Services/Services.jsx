import { useRef } from 'react';
import './Services.scss';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  

  return (
    <motion.div
      className="Services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Apporter des solutions innovantes
          <br />
          pour soutenir la croissance de votre marque
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.img 
           whileHover={{ scale: 1.1, rotate: 5 }}
           transition={{ type: "spring", stiffness: 300 }}
           src="/bg2.webp" alt="" />
          <motion.h1
            initial={{ backgroundPosition: "200% center" }}
            animate={{ backgroundPosition: "0% center" }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            style={{
              background: "linear-gradient(270deg, #e66465, #9198e5)",
              backgroundClip: "text",
              color: "transparent",
              backgroundSize: "200% 200%",
            }}
          >
            Mes <motion.b 
            >Projets</motion.b>
          </motion.h1>
        </div>
      </motion.div>
      <motion.div 
      
      className="listContainer" variants={variants}>
        <motion.a 
          className="box" 
          href="https://www.doniacoachlife.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ background: '#5694b8', color: 'black', scale: 1.1 }}
          transition={{ delay: 0.1}}
        >
            <h3>doniacoachlife</h3>
          <img src="/doniacoachlife.jpg" alt="" />
          <br />
          <p>
          🌟 Découvrez le projet "Donia CoachLife" ! 🌟
       Je suis fier de vous présenter un projet sur lequel j'ai travaillé avec passion pour ma cliente : le site "Donia CoachLife".
     Ce projet a été conçu pour refléter l'esprit du coaching de vie et de développement personnel, 🖥️✨




Je suis ravi du résultat final et de la satisfaction de ma cliente ! 🏆
          </p>
          <button>Go</button>
        </motion.a>
        <motion.a 
          className="box" 
          href="https://kayro-shop.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ background: '#5694b8', color: 'black', scale: 1.1 }}
          transition={{ delay: 0.1}}
        >
            <h3>Kayro Shop</h3>
          <img src="/kayroshps.webp" alt="" />
          <br />
          <p>
            Le site "Kayro Shop" est une boutique en ligne spécialisée dans la vente de chaussures, 
             comme les Air Force, Air Jordan, et autres. 
             mettant en avant les nouveaux arrivages avec des options d'achat direct. 
             Ce projet a été développé avec les technologies suivantes : JS HTML et CSS.
          </p>
          <button>Go</button>
        </motion.a>
        <motion.a 
          className="box" 
          href="https://668930ad40420c0008e08dfa--mondeanimaldishaaq.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ background: '#5694b8', color: 'black', scale: 1.1 }}
          transition={{ delay: 0.1}}
        >
        <h3>Monde Animal d'Ishaaq</h3>
          <img src="/Animals.webp" alt="" />
          <p>
          "Monde Animal" est un site web interactif dédié aux passionnés d'animaux. <br />Construit avec React et stylisé avec SCSS, 
          il offre une navigation fluide et un contenu riche en informations sur diverses espèces animales.
          <br /> Les animations dynamiques 
          ajoutées avec Framer Motion enrichissent l'expérience utilisateur.          </p>
          <button>Go</button>
        </motion.a>
        <motion.a 
          className="box" 
          href="https://www.halal-meat-quality.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ background: '#5694b8', color: 'black', scale: 1.1 }}
          transition={{ delay: 0.1}}
        >
        <h3>Halal Meat Quality</h3>
          <img src="/halal.webp" alt="" />
          
          <p>
          "Halal Meat Quality" est un site vitrine développé pour faire connaître la marque dédiée à la qualité de la viande halal. Construit avec React,
           stylisé avec SCSS, et animé grâce à Framer Motion, le site offre une présentation dynamique et engageante des valeurs, 
           des produits, et des engagements de la marque.          </p>
           <button>Go</button>
        </motion.a>
        <motion.a 
          className="box" 
          href="https://fruits-shop-kohl.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ background: '#5694b8', color: 'black', scale: 1.1 }}
          transition={{ delay: 0.1}}
        >
        <h3>Fruits Shope</h3>
          <img src="/Fruit-Shop.webp" alt="" />
          <p>
          Fruit Shop est votre destination incontournable pour les fruits les plus frais et les plus délicieux. Nous sommes fiers d'offrir une large variété de fruits, sélectionnés à la main dans les meilleurs vergers du monde, garantissant que chaque bouchée est riche en saveur et en nutriments.
                    </p>
          <button>Go</button>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Services;
