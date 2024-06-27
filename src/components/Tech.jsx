import "./Tech.css";
import { FaPython, FaJava, FaPhp, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiC } from "react-icons/si";
import { motion } from "framer-motion";

const varaintContainer = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Tech = () => {
  return (
    <div className="tech-page">a
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="Skill-heading">Programming Languages </motion.h2>
      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial = {{x:-100,opacity:0}}
        transition = {{duration:0.5,delay:0.5}}
      className="tech-container"
      >
        <motion.div
        variants={varaintContainer(2.5)}
        initial="initial"
        animate="animate"
         className="tech-item">
          <SiC className="tech-icon" />
          <span
            
            className="tech-name"
          >
            C
          </span>
        </motion.div>
        <motion.div
        variants={varaintContainer(1.6)}
        initial="initial"
        animate="animate"
         className="tech-item">
          <SiCplusplus className="tech-icon" />
          <span className="tech-name">C++</span>
        </motion.div>
        <motion.div
        variants={varaintContainer(2)}
        initial="initial"
        animate="animate"
         className="tech-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            className="tech-icon"
          />

          <span className="tech-name">Python</span>
        </motion.div>
        <motion.div
        variants={varaintContainer(1.5)}
        initial="initial"
        animate="animate"
         className="tech-item">
          <FaJava className="tech-icon" />
          <span className="tech-name">Java</span>
        </motion.div>
        <motion.div
        variants={varaintContainer(1.5)}
        initial="initial"
        animate="animate"
         className="tech-item">
          <FaPhp className="tech-icon" />
          <span className="tech-name">PHP</span>
        </motion.div>
        <motion.div
        variants={varaintContainer(2.2)}
        initial="initial"
        animate="animate"
         className="tech-item">
          <FaDatabase className="tech-icon" />
          <span className="tech-name">SQL</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
