import "./Skill.css";
import { FaPython, FaJava, FaPhp, FaDatabase, FaReact } from "react-icons/fa";
import { SiCplusplus, SiMysql,SiOracle,SiGithub } from "react-icons/si";
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
const Skill = () => {
  return (
    <div className="Skill-page">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="Skill-heading">Skills </motion.h2>
      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial = {{x:100,opacity:0}}
        transition = {{duration:0.5,delay:0.5}}
      className="Skill-container"
      >
        <motion.div
        variants={varaintContainer(2.5)}
        initial="initial"
        animate="animate"
         className="Skill-item">
          <FaReact className="Skill-icon" />
          <span
            
            className="Skill-name"
          >
            React
          </span>
        </motion.div>
        <motion.div
        variants={varaintContainer(1.6)}
        initial="initial"
        animate="animate"
         className="Skill-item">
          <SiMysql className="Skill-icon" />
          <span className="Skill-name">MySQL</span>
        </motion.div>
        <motion.div
        variants={varaintContainer(1.6)}
        initial="initial"
        animate="animate"
         className="Skill-item">
          <SiOracle className="Skill-icon" />
          <span className="Skill-name">OracleDB</span>
        </motion.div>
        <motion.div
          variants={varaintContainer(2.5)}
          initial="initial"
          animate="animate"
          className="Skill-item"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
            alt="TensorFlow"
            className="Skill-icon"
          />
          <span className="Skill-name">TensorFlow</span>
        </motion.div>
        <motion.div
        variants={varaintContainer(1.5)}
        initial="initial"
        animate="animate"
         className="Skill-item">
          <SiGithub className="Skill-icon" />
          <span className="Skill-name">GitHub</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skill;
