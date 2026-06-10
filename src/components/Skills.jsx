// Skills.jsx - Tech stack displayed as category cards
// 6 cards in a 2x3 grid on desktop, 2 columns on mobile
// Each card fades up and staggers in one by one on scroll
// Cards lift and glow on hover using floatCard variants
// To add a new skill - just add it to the items array in the skills data
// To add a new category - add a new object to the skills array

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

function Skills() {
  // Skills data - edit this array to add, remove, or update skills
  // Each object has a category name, an icon, and an items array
  const skills = [
    {
      category: "Frontend",
      icon: "◈",
      items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      category: "Backend & Database",
      icon: "⬡",
      items: ["Node.js", "Express", "REST APIs", "JWT Authentication", "MongoDB", "Mongoose", "Python"]
    },
    {
      category: "AI & ML",
      icon: "◆",
      items: ["OpenAI API", "Python", "Prompt Engineering", "AI Automation", "scikit-learn", "pandas"]
    },
    {
      category: "Security",
      icon: "◉",
      items: ["Secure Software Development", "Authentication & Authorization", "Network Operations", "IP Address Management (IPAM)"]
    },
    {
      category: "Tools",
      icon: "◇",
      items: ["Git", "GitHub", "Docker", "Linux", "UNIX", "VS Code", "Postman", "GitHub Actions", "Jira"]
    },
    {
      category: "Currently Learning",
      icon: "⟳",
      items: ["Java", "TypeScript", "FastAPI", "Machine Learning"]
    },
  ]

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">

      {/* Section heading with purple underline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-3">Skills</h2>
        <div className="w-16 h-0.5 bg-purple-600 mx-auto opacity-60"></div>
      </motion.div>

      {/* 2 columns mobile, 3 columns desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            variants={floatCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass rounded-xl p-6"
          >
            {/* Category icon and title */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-purple-400 text-lg">{group.icon}</span>
              <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-widest">
                {group.category}
              </h3>
            </div>

            {/* Skills list - purple dot before each item */}
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
