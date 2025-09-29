import React, { useEffect, useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiGooglecloud, SiFirebase } from "react-icons/si";
import './About.css'

const About = () => {
    const education = [
        {
            name: 'Master of Science',
            stream: "Information Technology",
            from: "2022",
            to: "2024",
            college: 'Guru Nanak College of Arts, Science and Commerce',
            university: 'University of Mumbai'
        },

        {
            name: 'Bachelor of Science',
            stream: "Information Technology",
            from: "2019",
            to: "2022",
            college: 'Guru Nanak College of Arts, Science and Commerce',
            university: 'University of Mumbai',
        },
    ]

    const experience = [
        {
            designation: 'Web Developer Intern',
            type: "Intership",
            from: "May 2025",
            to: "July 2025",
            company: 'NullClass',
            location: 'Remote',
            project: 'YouTube Clone',
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
    ]

    return (
        <div className='about' id="container">
            <div id='mySelf'>
                <p>My Self</p>
                <p>
                    Enthusiastic and dedicated Full-Stack Web Developer with an M.Sc in Information Technology from the University of Mumbai.
                </p>
                <p>
                    Skilled in building responsive and dynamic web applications using technologies like React.js, Node.js, JavaScript, HTML, CSS, and Bootstrap. Experienced in both front-end and back-end development with database knowledge in MySQL and MongoDB. Strong foundation in Redux, RESTful APIs, and responsive design principles.
                </p>
                <p>
                    Worked on a YouTube Clone project as part of a NullClass internship, where I have integrated advanced features and deepend my practical understanding of full-stack development. Eager to contribute to real-world applications, learn from industry professionals, and grow in a collaborative development environment.
                </p>
            </div>

            <div id="myEdu">
                <h2>My Education</h2>
                <div className="timeline">
                    {education.map((obj, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{obj.name}</h3>
                                <p><strong>{obj.stream}</strong></p>
                                <p>{obj.from} - {obj.to}</p>
                                <p>{obj.college}</p>
                                <p>{obj.university}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div id="myExp">
                <h2>My Experience</h2>
                <div className="timeline">
                    {experience.map((obj, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{obj.designation}</h3>
                                <p><strong>{obj.company}</strong></p>
                                <p>{obj.from} - {obj.to}</p>
                                <p>{obj.type}</p>
                                <p>{obj.location}</p>
                                <p>Project: {obj.project}</p>

                                {/* Skill Badges */}
                                <div className="skill-badges">
                                    {obj.skillsUsed.map((item, i) => (
                                        <span key={i} className="skill-badge">{item.icon} {item.skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default About