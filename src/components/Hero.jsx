// Hero.jsx - First section visitors see
// Full screen height, everything centered vertically and horizontally
// Name animates with letter spacing spread on page load
// Typing animation cycles through 3 job titles using useState and useEffect
// Stats row scales up on hover using Framer Motion whileHover
// Buttons lift up on hover and bounce on click using whileHover and whileTap

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Hero() {
  // Three titles that cycle in the typing animation
  const titles = ["Full-Stack Engineer", "AI Developer", "Security Engineer"];

  // displayed = the text currently showing in the typing animation
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  // deleting = whether we are currently removing characters
  const [deleting, setDeleting] = useState(false);

  // Typing animation logic runs every time displayed, deleting, or titleIndex changes
  useEffect(() => {
    const current = titles[titleIndex];

    if (!deleting && displayed.length < current.length) {
      // Still typing - add one character every 80ms
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }

    if (!deleting && displayed.length === current.length) {
      // Finished typing - wait 2 seconds then start deleting
      const timeout = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (deleting && displayed.length > 0) {
      // Deleting - remove one character every 40ms (faster than typing)
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
      return () => clearTimeout(timeout);
    }

    if (deleting && displayed.length === 0) {
      // Done deleting - move to next title
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }
  }, [displayed, deleting, titleIndex]);

  return (
    // overflow-hidden prevents particles from causing horizontal scroll
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-6 text-center overflow-hidden">
      {/* Purple glow blob behind content - pointer-events-none so it doesnt block clicks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-purple-600 rounded-full opacity-10 blur-3xl pointer-events-none" />

      {/* Name - letter spacing starts wide and compresses to normal on load */}
      <motion.h1
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, letterSpacing: "0em" }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4"
      >
        Irma Rodriguez
      </motion.h1>

      {/* Typing animation container - fixed height prevents layout shift */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative z-10 h-8 mb-6"
      >
        <p className="text-lg md:text-xl text-purple-400 font-medium">
          {/* displayed updates character by character */}
          {displayed}
          {/* Blinking cursor */}
          <span className="animate-pulse">|</span>
        </p>
      </motion.div>

      {/* Bio - short and punchy */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="relative z-10 text-gray-400 max-w-xl text-base md:text-lg mb-8 px-2"
      >
        Software Engineer with 13+ years in enterprise IT. Building full-stack
        applications, exploring AI, and developing secure, scalable solutions.
      </motion.p>

      {/* Stats row - four credibility numbers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="relative z-10 flex gap-4 md:gap-8 mb-10 justify-center"
      >
        {[
          { value: "13+", label: "Years in Tech" },
          { value: "6", label: "Projects" },
          { value: "BS", label: "Software Engineering" },
          { value: "3", label: "Tech Domains" },
        ].map((stat) => (
          // Each stat scales up and lifts on hover
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="text-center cursor-default"
          >
            <div className="text-xl md:text-2xl font-bold text-white">
              {stat.value}
            </div>
            <div className="text-gray-500 text-xs md:text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons - outline style, lift on hover, bounce on click */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="relative z-10 flex gap-3 flex-wrap justify-center px-4"
      >
        {/* GitHub - opens in new tab */}
        <motion.a
          href="https://github.com/stackmindlab"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -5, boxShadow: "0 0 25px rgba(139,92,246,0.6)" }}
          whileTap={{ scale: 0.85 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="btn-secondary text-sm px-4 py-2 md:px-6 md:py-3"
        >
          GitHub
        </motion.a>

        {/* LinkedIn - opens in new tab */}
        <motion.a
          href="https://www.linkedin.com/in/irmaro/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -5, boxShadow: "0 0 25px rgba(139,92,246,0.6)" }}
          whileTap={{ scale: 0.85 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="btn-secondary text-sm px-4 py-2 md:px-6 md:py-3"
        >
          LinkedIn
        </motion.a>

        {/* Contact Me - opens email client */}
        <motion.a
          href="mailto:irod261@wgu.edu"
          whileHover={{ y: -5, boxShadow: "0 0 25px rgba(139,92,246,0.6)" }}
          whileTap={{ scale: 0.85 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="btn-secondary text-sm px-4 py-2 md:px-6 md:py-3"
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
