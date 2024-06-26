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
            I am Tejas Sharma, a 3-rd year BTech student in IIITA, pursuing Information Technology.
            <br />
            I am a highly passionate and hardworking student, focussed in the fields of DSA, Competitive
            Coding, Frontend Development, Machine Learning and AI.
            <br />
            Through the curriculum, I have acquired thorough knowledge in subjects like Operating
            Systems, OOPS and DBMS, and have also practically leveraged my knowledge of these
            concepts in real life projects.
            <br />
            I am also an avid coder and problem solver with over a year's experience of coding in C and
            C++. Being a Expert on Codeforces and Knight on LeetCode, I have a decent knowledge about DSA and am constantly learning, solving and improving my
            coding skills.
            <br />
            I have hands on experience on working with databases like MySQL and OracleDB.
            <br />
            Besides, I also have a keen interest in Machine Learning and AI. I have received several
            certifications and have developed many Python based projects on OpenCV, CNN, Regression
            and Recommender Systems. I am also the AI-ML Wing Member of our college's prestigious
            technical society, GeekHaven.
            <br />
            Being a <span className="bold">TEDx Speaker</span> and a member of the literary club of our college, I also have proficient
            communication skills and am able to efficiently convey my views and thoughts to others.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
