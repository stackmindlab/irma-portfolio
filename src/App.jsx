import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    // relative so particle canvas sits behind all content
    <main className="relative gradient-bg grid-bg text-white min-h-screen pt-16 overflow-x-hidden">

      {/* Particle constellation - fixed behind everything */}
      <ParticleBackground />

      {/* All content sits above particles with z-index */}
      <div className="relative z-10">
        <Navbar />
        <div id="hero"><Hero /></div>
        <div className="divider"></div>
        <div id="about"><About /></div>
        <div className="divider"></div>
        <div id="skills"><Skills /></div>
        <div className="divider"></div>
        <div id="experience"><Experience /></div>
        <div className="divider"></div>
        <div id="projects"><Projects /></div>
        <div className="divider"></div>
        <div id="contact"><Contact /></div>
      </div>

    </main>
  )
}

export default App
