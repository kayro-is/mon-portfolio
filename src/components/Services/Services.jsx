import { useRef } from 'react';
import './Services.scss';
import { motion, useInView } from 'framer-motion';

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
  const isInView = useInView(ref, { margin: '-100px' });

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
          <img src="/bg2.webp" alt="" />
          <h1>
            Mes <motion.b whileHover={{ color: '#040a10' }}>Projets</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div 
      
      className="listContainer" variants={variants}>
        <motion.a 
          className="box" 
          href="https://kayro-shop.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ background: '#15263b', color: 'black', scale: 1.1 }}
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
          whileHover={{ background: '#15263b', color: 'black', scale: 1.1 }}
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
          whileHover={{ background: '#15263b', color: 'black', scale: 1.1 }}
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
          whileHover={{ background: '#15263b', color: 'black', scale: 1.1 }}
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
