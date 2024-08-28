import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Scroll from './components/Scroll';
import Competence from './components/Competence/Compétences';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';

const App = () => {
  return (
    <div>
      <NavBar />
      <section id="home">
        <Hero />
      </section>
      <Scroll />
      <section id="apropos">
        <Competence />
      </section>
      <Scroll />
      <section id="services">
        <Services />
      </section>
      <Scroll />
      <section id="contact">
        <Contact />
      </section>
      <SpeedInsights />
    </div>
  );
}

export default App;
