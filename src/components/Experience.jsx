import { motion } from 'framer-motion'

function Experience() {
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
      tags: ["ServiceNow", "Incident Management", "Root Cause Analysis", "SLA"]
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
      tags: ["Project Management", "ServiceNow", "Stakeholder Reporting", "Risk Management"]
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
      tags: ["Project Coordination", "Ticketing", "Escalation Management"]
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
      tags: ["DNS", "DHCP", "IPAM", "UNIX", "Level 2 Support", "Network Ops"]
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
      tags: ["Level 1 Support", "Documentation", "Client Coordination"]
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
      tags: ["Help Desk", "NOC", "UNIX", "Walmart", "Enterprise Support"]
    },
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
        <h2 className="text-3xl font-bold text-white mb-3">Experience</h2>
        <div className="w-16 h-0.5 bg-purple-600 mx-auto opacity-60"></div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-purple-900 opacity-40 transform md:-translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`relative flex flex-col md:flex-row gap-6 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-purple-600 rounded-full transform md:-translate-x-1/2 mt-2"
              style={{boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)'}}>
            </div>

            <div className="hidden md:block md:w-1/2"></div>

            <div className="ml-6 md:ml-0 md:w-1/2 glass rounded-xl p-6 card-hover">
              <span className="text-xs text-purple-400 border border-purple-800 px-2 py-1 rounded-full">
                {exp.period}
              </span>
              <h3 className="text-white font-bold text-lg mt-3 mb-1">{exp.title}</h3>
              <p className="text-purple-400 text-sm font-medium mb-1">{exp.company}</p>
              <p className="text-gray-600 text-xs mb-4">{exp.type}</p>
              <ul className="space-y-2 mb-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="w-1 h-1 bg-purple-600 rounded-full flex-shrink-0 mt-2"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-purple-950 text-purple-300 px-2 py-1 rounded-full border border-purple-900">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
