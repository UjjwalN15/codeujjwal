"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-10 px-6 md:px-20 mt-[20px] md:-mt-[50px]">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        About <span className="text-red-600">Me</span>
      </motion.h2>
      
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full h-140 md:w-100 md:h-140"
        >
          <Image
            src="/portfolio.png"
            alt="Profile"
            fill
            className="rounded-full border-4 border-red-600 object-cover"
          />
          <motion.div
            className="absolute inset-0 border-4 border-transparent rounded-full"
            animate={{
              borderColor: ["#ff0000", "#cc0000", "#990000", "#ff0000"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:w-3/5 space-y-6"
        >
          <h3 className="text-2xl font-semibold">Who I Am</h3>
          <p className="text-gray-400">
            I am a passionate backend developer with 1+ years of experience building robust APIs and database architectures. 
            My expertise includes Python, Django, DjangoRestFramework and databases like MySQL, PostgreSQL.
          </p>
          
          <p className="text-gray-400">
            I specialize in creating efficient, scalable solutions that power modern web applications. 
            When I am not coding, I learn about web development and contribute to open source projects.
          </p>
          
          <div className="pt-6">
            <h3 className="text-2xl font-semibold mb-6">My <span className="text-red-600">Skills</span></h3>
            <div className="space-y-4">
              {[
                { name: "Python", level: 90 },
                { name: "Django", level: 95 },
                { name: "Django Rest Framework", level: 95 },
                { name: "REST API Design", level: 95 },
                { name: "HTML", level: 98 },
                { name: "CSS", level: 98},
                { name: "JavaScript", level: 20 }
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-2 rounded-full bg-gradient-to-r from-red-600 to-red-800"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}