import React from "react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Donia", username: "@donia.coachlife", body: "Je suis très satisfaite du résultat final du site web pour Donia Coach Life ! Le site est magnifique, rapide et correspond parfaitement à mes attentes. La collaboration a été extrêmement fluide grâce au professionnalisme de Khireddine. Il a su comprendre mes besoins et les traduire en un site qui reflète exactement l'image de mon activité. De plus, le projet a été terminé dans les délais, avec une grande réactivité et attention aux détails. Merci pour ce superbe travail !" },
  { name: "Yassine", username: "@Halal-meat-quality", body: "Très satisfait du site créé  ! Beau design, rapide et bien pensé. Un travail professionnel et efficace , merci" },
  { name: "Ishaaq", username: "@Ishaaq", body: "Merci pour ce superbe travail." },

];

const ReviewCard = ({ name, username, body }) => (
  <div
    className="review-card"
    style={{
      padding: '24px',
      border: '1px solid #ddd',
      borderRadius: '12px',
      marginRight: '24px',
      width: '1000px', // Augmenter la largeur
      height: 'auto', // Augmenter la hauteur
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      overflowWrap: 'break-word',
      whiteSpace: 'normal',
     
    }}
  >
    <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{name}</h3>
    <span style={{ color: 'gray', fontSize: '1.2rem' }}>{username}</span>
    <p style={{ fontSize: '1.1rem', marginTop: '12px' }}>{body}</p>
  </div>
);

const Marquee = ({ reverse = false }) => {
  return (
    <div
      className="marquee-container"
      style={{
        height: 'auto', // Augmenter la hauteur
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        padding: '20px 0',
        backgroundColor: 'transparent', // Arrière-plan clair
        overflowWrap: 'break-word',
      }}
    >
      <motion.div
        className="marquee-content"
        style={{
          display: 'flex',
        }}
        animate={{ x: reverse ? "100%" : "-100%" }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
        {reviews.map((review, index) => (
          <ReviewCard key={`copy-${index}`} {...review} />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
