import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
const Contact = () => {
  const res =
    "https://drive.google.com/file/d/1aRpW23n3yaD2i18CUVHTIufX4FNVI0u7/view?usp=sharing";
  return (
    <div className="contact-page">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="contact-heading"
      >
        Contact
      </motion.h2>
      <div 
             
      className="contact-info">
        <motion.p
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ x: -100, opacity: 0 }}
         transition={{ duration: 0.5, delay: 0.5 }}
 
        >Indian Institute of Information Technology, Allahabad (IIITA)</motion.p>
        <motion.p
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ x: 100, opacity: 0 }}
         transition={{ duration: 0.5, delay: 0.5 }}
 
        >
          Email:{" "}
          <a
            href="mailto:tsharma1704@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            tsharma1704@gmail.com
          </a>
        </motion.p>{" "}
        {/* Added target="_blank" and rel="noopener noreferrer" */}
        <motion.p
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ x: -100, opacity: 0 }}
         transition={{ duration: 0.5, delay: 0.5 }}
 
        >
          Phone: <a href="tel:+1234567890">+91 7727048420</a>
        </motion.p>
        <motion.p
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ x: 100, opacity: 0 }}
         transition={{ duration: 0.5, delay: 0.5 }}
 
        >
          Resume:{" "}
          <a href={res} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
