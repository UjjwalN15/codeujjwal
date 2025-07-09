"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experienceData = [
  {
    id: 1,
    title: "Backend Developer Intern/ Trainee",
    company: "MindRisers Technology",
    type: "work",
    date: "Oct-13,2024 - Present ",
    description: [
      "Developed scalable RESTful APIs using Django and Django REST Framework",
      "Implemented Redis caching to improve system performance and reduce response times",
      "Integrated Celery for efficient background task processing",
      "Enhanced security by implementing two-factor authentication with PyOTP",
      "Built document digitization features using OCR technologies (Tesseract and Poppler)",
      "Optimized operations through threading for concurrent processing",
      "Connected external databases to Django-based systems",
      "Worked in the multiple databases in a single project",
      "Collaborated on production-level backend architecture and workflows",
    ],
    tags: ["Python", "Django", "Django Rest Framework", "Redis", "Celery","Threading", "Email SMTP","PostgreSQL","MySQL","SQLLite", "TesserActOCR","Git","Github","Postman",
      "QRCode Decoding", "OCR", "OneSignal Notifications", "Django Chaining"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 px-6 md:px-20 mt-[120px] md:mt-[-1px]">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        My <span className="text-red-600">Experience</span>
      </motion.h2>

      <div className="max-w-15xl relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-red-600/30 transform -translate-x-1/2"></div>

        {experienceData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`mb-8 md:mb-12 flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
          >
            <div className={`md:w-5/10 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-red-900/30 transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-full ${item.type === 'work' ? 'bg-red-600/20 text-red-600' : 'bg-blue-600/20 text-blue-400'}`}>
                    {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-400">{item.company} <br></br> • {item.date} •</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-4 pl-5 list-disc text-gray-300">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}