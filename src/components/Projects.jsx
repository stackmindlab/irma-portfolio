import { motion } from 'framer-motion'

function Projects() {
  const projects = [
    {
      title: "TaskFlow",
      desc: "Fullstack task manager with auth, CRUD, and REST API.",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      live: "#",
      code: "#",
      status: "In Progress"
    },
    {
      title: "SmartChat",
      desc: "AI chat app with real-time streaming using OpenAI API.",
      stack: ["React", "Node.js", "OpenAI"],
      live: "#",
      code: "#",
      status: "In Progress"
    },
    {
      title: "NetScan",
      desc: "Python network scanner with port detection and CLI interface.",
      stack: ["Python", "Sockets", "argparse"],
      live: "#",
      code: "#",
      status: "In Progress"
    },
    {
      title: "VaultPass",
      desc: "Secure password manager with AES-256 encryption and bcrypt.",
      stack: ["Node.js", "bcrypt", "AES-256", "MongoDB"],
      live: "#",
      code: "#",
      status: "In Progress"
    },
    {
      title: "LogGuard",
      desc: "ML-powered log anomaly detector built from real ops experience.",
      stack: ["Python", "sklearn", "pandas"],
      live: "#",
      code: "#",
      status: "In Progress"
    },
    {
      title: "ResumeAI",
      desc: "Upload a resume and get AI-powered feedback instantly.",
      stack: ["React", "Python", "OpenAI", "FastAPI"],
      live: "#",
      code: "#",
      status: "In Progress"
    },
  ]

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-3">Projects</h2>
        <div className="w-16 h-0.5 bg-purple-600 mx-auto opacity-60"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-xl p-6 card-hover flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold text-lg">{p.title}</h3>
                <span className="text-xs text-purple-400 border border-purple-800 px-2 py-0.5 rounded-full">
                  {p.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs bg-purple-950 text-purple-300 px-2 py-1 rounded-full border border-purple-900">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 pt-4 border-t border-gray-800">
              <a href={p.live} className="text-sm text-purple-400 hover:text-purple-300 transition flex items-center gap-1">
                ↗ Live Demo
              </a>
              <a href={p.code} className="text-sm text-gray-500 hover:text-white transition flex items-center gap-1">
                ⌥ GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Projects
