import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb, SiGooglecloud, SiFirebase, SiTypescript, SiThreedotjs, SiTailwindcss } from "react-icons/si";
import { GoLinkExternal } from "react-icons/go";
import { RiNextjsLine } from "react-icons/ri";
import ytclonePic from "../images/ytclone.png";
import ddetectPic from "../images/Picture1.png";
import threeDEarthPic from '../images/3d-earth-visualizer (2).png'
import ddeskPic from '../images/doctors-desk.png'
import financerPic from '../images/financer.png'
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      key: "yt",
      name: "You-Tube Clone",
      imgSrc: ytclonePic,
      start_date: "May 2025",
      end_date: "July 2025",
      for: "NullClass",
      type: "Internship",
      description:
        "A full-stack YouTube clone built with the MERN stack, featuring user authentication, video upload and streaming, real-time comments, and a responsive design for an engaging user experience. The project utilizes MongoDB for data storage, ExpressJS and NodeJS for backend development, and ReactJS for the frontend interface. Deployed on Firebase and Google Cloud Platforms (GCP) for scalability and performance.",
      github: 'https://github.com/AqdasAhmed/you_tube_clone',
      live: 'https://play-tube-clone.netlify.app/',
      skillsUsed: [
        { skill: 'HTML', icon: <FaHtml5 /> },
        { skill: 'CSS', icon: <FaCss3Alt /> },
        { skill: 'JS', icon: <FaJsSquare /> },
        { skill: 'MongoDB', icon: <SiMongodb /> },
        { skill: 'ExpressJS', icon: <SiExpress /> },
        { skill: 'ReactJS', icon: <FaReact /> },
        { skill: 'NodeJS', icon: <FaNodeJs /> },
        { skill: 'Firebase', icon: <SiFirebase /> },
        { skill: 'Google Cloud Platforms (GCP)', icon: <SiGooglecloud /> },
        { skill: 'Git', icon: <FaGitAlt /> },
        { skill: 'GitHub', icon: <FaGithub /> }]
    },
    {
      key: "deepdetect",
      name: "DeepDetect",
      imgSrc: ddetectPic,
      start_date: "July 2023",
      end_date: "January 2024",
      for: "Guru Nanak College of Arts, Science and Commerce",
      type: "Academic Project",
      description:
        "A deep learning-based image classification system designed to accurately identify and categorize images into predefined classes. The project utilizes convolutional neural networks (CNNs) implemented in Python, leveraging libraries such as TensorFlow for model development and training. The system is trained on a diverse dataset of labeled images, achieving high accuracy in classification tasks. The project also incorporates data preprocessing techniques, model evaluation metrics, and optimization strategies to enhance performance.",
      skillsUsed: [
        { skill: 'Python', icon: <FaPython /> },
        { skill: 'Deep Learning', icon: <FaCss3Alt /> },
        { skill: 'JS', icon: <FaJsSquare /> },
        { skill: 'ReactJS', icon: <FaReact /> },
        { skill: 'Git', icon: <FaGitAlt /> },
        { skill: 'GitHub', icon: <FaGithub /> }]
    },
    {
      key: "3d-earth-visualizer",
      name: "3D Earth Visualizer",
      imgSrc: threeDEarthPic,
      start_date: "November 20 2025",
      end_date: "November 26 2025",
      for: "",
      type: "Personal Project",
      description:
        "A real-time interactive 3D visualization of global financial exchanges and cloud regions, built using Next.js, Three.js, and React Three Fiber. The application provides an immersive experience for users to explore financial data and cloud infrastructure across the globe, with features such as dynamic data rendering, user interaction, and responsive design for seamless access on various devices.",
      github: 'https://github.com/AqdasAhmed/3d-earth-visualizer',
      live: 'https://3d-earth-visualizer.vercel.app/',
      skillsUsed: [
        { skill: 'Next.js', icon: <RiNextjsLine /> },
        { skill: 'TypeScript', icon: <SiTypescript /> },
        { skill: 'JS', icon: <FaJsSquare /> },
        { skill: 'ThreeJS', icon: <SiThreedotjs /> },
      ]
    },
    {
      key: "doctors-desk",
      name: "Doctors Desk",
      imgSrc: ddeskPic,
      start_date: "February 20 2026",
      end_date: "April 2 2026",
      for: "",
      type: "Personal Project",
      description:
        "A comprehensive healthcare management system that streamlines patient records, appointment scheduling, and telemedicine consultations, built using Next.js, TypeScript, Tailwind CSS, and JavaScript. The platform offers a user-friendly interface for both patients and healthcare providers, enhancing the efficiency of medical services and improving patient care.",
      github: 'https://github.com/AqdasAhmed/DoctorsDesk',
      live: 'https://doctors-desk-rho.vercel.app/',
      skillsUsed: [
        { skill: 'Next.js', icon: <RiNextjsLine /> },
        { skill: 'TypeScript', icon: <SiTypescript /> },
        { skill: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { skill: 'JS', icon: <FaJsSquare /> },
      ]
    },
    {
      key: "financer",
      name: "Financer",
      imgSrc: financerPic,
      start_date: "November 20 2025",
      end_date: "November 26 2025",
      for: "",
      type: "Personal Project",
      description:
        "A modern, responsive personal finance management dashboard built with Next.js and React. Track income and expenses with powerful filters, real-time charts, and actionable insights. The dashboard offers a user-friendly interface for managing budgets, visualizing financial trends, and making informed decisions about your money.",
      github: 'https://github.com/AqdasAhmed/financer',
      live: 'https://financer-berugsh1z-aqdasahmeds-projects.vercel.app/',
      skillsUsed: [
        { skill: 'Next.js', icon: <RiNextjsLine /> },
        { skill: 'TypeScript', icon: <SiTypescript /> },
        { skill: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { skill: 'JS', icon: <FaJsSquare /> },
      ]
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects" id="project">
      <h2 className="section-title">My Projects</h2>
      <div className="project-list">
        {projects.map((obj) => (
          <div
            className={`project project-${obj.key}`}
            key={obj.key}
          >
            <div className="project-img">
              <img src={obj.imgSrc} alt={obj.name} />
            </div>
            <div className="project-links">
              {obj.github && (
                <a href={obj.github} target="_blank" rel="noopener noreferrer" title="GitHub Repo"><FaGithub /></a>
              )}
              {obj.live && (
                <a href={obj.live} target="_blank" rel="noopener noreferrer" title="Live Project"><GoLinkExternal /></a>
              )}
            </div>
            <div className="project-details" onClick={() => setSelectedProject(obj)}>
              <p><strong>{obj.name}</strong></p>
              <p>{obj.type} | {obj.for}</p>
              <p>{obj.start_date} - {obj.end_date}</p>
            </div>
            <div className="project-body">
              <p><i>{obj.description}</i></p>
              <div className="skill-badges">
                {obj.skillsUsed.map((item, i) => (
                  <span key={i} className="skill-badge">{item.icon} {item.skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {/* {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              &times;
            </button>
            <div className="modal-images">
              <img src={selectedProject.imgSrc} alt={selectedProject.name} />

            </div>
            <div className="modal-details">
              <h3>{selectedProject.name}</h3>
              <p><b>Type:</b> {selectedProject.type}</p>
              <p><b>For:</b> {selectedProject.for}</p>
              <p><b>Duration:</b> {selectedProject.start_date} - {selectedProject.end_date}</p>
              <p>{selectedProject.description}</p>
              <div className="skill-badges">
                {selectedProject.skillsUsed.map((item, i) => (
                  <span key={i} className="skill-badge">{item.icon} {item.skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Projects;
