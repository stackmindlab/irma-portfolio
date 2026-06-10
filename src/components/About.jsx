import { motion } from 'framer-motion'

function About() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-3">About Me</h2>
        <div className="w-16 h-0.5 bg-purple-600 mx-auto opacity-60"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-xl p-6 accent-border card-hover"
        >
          <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Background
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            I started in tech over 13 years ago and worked my way through
            help desk, vendor support, IT project coordination, and
            enterprise-level operations analysis.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I have hands-on experience with UNIX systems, network operations,
            IPAM teams, and warehouse infrastructure at scale, the kind of
            real-world exposure most developers never see.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glass rounded-xl p-6 accent-border card-hover"
        >
          <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Now
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Now I am combining that operational depth with software engineering
            to build full-stack applications, AI-powered tools, and
            security-focused software.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Currently completing my BS in Software Engineering, with a focus
            on AI and cybersecurity. My goal is to work at the intersection
            of engineering, AI, and security.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default About
