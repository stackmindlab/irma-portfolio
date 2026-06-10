// Experience.jsx - Career timeline section
// Shows 6 roles in alternating left/right layout on desktop
// Single column on mobile
// Each card slides in from its side on scroll
// Cards lift and glow on hover using floatCard variants
// isLeft determines which side each card appears on
// Even index = right side, odd index = left side

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

function Experience() {
  // Experience data - reverse chronological order (most recent first)
  // To add a new role - add a new object at the top of this array
  const experiences = [
    {
      title: "Operations Analyst",
      company: "CompuCom Systems",
      period: "Mar 2022 – Apr 2025",
      type: "Full-time · Remote",
      bullets: [
        "Monitored enterprise systems across 6,000+ locations to maintain SLA compliance",
        "Investigated production issues using logs and ticketing systems (ServiceNow) to identify root causes",
        "Analyzed operational data to identify trends and support process improvements",
        "Collaborated with cross-functional teams to resolve issues and improve system performance",
      ],
      tags: ["ServiceNow", "Incident Management", "Root Cause Analysis", "SLA"],
    },
    {
      title: "Senior IT Project Coordinator",
      company: "CompuCom Systems",
      period: "Jul 2018 – Mar 2022",
      type: "Full-time · Remote",
      bullets: [
        "Coordinated enterprise technical projects tracking tasks, timelines, and deliverables",
        "Maintained project schedules, tracked risks, and monitored dependencies",
        "Managed technician assignments, scheduling, and technical documentation",
        "Provided project status updates and reporting to stakeholders and leadership",
      ],
      tags: [
        "Project Management",
        "ServiceNow",
        "Stakeholder Reporting",
        "Risk Management",
      ],
    },
    {
      title: "IT Project Coordinator",
      company: "Onin Staffing",
      period: "Jul 2017 – Jul 2018",
      type: "Full-time · Remote",
      bullets: [
        "Managed ticketing system updates and tracked project-related requests",
        "Coordinated communication between teams and customers on project status",
        "Supported service delivery, issue resolution, and escalation processes",
      ],
      tags: ["Project Coordination", "Ticketing", "Escalation Management"],
    },
    {
      title: "IT Infrastructure Management Tech II",
      company: "CompuCom Systems",
      period: "Jul 2014 – May 2017",
      type: "Level 2 Network Support Engineer · On-site",
      bullets: [
        "Provided Level 2 technical support for DNS, DHCP, IPAM, and wireless infrastructure",
        "Troubleshot Unix-based systems and supported infrastructure operations",
        "Diagnosed complex networking issues using packet analysis and root cause analysis",
        "Investigated escalations and identified root causes across enterprise environments",
      ],
      tags: ["DNS", "DHCP", "IPAM", "UNIX", "Level 2 Support", "Network Ops"],
    },
    {
      title: "Administrative Support Specialist IT",
      company: "CompuCom Systems",
      period: "Jul 2011 – Jul 2014",
      type: "Full-time · On-site",
      bullets: [
        "Coordinated communication between internal teams and clients",
        "Managed scheduling, documentation, and service requests",
        "Provided first-level technical and administrative support",
      ],
      tags: ["Level 1 Support", "Documentation", "Client Coordination"],
    },
    {
      title: "Down Store Help Desk Technician",
      company: "Walmart Global Tech",
      period: "Jul 2004 – Jul 2009",
      type: "Full-time · On-site · Bentonville AR",
      bullets: [
        "Provided technical support for store systems across enterprise retail environments",
        "Managed high-volume ticket queues and escalations across multiple locations",
        "Handled 4,000+ calls over three months while reducing response times",
        "Supported NOC, UNIX, and distribution center infrastructure operations",
      ],
      tags: ["Help Desk", "NOC", "UNIX", "Walmart", "Enterprise Support"],
    },
  ];

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
        <h2 className="text-3xl font-bold text-white mb-3">Experience</h2>
        <div className="w-16 h-0.5 bg-purple-600 mx-auto opacity-60"></div>
      </motion.div>

      {/* Timeline container - relative so the center line can be positioned inside it */}
      <div className="relative">
        {/* Vertical center line - hidden on mobile, visible on desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-900 opacity-40 -translate-x-1/2 hidden md:block"></div>

        {experiences.map((exp, index) => {
          // Even index = card on left side, odd index = card on right side
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className="relative flex items-start mb-12">
              {/* LEFT side card - only renders when isLeft is true */}
              {isLeft && (
                <motion.div
                  variants={floatCard}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover="hover"
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                  className="glass rounded-xl p-6 w-full md:w-[47%]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 text-sm font-medium">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 text-xs">{exp.type}</p>
                    </div>
                    {/* Period badge */}
                    <span className="text-xs text-purple-400 border border-purple-800 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  {/* Bullet points */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="w-1 h-1 bg-purple-600 rounded-full flex-shrink-0 mt-2"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-purple-950 text-purple-300 px-2 py-1 rounded-full border border-purple-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Center timeline dot - glows purple */}
              <div
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-600 rounded-full mt-6 z-10"
                style={{ boxShadow: "0 0 10px rgba(139,92,246,0.6)" }}
              ></div>

              {/* Spacer pushes right cards to the right side */}
              {isLeft && <div className="hidden md:block md:w-[6%]"></div>}
              {!isLeft && <div className="hidden md:block md:w-[53%]"></div>}

              {/* RIGHT side card - only renders when isLeft is false */}
              {!isLeft && (
                <motion.div
                  variants={floatCard}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover="hover"
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                  className="glass rounded-xl p-6 w-full md:w-[47%]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 text-sm font-medium">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 text-xs">{exp.type}</p>
                    </div>
                    <span className="text-xs text-purple-400 border border-purple-800 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="w-1 h-1 bg-purple-600 rounded-full flex-shrink-0 mt-2"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-purple-950 text-purple-300 px-2 py-1 rounded-full border border-purple-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
