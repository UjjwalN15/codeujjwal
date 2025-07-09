// "use client";
// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";

// export default function Hero() {
//   return (
//     <section className="h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 gap-10">
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//         className="md:w-1/2 space-y-6"
//       >
//         <h1 className="w-[100vw] pl-5 text-3xl md:text-[75px] font-bold">
//             Hi, I am <span className="text-red-600">Ujjwal Neupane</span> <br />
//         </h1>
//         <h1 className="text-2xl pl-5 md:text-5xl font-semibold">
//             I am a{" "}
//             <span className="text-red-600">
//             <Typewriter
//               words={["Backend Developer", "Youtuber", "SEO Specialist"]}
//               loop={true}
//               cursor
//               cursorStyle="_"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </span>
//         </h1>
        
//         <p className="text-lg p-5 text-gray-400">
//           I build scalable APIs and optimize websites for performance and search engines.
//         </p>
        
//         <div className="flex gap-4 p-5">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-medium"
//             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//           >
//             Hire Me
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="border border-red-600 hover:bg-gray-900 px-6 py-3 rounded-lg font-medium flex items-center gap-2"
//             onClick={() => {
//               // Create a temporary anchor element
//               const link = document.createElement('a');
//               link.href = '/Ujjwal-Neupane-cv - updated.pdf';
//               link.download = 'UjjwalNeuoane-CV.pdf'; // The filename you want users to see
//               document.body.appendChild(link);
//               link.click();
//               document.body.removeChild(link);
//             }}
//           >
//             <FaDownload /> View My CV
//           </motion.button>
//         </div>
        
//         <div className="flex gap-4 mt-6 p-5">
//           {[
//             { icon: <FaGithub size={24} />, url: "https://github.com" },
//             { icon: <FaLinkedin size={24} />, url: "https://linkedin.com" },
//             { icon: <FaTwitter size={24} />, url: "https://twitter.com" },
//             { icon: <HiOutlineMail size={24} />, url: "mailto:you@example.com" },
//           ].map((social, index) => (
//             <motion.a
//               key={index}
//               href={social.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -5, color: "#ff0000" }}
//               className="text-gray-400 hover:text-red-600 transition-colors"
//             >
//               {social.icon}
//             </motion.a>
//           ))}
//         </div>
//       </motion.div>
      
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//         className="md:w-1/2 flex justify-center"
//       >
//         <div className="relative w-80 h-[140px] mt-[300px] md:w-96 md:h-full md:ml-50 md:mt-[-50px] ">
//           <motion.div
//             className="absolute inset-0 bg-red-600 rounded-t-full blur-sm opacity-5"
//             animate={{
//               scale: [1, 1.1, 1],
//               opacity: [0.2, 0.3, 0.2],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//           <motion.img
//             src="/portfolio.png"
//             alt="Profile"
//             className="relative z-10 w-full h-full object-cover rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// }




"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaDownload, FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import ParticlesBackground from "../ui/ParticlesBackground";
 

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 gap-10 overflow-hidden">
      {/* Particle Background */}
      {/* <div className="absolute inset-0 -z-10"> */}
      {/* </div> */}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 space-y-6"
      >
        <h1 className="w-[100vw] pl-5 text-3xl md:text-[75px] font-bold">
          Hi, I am <span className="text-red-600">Ujjwal Neupane</span> <br />
        </h1>
        <h1 className="text-2xl pl-5 md:text-5xl font-semibold">
          I am a{" "}
          <span className="text-red-600">
            <Typewriter
              words={["Backend Developer", "Django Developer","Python Developer", "Youtuber"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="text-lg p-5 text-gray-400">
          I build scalable APIs and optimize websites for performance and search engines.
        </p>

        <div className="flex gap-4 p-5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-medium"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Hire Me
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-red-600 hover:bg-gray-900 px-6 py-3 rounded-lg font-medium flex items-center gap-2"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Ujjwal-Neupane-cv - updated.pdf";
              link.download = "UjjwalNeuoane-CV.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <FaDownload /> View My CV
          </motion.button>
        </div>

        <div className="flex gap-4 mt-6 p-5">
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
              whileHover={{ y: -5, color: "#ff0000" }}
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 flex justify-center"
      >
        <div className="relative w-80 h-140 mt-[300px] md:w-96 md:h-full md:ml-50 md:mt-[-50px] ">
          <motion.div
            className="absolute inset-0 bg-red-600 rounded-t-full blur-sm opacity-5"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src="/portfolio.png"
            alt="Profile"
            className="relative z-10 w-full h-full object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
