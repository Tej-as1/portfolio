import React from "react";
import "./Hero.css";
import profile from "../assets/profileImage (2).png";
import { motion } from "framer-motion"
const container = (delay) => ({
    hidden:{x:-100,opacity:0},
    visible : {x:0,opacity:1,transition:{duration:0.5,delay:delay}},
})
const Hero = () => {
  const CONTENT =
    "I am a Machine Learning enthusiast with a strong proficiency in Deep learning and OpenCV using Python. Additionally, I am an intermediate-level frontend developer, skilled in technologies such as React,NextJs and JavaScript, and experienced with databases like MySQL and OracleDB. My passion lies in leveraging my skills and creative thinking to propose effective solutions to problems. ";
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-text-container">
          <div className="hero-text">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
              className="hero-heading">Tejas Sharma</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
          
             className="hero-subheading">
              Machine Learning & FrontEnd Developer
            </motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible" 
            className="hero-description">{CONTENT}</motion.p>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image"></div>
          <motion.img
          initial = {{x:100,opacity:0}}
          animate = {{x:0,opacity:1,transition:{duration:1,delay:1}}}
           src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
