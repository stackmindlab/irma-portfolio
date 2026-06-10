// About.jsx - Second section on the page
// Two glass cards side by side on desktop, stacked on mobile
// Left card slides in from the left on scroll
// Right card slides in from the right on scroll
// Both cards lift up and glow when hovered using floatCard variants
// viewport once:false means animation repeats every time you scroll past

import { motion } from "framer-motion";

// Reusable hover animation variant
// rest = default state, hover = state when mouse is over the card
const floatCard = {
  rest: { y: 0, boxShadow: "0 0 0px rgba(139,92,246,0)" },
  hover: {
    y: -10,
    boxShadow: "0 0 25px rgba(139,92,246,0.2)",
    transition: { type: "spring", stiffness: 200, damping: 10 },
  },
};

function About() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      {/* Section heading with purple underline accent */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-3">About Me</h2>
        {/* Short purple line under heading - consistent across all sections */}
        <div className="w-16 h-0.5 bg-purple-600 mx-auto opacity-60"></div>
      </motion.div>

      {/* Two column grid - stacks to single column on mobile */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left card - slides in from left */}
        <motion.div
          variants={floatCard}
          initial={{ opacity: 0, x: -40, ...floatCard.rest }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover="hover"
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.2 }}
          // glass = frosted glass effect, accent-border = left purple border
          className="glass rounded-xl p-6 accent-border"
        >
          <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Background
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            I started my career in technology over 13 years ago, working across
            help desk support, vendor management, IT project coordination, and
            enterprise operations. My experience includes UNIX systems, network
            operations, IP address management (IPAM), and large-scale
            infrastructure environments.
          </p>
        </motion.div>

        {/* Right card - slides in from right */}
        <motion.div
          variants={floatCard}
          initial={{ opacity: 0, x: 40, ...floatCard.rest }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover="hover"
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="glass rounded-xl p-6 accent-border"
        >
          <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Now
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Today, I'm combining that operational experience with software
            engineering to build full-stack applications, explore AI-powered
            solutions, and develop security-focused software. I'm currently
            pursuing a B.S. in Software Engineering while expanding my knowledge
            in artificial intelligence and cybersecurity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
