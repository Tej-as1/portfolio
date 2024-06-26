import React from "react";
import "./ProjectPage.css";

import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "..//assets/proj3.jpg";
import proj4 from "..//assets/proj4.jpg";
import proj5 from "..//assets/proj5.png";
import { motion } from "framer-motion";
const projects = [
  {
    title: "MedZ: Deep Learning based Medical Image Classifier",
    image: proj1,
    description:
    <p>
      • Goal: To create a robust classification system to classify a given
medical X-Ray image into infected or uninfected classes,
leveraging a dataset provided
<br/>
• Built a Convolutional Neural Network Model to implement the
binary classification with a ROC-AUC Score of 1.0 on val data and
99% accuracy on test data.
    </p>,
    technologies: ["Python", "OpenCV", "CNN", "StreamLit"],
    link: "https://medzdeployement.streamlit.app/",
  },
  {
    title: "AgroSol: An Agri-Business Platform",
    image: proj3,
    description: <p>
      • Goal: To directly connect farmers with potential buyers by
eliminating intermediaries, ensuring farmers receive fair prices for their produce.
<br/>
• Developed a system for farmers to upload their produce which can
be bought by the buyers. Added functionalities of email
verification login, farmer and buyer sessions, MySQL database to
maintain the produce information, various triggers to apply
automatic discounts and exception handling.
    </p>,
    technologies: ["PHP", "SQL", "MySQL", "XAMPP"],
    link: "https://github.com/Tej-as1/AgroSol",
  },
  {
    title: "Venue Vista: From Frustration to Facilitation",
    image: proj2,
    description: <p>• Goal: To streamline operations for restaurants/hospitals by
providing a management website which enables users to check
real-time seat availability, saving time and preventing
seat shortages.<br/>
•Contribution: Made a ML model for recommmending
restaurants using Tfidf Vectorizer and contributed in the frontend
design of the website</p>,
    technologies: ["Python", "NLP", "React"],
    link: "https://hackout-team-void-frontend.onrender.com/",
  },
  ,
  {
    title: "Regression based Automated Coin Value Aggregator",
    image: proj4,
    description: <p>
• Goal: To find the total sum value of all the coins in a given image (Built for a National Level Kaggle Competition) <br/>
• Developed a Regression based ensemble model using XgBoost and LgBoost combined with a VotingRegressor to achieve a RMSE of 12.43 on the test data.</p>,
    technologies: ["Python", "XgBoost", "LgBoost", "Regression"],
    link: "https://www.kaggle.com/code/tejassharma17/sample-notebook",
  },
  {
    title: "Portfolio Website",
    image: proj5,
    description:<p>
      Developed a responsive and cleanly designed personal portfolio website using ReactJS and Tailwind CSS. The website showcases my projects and skills effectively and is deployed on Vercel for seamless accessibility.
    </p>,
    technologies: ["ReactJs", "Tailwind CSS", "Framer Motion", "Vercel"],
    link: "https://github.com/Tej-as1/portfolio"
  },
];

const ProjectPage = () => {
  return (
    <div className="project-page">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="project-heading"
      >
        Projects{" "}
      </motion.h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <a
            key={index}
            className="project-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="project-box"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="project-item"
              >
                {" "}
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
                <div className="project-content">
                  <h6 className="project-title">{project.title}</h6>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-box">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
