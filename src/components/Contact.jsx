import { motion } from 'framer-motion'

function Contact() {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto text-center">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-3">Get In Touch</h2>
        <div className="w-16 h-0.5 bg-purple-600 mx-auto opacity-60"></div>
      </motion.div>

      {/* Glass card slides up */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="glass rounded-2xl p-10 card-hover"
        style={{boxShadow: '0 0 40px rgba(139, 92, 246, 0.08)'}}
      >
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Open to software engineering, AI, and security roles.
          Let us connect.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:irod261@wgu.edu"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition"
            style={{boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'}}
          >
            Email Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/irmaro/" target="_blank" rel="noreferrer"
            className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-medium transition"
          >
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/stackmindlab" target="_blank" rel="noreferrer"
            className="border border-gray-700 text-gray-400 hover:border-purple-600 hover:text-purple-400 px-8 py-3 rounded-lg font-medium transition"
          >
            GitHub
          </motion.a>
        </div>

      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-gray-700 text-sm mt-12"
      >
        Built by Irma Rodriguez · 2026
      </motion.p>

    </section>
  )
}

export default Contact
