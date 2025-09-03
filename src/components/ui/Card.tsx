"use client";

import { motion, useMotionTemplate, useMotionValue, MotionStyle } from "framer-motion";
import { ReactNode, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface CardProps {
  children: ReactNode;
  backContent?: ReactNode;
  className?: string;
  github?: string;
  demo?: string;
}

export function Card({
  children,
  backContent,
  className = "",
  github,
  demo,
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top} = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative w-full h-[500px] ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Gradient spotlight effect */}
      {/* <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent" 
             style={{
               backgroundPosition: useMotionTemplate`${mouseX}px ${mouseY}px`
             }} />
      </div> */}
      {/* <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent"
          style={{
            backgroundPosition: useMotionTemplate`${mouseX}px ${mouseY}px` as any
          }}
        />
      </div> */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent"
          style={
            {
              backgroundPosition: useMotionTemplate`${mouseX}px ${mouseY}px`
            } as MotionStyle
          }
        />
      </div>

      {/* 3D Container */}
      <motion.div
        className="relative w-full h-full"
        style={{ 
          transformStyle: "preserve-3d",
          perspective: "1200px"
        }}
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          rotateX: isFlipped ? 5 : 0
        }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-red-900/50 rounded-xl p-6 shadow-2xl w-full h-full flex flex-col"
          style={{ 
            backfaceVisibility: "hidden",
            boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.25)",
            transform: "translateZ(40px)"
          }}
        >
          <div className="absolute inset-0 rounded-xl border border-red-500/10 pointer-events-none" />
          <div className="absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {children}
        </motion.div>

        {/* Back */}
        {backContent && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 border border-red-900/50 rounded-xl p-6 shadow-2xl w-full h-full flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg) translateZ(40px)",
              boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.25)"
            }}
          >
            <div className="absolute inset-0 rounded-xl border border-red-500/10 pointer-events-none" />
            <div className="absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="flex-1">
              {backContent}
            </div>
            
            {(github || demo) && (
              <div className="mt-auto pt-4 flex gap-4 justify-end">
                {github && (
                  <motion.a
                    href={github}
                    title="View on Github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-red-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                )}
                {demo && (
                  <motion.a
                    href={demo}
                    title="View Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-red-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={22} />
                  </motion.a>
                )}
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function CardHeader({ children, className = "" }: CardProps) {
  return (
    <motion.div 
      className={`border-b border-red-900/30 pb-4 mb-4 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export function CardBody({ children, className = "" }: CardProps) {
  return (
    <motion.div 
      className={`${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}