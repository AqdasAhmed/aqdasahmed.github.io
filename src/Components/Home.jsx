import React, { useEffect, useState } from 'react'
import { FaCodepen, FaFreeCodeCamp, FaGithub, FaInstagram, FaLinkedin, FaPhone} from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import { FaThreads, FaLocationDot } from "react-icons/fa6";
import { HiMiniArrowPathRoundedSquare } from 'react-icons/hi2'
import { MdMail } from 'react-icons/md';
import myPic from '../images/myPic2.png'
import useScrollStep from '../hooks/useScrollStep';
import './Home.css'

const Home = ({ onPicClick }) => {
    const name_list = [
        // 'Full-Stack Developer',
        // 'Full-Stack Engineer',
        // 'MERN Stack Developer',
        'Frontend Developer',
        'Frontend Engineer',
        'UI Developer',
    ]

    const contact_list = [
        // {
        //   name: 'Instagram',
        //   link: 'https://www.instagram.com/_khan_aqdas_/',
        //   icon: <FaInstagram />,
        // },
        {
            name: 'Threads',
            link: 'https://www.threads.com/@_khan_aqdas_',
            icon: <FaThreads />,
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/aqdas-khan-777286291',
            icon: <FaLinkedin />,
        },
        {
            name: 'Github',
            link: 'https://github.com/AqdasAhmed',
            icon: <FaGithub />,
        },
        {
            name: 'Codepen',
            link: 'https://codepen.io/AqdasAhmed',
            icon: <FaCodepen />,
        },
        {
            name: 'FreeCodeCamp',
            link: 'https://www.freecodecamp.org/AqdasAhmed',
            icon: <FaFreeCodeCamp />,
        },
        {
            name: 'Credly',
            link: 'https://www.credly.com/users/aqdas-ahmed-khan',
            icon: <SiCredly />,
        }
    ]

    const scrollStep = useScrollStep(10, 5);

    return (
        <div
            className={`home ${scrollStep > 2 ? 'scrolled' : ''}`}
            id="home"
        >
            <img
                src={myPic}
                alt="myPic"
                id='myPic'
            />
            <div id='myNameTitles'>
                <h4 id='myName'>Hi! I am AQDAS AHMED KHAN</h4>
                <div id='myTitles' style={{ flexDirection: 'row' }}>
                    {name_list.map((obj) => (
                        <div id='myTitle'>{obj}</div>
                    ))}
                </div>
            </div>

            <div id='myContact'>
                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}><MdMail style={{ paddingRight: '10px', borderRight: '1px solid rgba(255, 255, 255, 0.5)' }} /><a href="mailto:aqdasahmedkhan@gmail.com" target='_blank'>aqdasahmedkhan@gmail.com</a></span>
                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}><FaPhone style={{ paddingRight: '10px', borderRight: '1px solid rgba(255, 255, 255, 0.5)' }} /><a href="tel:+919819046683" target='_blank'>+91 9819046683</a></span>
                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}><FaLocationDot style={{ paddingRight: '10px', borderRight: '1px solid rgba(255, 255, 255, 0.5)' }} /><a href="https://www.google.com/maps/place/Kurla+(W),+Mumbai,+Maharashtra/@19.044736,72.868934,13z/data=!4m5!3m4!1s0x3be7c9c8c8c8c8c8:0x3be7c9c8c8c8c8c8!8m2!3d19.044736!4d72.868934" target='_blank'>Kurla(W), Mumbai, Maharashtra</a></span>

            </div>

            <div id='myProfiles' style={{ flexDirection: 'row' }}>
                {contact_list.map((obj) => (
                    <span id='myProfile'><a href={obj.link} target='_blank' title={obj.name}>{obj.icon}</a></span>
                ))}
            </div>
        </div>
    );
}

export default Home