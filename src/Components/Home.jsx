import React, { useEffect, useState } from 'react'
import { FaGithub, FaFreeCodeCamp, FaCodepen } from "react-icons/fa";
import {HiMiniArrowPathRoundedSquare} from 'react-icons/hi2'
import myPic from '../images/myPic2.png'
import useScrollStep from '../hooks/useScrollStep';
import './Home.css'

const Home = ({ onPicClick }) => {
    const name_list = [
        'Full-Stack Developer',
        'Full-Stack Engineer',
        'MERN Stack Developer',
    ]

    // const contact_list = [
    //     {
    //         name: 'Github',
    //         link: 'https://github.com/AqdasAhmed',
    //         icon: <FaGithub />,
    //     },
    //     {
    //         name: 'Codepen',
    //         link: 'https://codepen.io/AqdasAhmed',
    //         icon: <FaCodepen />,
    //     },
    //     {
    //         name: 'FreeCodeCamp',
    //         link: 'https://www.freecodecamp.org/AqdasAhmed',
    //         icon: <FaFreeCodeCamp />,
    //     }
    // ]

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
            {/* <div id='myProfiles' style={{ flexDirection: 'row' }}>
                {contact_list.map((obj) => (
                    <span id='myProfile'><a href={obj.link} target='_blank' title={obj.name}>{obj.icon}</a></span>
                ))}
            </div> */}
            <span
                onClick={onPicClick}
                id='contact-me'
            >
                {scrollStep > 2 ? <HiMiniArrowPathRoundedSquare style={{ transform: 'rotateY(180deg)' }} /> : ''}
            </span>
        </div>
    );
}

export default Home