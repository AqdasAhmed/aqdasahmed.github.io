import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiMongodb, SiGooglecloud, SiFirebase } from "react-icons/si";
import './Skills.css'
import { GrMysql } from 'react-icons/gr';

const Skills = () => {
  const skillSet = [
    {
      key: 'html',
      name: 'HTML',
      level: 'Expert',
      project: 'Your-Tube Clone',
      imgSrc: <FaHtml5 />,

    },
    {
      key: 'css',
      name: 'CSS',
      level: 'Expert',
      project: 'Your-Tube Clone',
      imgSrc: <FaCss3Alt />,
    },
    {
      key: 'js',
      name: 'JS',
      level: 'Expert',
      project: 'Your-Tube Clone',
      imgSrc: <FaJsSquare />
    },
    {
      key: 'react',
      name: 'ReactJS',
      level: 'Expert',
      project: 'Your-Tube Clone',
      imgSrc: <FaReact />
    },
    {
      key: 'express',
      name: 'ExpressJs',
      level: 'Expert',
      project: 'Your-Tube Clone',
      imgSrc: <SiExpress />,

    },
    {
      key: 'mongo',
      name: 'MongoDB',
      level: 'Expert',
      project: 'Your-Tube Clone',
      imgSrc: <SiMongodb />,
    },
    {
      key: 'nodejs',
      name: 'NodeJS',
      level: 'Expert',
      project: 'Your-Tube Clone',
      imgSrc: <FaNodeJs />
    },
    {
      key: 'gcp',
      name: 'Google Cloud Platforms',
      level: 'Expert',
      project: 'Your-Tube Clone',
      imgSrc: <SiGooglecloud />
    },
    {
      key: 'firebase',
      name: 'Firebase',
      level: 'Expert',
      project: 'Your-Tube Clone',
      imgSrc: <SiFirebase />
    },
    {
      key: 'git',
      name: 'Git',
      level: 'Expert',
      project: 'Your-Tube Clone',
      imgSrc: <FaGitAlt />
    },
    {
      key: 'mysql',
      name: 'MySQL',
      level: 'Expert',
      project: '--',
      imgSrc: <GrMysql />
    },
    {
      key: 'bootstrap',
      name: 'Bootstrap',
      level: 'Expert',
      project: '--',
      imgSrc: <FaBootstrap />
    },
  ]
  return (
    <div className='skills' id="container">
      <h2 style={{ fontSize: '1.8rem' }}>My Skills</h2>
      <div className="skill-set">
        {skillSet.map((obj) => (
          <div className={`skill skill-${obj.key}`}>
            <div className='img'>{obj.imgSrc}</div>
            <p>{obj.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills