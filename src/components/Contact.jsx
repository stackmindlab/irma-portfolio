// Contact.jsx - Final section on the page
// Glassmorphism card centered on page
// Card slides up on scroll using whileInView
// Card lifts and glows on hover using floatCard variants
// Buttons bounce on click using whileTap
// Email Me is solid purple (primary action)
// LinkedIn and GitHub are outline style (secondary actions)
// Footer credit at the very bottom

import { motion } from 'framer-motion'

// Reusable hover animation - card lifts up and glows purple
const floatCard = {
  rest: { y: 0, boxShadow: '0 0 0px rgba(139,92,246,0)' },
  hover: {
    y: -10,
    boxShadow: '0 0 25px rgba(139,92,246,0.2)',
    transition: { type: 'spring', stiffness: 200, damping: 10 }
  }
}

function Contact() {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto text-center">

      {/* Section heading with purple underline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-3">Get In Touch</h2>
        <div className="w-16 h-0.5 bg-purple-600 mx-auto opacity-60"></div>
      </motion.div>

      {/* Glass card - slides up on scroll, lifts on hover */}
      <motion.div
        variants={floatCard}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover="hover"
        viewport={{ once: false }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="glass rounded-2xl p-10"
        style={{boxShadow: '0 0 40px rgba(139, 92, 246, 0.08)'}}
      >
        {/* Short open to work message */}
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Open to software engineering, AI, and security roles.
          Let us connect.
        </p>

        {/* Three contact buttons */}
        <div className="flex gap-4 justify-center flex-wrap">

          {/* Email Me - primary solid purple button */}
          <motion.a
            href="mailto:irod261@wgu.edu"
            whileHover={{ y: -5, boxShadow: '0 0 25px rgba(139,92,246,0.6)' }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="btn-primary"
          >
            Email Me
          </motion.a>

          {/* LinkedIn - outline button, fills purple on hover */}
          <motion.a
            href="https://www.linkedin.com/in/irmaro/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5, boxShadow: '0 0 25px rgba(139,92,246,0.6)' }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="btn-secondary"
          >
            LinkedIn
          </motion.a>

          {/* GitHub - outline button, fills purple on hover */}
          <motion.a
            href="https://github.com/stackmindlab"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5, boxShadow: '0 0 25px rgba(139,92,246,0.6)' }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="btn-secondary"
          >
            GitHub
          </motion.a>

        </div>
      </motion.div>

      {/* Footer credit - very subtle at bottom */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="text-gray-700 text-sm mt-12"
      >
        Built by Irma Rodriguez · 2026
      </motion.p>

    </section>
  )
}

export default Contact
