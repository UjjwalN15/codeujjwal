"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import projects from "@/data/projects.json";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Card } from "@/components/ui/Card";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Get filtered projects based on active tab
  const getFilteredProjects = () => {
    return activeTab === "all" 
      ? projects 
      : projects.filter(project => project.category === activeTab);
  };

  // Calculate pagination data
  const getPaginationData = () => {
    const filteredProjects = getFilteredProjects();
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    
    return { filteredProjects, totalPages, currentProjects };
  };

  const { filteredProjects, totalPages, currentProjects } = getPaginationData();

  // Reset to page 1 when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Handle page change
  const paginate = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    
    // Smooth scroll to projects section
    document.getElementById('projects-grid')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="projects" className="py-10 px-6 md:px-20 mt-[20px] md:mt-[-1px]">
      <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-10 text-center"
            >
              My <span className="text-red-600">Projects</span>
            </motion.h2>
      {/* Category Filter Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mb-10 gap-2 flex-wrap"
      >
        {['all', 'backend', 'frontend', 'seo'].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg text-sm md:text-base ${
              activeTab === tab 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } capitalize transition-colors`}
          >
            {tab === 'all' ? 'All Projects' : tab}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div id="projects-grid">
        <motion.div
          key={`${activeTab}-${currentPage}`} // This ensures animation replay on tab/page change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="h-full"
            >
              <Card
                backContent={
                  <div className="h-full flex flex-col p-6">
                    <div className="flex-grow">
                      <h4 className="font-semibold mb-2 text-red-500">Description:</h4>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      
                      {project.features && (
                        <>
                          <h4 className="font-semibold mb-2 text-red-500">Features:</h4>
                          <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-300">
                            {project.features.map((feature, i) => (
                              <li key={i} className="text-sm md:text-base">{feature}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                    <div className="flex gap-3 mt-auto pt-4">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-red-600 transition-colors"
                          title="View on GitHub"
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-red-600 transition-colors"
                          title="View Live Demo"
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                }
              >
                <div className="h-full flex flex-col">
                  <div className="relative h-48 md:h-56 overflow-hidden rounded-t-lg">
                    <Image
                      src={`/projects/${project.image}`}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2 text-sm md:text-base">
                      {project.shortDescription || project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-gray-700 px-2 py-1 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-2 text-xs md:text-sm text-gray-500">
                      Hover to see details
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pagination - Only shows if more than 6 projects exist in current tab */}
      {filteredProjects.length > projectsPerPage && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mt-12 gap-2"
        >
          <motion.button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-lg ${
              currentPage === 1 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            aria-label="Previous page"
          >
            <FaChevronLeft />
          </motion.button>

          {/* Show first page */}
          <motion.button
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              currentPage === 1 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            1
          </motion.button>

          {/* Show ellipsis if needed */}
          {currentPage > 3 && totalPages > 4 && (
            <span className="text-gray-400 px-1">...</span>
          )}

          {/* Show current page and neighbors */}
          {Array.from({ length: Math.min(totalPages - 2, 3) }).map((_, i) => {
            const page = Math.max(2, Math.min(currentPage - 1, totalPages - 3)) + i;
            if (page >= totalPages) return null;
            return (
              <motion.button
                key={page}
                onClick={() => paginate(page)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  currentPage === page 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {page}
              </motion.button>
            );
          })}

          {/* Show ellipsis if needed */}
          {currentPage < totalPages - 2 && totalPages > 4 && (
            <span className="text-gray-400 px-1">...</span>
          )}

          {/* Show last page if not already shown */}
          {totalPages > 1 && (
            <motion.button
              onClick={() => paginate(totalPages)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                currentPage === totalPages 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {totalPages}
            </motion.button>
          )}

          <motion.button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-lg ${
              currentPage === totalPages 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            aria-label="Next page"
          >
            <FaChevronRight />
          </motion.button>
        </motion.div>
      )}
    </section>
  );
}