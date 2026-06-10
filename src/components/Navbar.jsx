// Navbar.jsx - Fixed navigation bar
// Stays at top of screen while scrolling using position: fixed
// Slides down from top on page load using Framer Motion
// Shows hamburger menu on mobile, full links on desktop
// AnimatePresence handles the mobile dropdown open/close animation

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  // Controls whether mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Nav links - maps to section IDs in App.jsx
  const links = ["about", "skills", "experience", "projects", "contact"];

  return (
    // Slides down from -80px on page load
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-950/90 border-b border-purple-900/30"
      style={{ boxShadow: "0 1px 20px rgba(139, 92, 246, 0.08)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - links back to top of page */}
        <a
          href="#"
          className="text-white font-bold text-lg hover:text-purple-400 transition"
        >
          Irma Rodriguez
        </a>

        {/* Desktop links - hidden on mobile screens */}
        <div className="hidden md:flex gap-8">
          {links.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              // Stagger each link fading in on load
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-purple-400 transition text-sm font-medium capitalize"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Right side - Hire Me button + hamburger */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Hire Me - solid purple button, glows on hover */}
          <motion.a
            href="mailto:irod261@wgu.edu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            whileTap={{ scale: 0.85 }}
            className="btn-primary text-sm px-4 py-2"
          >
            Hire Me
          </motion.a>

          {/* Hamburger icon - only visible on mobile */}
          {/* Three bars animate into X when menu opens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-6 h-0.5 bg-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {/* AnimatePresence allows exit animation when menu closes */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-950/95 border-t border-purple-900/30 overflow-hidden"
          >
            {links.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                // Close menu when a link is clicked
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="block px-6 py-4 text-gray-400 hover:text-purple-400 hover:bg-purple-900/10 transition capitalize border-b border-gray-800/50 text-sm font-medium"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
