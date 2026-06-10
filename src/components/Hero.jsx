import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Hero() {
  const titles = [
    "Full-Stack Engineer",
    "AI Developer",
    "Security Engineer"
  ]

  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = titles[titleIndex]
    if (!deleting && displayed.length < current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, 80)
      return () => clearTimeout(timeout)
    }
    if (!deleting && displayed.length === current.length) {
      const timeout = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }
    if (deleting && displayed.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1))
      }, 40)
      return () => clearTimeout(timeout)
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }
  }, [displayed, deleting, titleIndex])

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">

      {/* Purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl pointer-events-none" />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 text-5xl md:text-7xl font-bold text-white mb-4"
      >
        Irma Rodriguez
      </motion.h1>

      {/* Typing animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-10 h-8 mb-6"
      >
        <p className="text-xl text-purple-400 font-medium">
          {displayed}
          <span className="animate-pulse">|</span>
        </p>
      </motion.div>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative z-10 text-gray-400 max-w-xl text-lg mb-8"
      >
        Software Engineer with 13+ years in enterprise IT. Building at
        the intersection of full-stack development, AI, and cybersecurity.
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="relative z-10 flex gap-8 mb-10 flex-wrap justify-center"
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-white">13+</div>
          <div className="text-gray-500 text-sm">Years in Tech</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">6</div>
          <div className="text-gray-500 text-sm">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">BS</div>
          <div className="text-gray-500 text-sm">Software Engineering</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">3</div>
          <div className="text-gray-500 text-sm">Tech Domains</div>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="relative z-10 flex gap-4 flex-wrap justify-center"
      >
        <a href="https://github.com/stackmindlab" target="_blank" rel="noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition"
          style={{boxShadow:'0 0 20px rgba(139,92,246,0.3)'}}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/irmaro/" target="_blank" rel="noreferrer"
          className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition">
          LinkedIn
        </a>
        <a href="mailto:irod261@wgu.edu"
          className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition">
          Contact Me
        </a>
      </motion.div>

    </section>
  )
}

export default Hero
