import React from 'react';
import './About.css';
import aboutImage from "../assets/about.jpg"
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="about-page">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="about-heading">About <span className="about-me"> Me </span> </motion.h2>
      <div className="about-container">
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial = {{opacity:0,x:-100}}
        transition={{duration:0.5,delay:0.3}}
        className="about-image">
          <img src={aboutImage} alt="About Me" />
          
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial = {{opacity:0,x:100}}
        transition={{duration:0.5,delay:0.3 }}
        className="about-text">
          <p>
  I am Tejas Sharma, a 3rd year BTech student at IIITA, pursuing Information Technology. My passion and hard work are focused on DSA, Competitive Coding, Frontend Development, Machine Learning, and AI.<br></br>
  Through my curriculum, I have gained knowledge in Operating Systems, OOPS, and DBMS, applying these concepts in real-life projects. I have over a year of coding experience in C and C++, and am an Expert on Codeforces and a Knight on LeetCode.<br></br>
  I have hands-on experience with databases like MySQL and OracleDB. I am also deeply interested in Machine Learning and AI, with several certifications and projects on OpenCV, CNN, Regression, and Recommender Systems. As an AI-ML Wing Member of GeekHaven, our college's technical society, I actively engage in AI-ML activities.<br></br>
  Additionally, I am a TEDx Speaker and a member of our college's literary club, which has helped me develop proficient communication skills to convey my views effectively.
</p>

        </motion.div>
      </div>
    </div>
  );
};

export default About;
