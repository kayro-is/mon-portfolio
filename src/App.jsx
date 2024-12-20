import "@fontsource/poppins"; // Poids par défaut
import "@fontsource/poppins/400.css";
import { SpeedInsights } from "@vercel/speed-insights/react"
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Scroll from './components/Scroll';
import Competence from './components/Competence/Compétences';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Marquee  from "./components/magicui/Marquee";
import Copyright from "./components/copyright/copyright";




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
        <Marquee />
      <Scroll />
      <section id="contact">
        <Contact />
      </section>
      <Copyright />
      <SpeedInsights />
    </div>
  );
}

export default App;
