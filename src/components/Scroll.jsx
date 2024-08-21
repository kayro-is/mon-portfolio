// src/components/Scroll.jsx
import React from "react";
import ParallaxText from "./ParallaxText/ParallaxText";

const Scroll = () => {
  return (
    <section>
      <ParallaxText baseVelocity={3}>REACT NEXT.JS VERCEL FRAMER MOTION TAILWIND  </ParallaxText>
      <ParallaxText baseVelocity={-3}> JAVASCRIPT HTML CSS SCSS NODEJS</ParallaxText>
    </section>
  );
}

export default Scroll;
