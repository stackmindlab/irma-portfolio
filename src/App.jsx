// App.jsx - Root component
// Imports all sections and assembles the full page in order
// ParticleBackground is fixed behind everything using z-index layering
// Each section wrapped in a div with an id for navbar smooth scroll links
// Dividers are glowing purple lines between sections defined in index.css

import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    // gradient-bg = slow breathing dark gradient animation
    // grid-bg = subtle purple grid lines across entire site
    // overflow-x-hidden = prevents horizontal scroll on mobile
    <main className="gradient-bg grid-bg text-white min-h-screen pt-16 overflow-x-hidden">
      {/* Constellation particle network - fixed behind all content */}
      <ParticleBackground />

      {/* All content sits above particles */}
      <div className="relative z-10">
        <Navbar />

        <div id="hero">
          <Hero />
        </div>
        <div className="divider"></div>

        <div id="about">
          <About />
        </div>
        <div className="divider"></div>

        <div id="skills">
          <Skills />
        </div>
        <div className="divider"></div>

        <div id="experience">
          <Experience />
        </div>
        <div className="divider"></div>

        <div id="projects">
          <Projects />
        </div>
        <div className="divider"></div>

        <div id="contact">
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
