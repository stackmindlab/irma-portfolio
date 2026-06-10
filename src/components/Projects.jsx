// Projects.jsx - Portfolio projects showcase
// 6 project cards in a 3 column grid on desktop, 1 column on mobile
// Each card fades up and staggers in on scroll
// Cards lift and glow on hover using floatCard variants
// live and code links currently set to "#" as placeholders
// UPDATE THESE as each project gets built and deployed:
// - live = the Vercel/Render URL of the deployed app
// - code = the GitHub repo URL

import { motion } from "framer-motion";

// Reusable hover animation - card lifts up and glows purple
const floatCard = {
  rest: { y: 0, boxShadow: "0 0 0px rgba(139,92,246,0)" },
  hover: {
    y: -10,
    boxShadow: "0 0 25px rgba(139,92,246,0.2)",
    transition: { type: "spring", stiffness: 200, damping: 10 },
  },
};

function Projects() {
  // Projects data - update live and code URLs as each project is deployed
  // status changes from "In Progress" to "Live" when deployed
  const projects = [
    {
      title: "TaskFlow",
      desc: "Fullstack task manager with auth, CRUD, and REST API.",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      live: "#",
      code: "#",
      status: "In Progress",
    },
    {
      title: "SmartChat",
      desc: "AI chat app with real-time streaming using OpenAI API.",
      stack: ["React", "Node.js", "OpenAI"],
      live: "#",
      code: "#",
      status: "In Progress",
    },
    {
      title: "NetScan",
      desc: "Python network scanner with port detection and CLI interface.",
      stack: ["Python", "Sockets", "argparse"],
      live: "#",
      code: "#",
      status: "In Progress",
    },
    {
      title: "VaultPass",
      desc: "Secure password manager with AES-256 encryption and bcrypt.",
      stack: ["Node.js", "bcrypt", "AES-256", "MongoDB"],
      live: "#",
      code: "#",
      status: "In Progress",
    },
    {
      title: "LogGuard",
      desc: "ML-powered log anomaly detector built from real ops experience.",
      stack: ["Python", "sklearn", "pandas"],
      live: "#",
      code: "#",
      status: "In Progress",
    },
    {
      title: "ResumeAI",
      desc: "Upload a resume and get AI-powered feedback instantly.",
      stack: ["React", "Python", "OpenAI", "FastAPI"],
      live: "#",
      code: "#",
      status: "In Progress",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      {/* Section heading with purple underline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-3">Projects</h2>
        <div className="w-16 h-0.5 bg-purple-600 mx-auto opacity-60"></div>
      </motion.div>

      {/* 1 column mobile, 2 tablet, 3 desktop */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            variants={floatCard}
            // Stagger each card - first = 0s, second = 0.1s, third = 0.2s etc
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            // flex flex-col justify-between pushes links to bottom of card
            className="glass rounded-xl p-6 flex flex-col justify-between"
          >
            <div>
              {/* Title and status badge */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold text-lg">{p.title}</h3>
                {/* Status badge - changes to Live when deployed */}
                <span className="text-xs text-purple-400 border border-purple-800 px-2 py-0.5 rounded-full">
                  {p.status}
                </span>
              </div>

              {/* Short description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {p.desc}
              </p>

              {/* Tech stack tags - purple pill style */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-purple-950 text-purple-300 px-2 py-1 rounded-full border border-purple-900"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Links always at bottom of card */}
            <div className="flex gap-4 pt-4 border-t border-gray-800">
              <a
                href={p.live}
                className="text-sm text-purple-400 hover:text-purple-300 transition"
              >
                ↗ Live Demo
              </a>
              <a
                href={p.code}
                className="text-sm text-gray-500 hover:text-white transition"
              >
                ⌥ GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
