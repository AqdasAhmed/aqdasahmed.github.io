import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiGooglecloud, SiFirebase } from "react-icons/si";
import { GrMysql } from 'react-icons/gr';
import './Skills.css'

const Skills = () => {
  const skillSet = [
    { key: 'html', name: 'HTML', imgSrc: <FaHtml5 />, for: 'frontend' },
    { key: 'css', name: 'CSS', imgSrc: <FaCss3Alt />, for: 'frontend' },
    { key: 'js', name: 'JavaScript', imgSrc: <FaJsSquare />, for: 'frontend' },
    { key: 'react', name: 'ReactJS', imgSrc: <FaReact />, for: 'frontend' },
    { key: 'bootstrap', name: 'Bootstrap', imgSrc: <FaBootstrap />, for: 'frontend' },
    { key: 'express', name: 'ExpressJS', imgSrc: <SiExpress />, for: 'backend' },
    { key: 'nodejs', name: 'NodeJS', imgSrc: <FaNodeJs />, for: 'backend' },
    { key: 'mongo', name: 'MongoDB', imgSrc: <SiMongodb />, for: 'database' },
    { key: 'mysql', name: 'MySQL', imgSrc: <GrMysql />, for: 'database' },
    { key: 'gcp', name: 'Google Cloud', imgSrc: <SiGooglecloud />, for: 'cloud' },
    { key: 'firebase', name: 'Firebase', imgSrc: <SiFirebase />, for: 'cloud' },
    { key: 'git', name: 'Git', imgSrc: <FaGitAlt />, for: 'version control' },
    { key: 'github', name: 'GitHub', imgSrc: <FaGithub />, for: 'version control' },
  ];

  // Group skills by "for"
  const groupedSkills = skillSet.reduce((acc, skill) => {
    if (!acc[skill.for]) acc[skill.for] = [];
    acc[skill.for].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills" id="skill">
      <h2>My Skills</h2>

      {Object.keys(groupedSkills).map((category) => (
        <div key={category} className="skill-section">
          <h3 className="skill-category">{category.toUpperCase()}</h3>
          <div className="skill-set">
            {groupedSkills[category].map((obj) => (
              <div key={obj.key} className={`skill skill-${obj.key}`}>
                <div className="img">{obj.imgSrc}</div>
                <p>{obj.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
