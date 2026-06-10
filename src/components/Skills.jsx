import { motion } from 'framer-motion'

function Skills() {
  const skills = [
    { category: "Frontend", icon: "◈", items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Backend", icon: "⬡", items: ["Node.js", "Express", "REST APIs", "JWT Auth"] },
    { category: "Database", icon: "◎", items: ["MongoDB", "Mongoose"] },
    { category: "AI & ML", icon: "◆", items: ["OpenAI API", "Python", "scikit-learn", "pandas"] },
    { category: "Security", icon: "◉", items: ["bcrypt", "AES-256", "Network Ops", "IPAM"] },
    { category: "Tools", icon: "◇", items: ["Git", "GitHub", "Docker", "Linux", "UNIX", "VS Code"] },
  ]

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-3">Skills</h2>
        <div className="w-16 h-0.5 bg-purple-600 mx-auto opacity-60"></div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-xl p-6 card-hover"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-purple-400 text-lg">{group.icon}</span>
              <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-widest">
                {group.category}
              </h3>
            </div>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-600 rounded-full flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Skills
