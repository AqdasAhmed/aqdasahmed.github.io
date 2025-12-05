import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, } from "react-icons/fa";
import { SiExpress, SiMongodb, SiGooglecloud, SiFirebase } from "react-icons/si";
import { GoLinkExternal } from "react-icons/go";
import ytclonePic from "../images/ytclone.png";
import ddetectPic from "../images/Picture1.png";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      key: "yt",
      name: "Your-Tube Clone",
      imgSrc: ytclonePic,
      start_date: "May 2025",
      end_date: "July 2025",
      for: "NullClass",
      type: "Internship",
      description:
        "A YouTube-like video platform with features such as video upload, HLS streaming, premium payments, and OTP verification.",
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
        "An AI model that classifies images and videos as real or fake based on a confidence percentage, utilizing Deep Learning for deepfake detection.",
      github: '#',
      live: '#',
      skillsUsed: [
        { skill: 'Python', icon: <FaPython /> },
        { skill: 'Deep Learning', icon: <FaCss3Alt /> },
        { skill: 'JS', icon: <FaJsSquare /> },
        { skill: 'ReactJS', icon: <FaReact /> },
        { skill: 'Git', icon: <FaGitAlt /> },
        { skill: 'GitHub', icon: <FaGithub /> }]
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
              <a href={obj.github} target="_blank" rel="noopener noreferrer" title="GitHub Repo"><FaGithub /></a>
              <a href={obj.live} target="_blank" rel="noopener noreferrer" title="Live Project"><GoLinkExternal /></a>
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
