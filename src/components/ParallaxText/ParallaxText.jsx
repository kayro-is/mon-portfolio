import React, { useRef } from "react";
import {
  motion,          // Composants animés pour React
  useScroll,       // Hook pour obtenir les informations de défilement
  useSpring,       // Hook pour créer une animation de ressort
  useTransform,    // Hook pour transformer les valeurs d'animation
  useMotionValue,  // Hook pour créer une valeur d'animation réactive
  useVelocity,     // Hook pour obtenir la vitesse du défilement
  useAnimationFrame // Hook pour exécuter une fonction à chaque frame d'animation
} from "framer-motion";
import { wrap } from "@motionone/utils"; // Fonction utilitaire pour envelopper les valeurs

import './ParallaxText.scss'
const ParallaxText = ({ children, baseVelocity = 100 }) => {
  // Création d'une valeur d'animation réactive pour la position de base en X
  const baseX = useMotionValue(0);
  
  // Obtention de la position de défilement verticale
  const { scrollY } = useScroll();
  
  // Calcul de la vitesse de défilement
  const scrollVelocity = useVelocity(scrollY);
  
  // Création d'une animation de ressort pour lisser la vitesse de défilement
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,   // Damping : résistance de l'animation
    stiffness: 400 // Stiffness : rigidité de l'animation
  });
  
  // Transformation de la vitesse de défilement en un facteur de vitesse pour l'animation
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 6], {
    clamp: false
  });

  // Transformation de la position de base en X en une valeur de pourcentage enveloppée
  const x = useTransform(baseX, (v) => `${wrap(30, -30, v)}%`);

  // Référence pour stocker la direction actuelle de l'animation
  const directionFactor = useRef(1);
  
  // Utilisation du hook pour exécuter une fonction à chaque frame d'animation
  useAnimationFrame((t, delta) => {
    // Calcul de la distance de déplacement en fonction de la direction et de la vitesse de base
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Changement de direction en fonction de la vitesse du défilement
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    // Ajout de la vitesse de défilement à la distance de déplacement
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    // Mise à jour de la position de base en X
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      {/* Composant animé pour le texte en mouvement */}
      <motion.div className="scroller" style={{ x }}>
        {/* Répétition du contenu pour créer l'effet de parallax */}
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default ParallaxText;
