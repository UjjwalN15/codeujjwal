// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// interface CardProps {
//   children: ReactNode;
//   className?: string;
// }

// export function Card({ children, className = "" }: CardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className={`bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-lg ${className}`}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export function CardHeader({ children, className = "" }: CardProps) {
//   return (
//     <div className={`border-b border-gray-700 pb-4 mb-4 ${className}`}>
//       {children}
//     </div>
//   );
// }

// export function CardBody({ children, className = "" }: CardProps) {
//   return <div className={`${className}`}>{children}</div>;
// }


// "use client";

// import { motion } from "framer-motion";
// import { ReactNode, useState } from "react";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // ✅ ADD THIS

// interface CardProps {
//   children: ReactNode;
//   backContent?: ReactNode;
//   className?: string;
//   github?: string;        // ✅ ADD THIS
//   demo?: string;          // ✅ ADD THIS
// }

// export function Card({
//   children,
//   backContent,
//   className = "",
//   github,
//   demo,
// }: CardProps) {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className={`relative h-full ${className}`}
//     >
//       <motion.div
//         className="w-full h-full"
//         animate={{ rotateY: isFlipped ? 180 : 0 }}
//         transition={{ duration: 1, delay: 0.1 }}
//         onMouseEnter={() => setIsFlipped(true)}
//         onMouseLeave={() => setIsFlipped(false)}
//         style={{
//           transformStyle: "preserve-3d",
//         }}
//       >
//         {/* Front of the card */}
//         <motion.div
//           className={`bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-lg w-full h-full backface-hidden ${
//             isFlipped ? "hidden" : ""
//           }`}
//           style={{ backfaceVisibility: "hidden" }}
//         >
//           {children}
//         </motion.div>

//         {/* Back of the card */}
//         {backContent && (
//           <motion.div
//             className={`absolute top-0 left-0 bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow-lg w-full h-full backface-hidden ${
//               isFlipped ? "" : "hidden"
//             }`}
//             style={{
//               backfaceVisibility: "hidden",
//               rotateY: 180,
//             }}
//           >
//             {backContent}

//             {/* ✅ Conditional GitHub and Demo Icons */}
//             <div className="mt-4 flex gap-4">
//               {github && (
//                 <a
//                   href={github}
//                   title = "View on Github"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white hover:text-blue-400 transition"
//                 >
//                   <FaGithub size={24} />
//                 </a>
//               )}
//               {demo && (
//                 <a
//                   href={demo}
//                   title = "View Live project"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white hover:text-green-400 transition"
//                 >
//                   <FaExternalLinkAlt size={22} />
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// }

// export function CardHeader({ children, className = "" }: CardProps) {
//   return (
//     <div className={`border-b border-gray-700 pb-4 mb-4 ${className}`}>
//       {children}
//     </div>
//   );
// }

// export function CardBody({ children, className = "" }: CardProps) {
//   return <div className={`${className}`}>{children}</div>;
// }


"use client";

import { motion } from "framer-motion";
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative w-full h-[500px] ${className}`}
    >
      {/* 3D Container */}
      <motion.div
        className="relative w-full h-full"
        style={{ 
          transformStyle: "preserve-3d",
          perspective: "1200px"
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front - Absolutely positioned */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg w-full h-full"
          style={{ 
            backfaceVisibility: "hidden",
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.4)"
          }}
        >
          {children}
        </motion.div>

        {/* Back - Absolutely positioned with 180deg rotation */}
        {backContent && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg w-full h-full"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.4)"
            }}
          >
            {backContent}
            <div className="mt-4 flex gap-4">
              {github && (
                <a
                  href={github}
                  title="View on Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition"
                >
                  <FaGithub size={24} />
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  title="View Live Demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-400 transition"
                >
                  <FaExternalLinkAlt size={22} />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function CardHeader({ children, className = "" }: CardProps) {
  return (
    <div className={`border-b border-gray-700 pb-4 mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = "" }: CardProps) {
  return <div className={`${className}`}>{children}</div>;
}