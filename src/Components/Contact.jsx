import { FaCodepen, FaFreeCodeCamp, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import {HiMiniArrowPathRoundedSquare} from 'react-icons/hi2'
import './Contact.css';
import ContactForm from './ContactForm';
import React from 'react';

const Contact = ({ onUnflip }) => {
  const contact_list = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/_khan_aqdas_/',
      icon: <FaInstagram />,
    },
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
    }
  ]

  return (
    <div className='contact gradient-border' id='container'>
      <h1 className='gradient-text'>Contact Me</h1>
      <ContactForm />

      <div id='myProfiles' style={{ flexDirection: 'row', marginTop: '20px' }}>
        <p style={{ width: '100%', color: '#3a506b' }}>Socialize with me</p>
        {contact_list.map((obj) => (
          <span><a href={obj.link} target='_blank' title={obj.name}>{obj.icon}</a></span>
        ))}
      </div>

      <p
        onClick={onUnflip}
        id='contact-me'
        >
        <HiMiniArrowPathRoundedSquare style={{ transform: 'rotateY(180deg)' }} />
      </p>

    </div>
  );
};

export default Contact;