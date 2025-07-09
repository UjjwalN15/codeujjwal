"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp, FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className=" bg-gray-900/90 py-10 px-6 md:px-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-bold mb-2">Ujjwal Neupane</h3>
            <p className="text-white">Backend Developer</p>
          </div>
          
          <div className="flex gap-6">
            {[
              { icon: <FaGithub size={24} />, url: "https://github.com/UjjwalN15" },
              { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/ujjwal-neupane-84a853234/" },
              { icon: <FaFacebook size={24} />, url: "https://www.facebook.com/ujjwal.neupane.612668/" },
              { icon: <FaInstagram size={24} />, url: "https://www.instagram.com/the_ujjwaln/" },
              { icon: <HiOutlineMail size={24} />, url: "mailto:itsmeujjwal725@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#ff0000" }}
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          
          <div className="flex gap-4">
            <a href="#about" className="text-gray-400 hover:text-red-600 text-sm">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-red-600 text-sm">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-red-600 text-sm">
              Contact
            </a>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-red-600 transition-colors"
            aria-label="Back to top"
          >
            <FaArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}