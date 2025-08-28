import React, { useEffect, useState } from 'react'
import { FaGithub, FaFreeCodeCamp, FaCodepen } from "react-icons/fa";
import myPic from '../images/myPic2.png'
import useScrollStep from '../hooks/useScrollStep';
import './Home.css'

const Home = ({ onPicClick }) => {
    const name_list = [
        'Full-Stack Developer',
        'Full-Stack Engineer',
        'MERN Stack Developer',
    ]

    const contact_list = [
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
        }
    ]

    const scrollStep = useScrollStep(10, 5);

    return (
        <div
            className={`home ${scrollStep > 2 ? 'scrolled' : ''}`}
            id="container"
            style={scrollStep > 2 ? { transform: `translateX(-1vw) translateY(0vh) scale(0.9)` } : {}}
        >
            <img
                src={myPic}
                alt="myPic"
                id='myPic'
            />
            {/* <h1>Hi! I am {name_list[nameScrollStep]}</h1> */}
            <p id='myName'>Hi! I am AQDAS AHMED KHAN</p>
            <div id='myTitles' style={{ flexDirection: 'row' }}>
                {name_list.map((obj) => (
                    <div id='myTitle'>{obj}</div>
                ))}
            </div>
            <div id='myProfiles' style={{ flexDirection: 'row', marginTop: '20px' }}>
                {contact_list.map((obj) => (
                    <span><a href={obj.link} target='_blank' title={obj.name}>{obj.icon}</a></span>
                ))}
            </div>
            <p
                onClick={scrollStep > 2 ? onPicClick : undefined}
                style={{ cursor: scrollStep > 2 ? 'pointer' : 'default', display: scrollStep > 2 ? 'flex' : 'none' }}
            >
                {`More >>`}
            </p>
        </div>
    );
}

export default Home