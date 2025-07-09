"use client";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Backend Development",
    skills: [
      { name: "Python", level: 90 },
      { name: "Django", level: 95 },
      { name: "Django Rest Framework", level: 95 },
      { name: "REST API Design", level: 95 }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "SQLLite", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Redis", level: 50 },
      { name: "MySQL", level: 55 }
    ]
  },
  {
    category: "FrontEnd Development",
    skills: [
      { name: "HTML", level: 98 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 25 },
    ]
  },
  {
    category: "Other",
    skills: [
      { name: "WordPress", level: 65 },
      { name: "Git and Github", level: 75 },
      { name: "Threading", level: 50 },
      { name: "Postman", level: 80 },
      {name:"Celery", level:65},
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="pt-20 px-6 md:px-20 mt-[120px] md:-mt-[130px]">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Technical <span className="text-red-600">Skills</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-lg p-6 shadow-lg hover:shadow-red-900/20 transition-shadow"
          >
            <h3 className="text-xl font-bold mb-6 text-center border-b border-gray-700 pb-2">
              {category.category}
            </h3>
            
            <div className="space-y-5">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="h-2 rounded-full bg-gradient-to-r from-red-600 to-red-800"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional skills as tags */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16"
      >
        <h4 className="text-xl font-semibold mb-6 text-center">More Skills & Technologies</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Express.js", "Django", "Flask", "GraphQL", 
            "Microservices", "Message Queues", "OAuth", 
            "JWT", "WebSockets", "Nginx", "Apache", 
            "Serverless", "Terraform", "Ansible", 
            "Prometheus", "Grafana", "GitHub Actions",
            "Google Analytics", "Ahrefs", "SEMrush"
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
              className="px-4 py-2 bg-gray-800 rounded-full text-sm cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div> */}
    </section>
  );
}