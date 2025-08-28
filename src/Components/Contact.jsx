import React from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import './Contact.css';
import ContactForm from './ContactForm';

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
  ]

  return (
    <div className='contact gradient-border' id='container'>
      <h1 className='gradient-text'>Contact Me</h1>
      <ContactForm />

      <div id='myProfiles' style={{ flexDirection: 'row', marginTop: '20px' }}>
      <p style={{width: '100%', color: '#3a506b'}}>Socialize with me</p>
        {contact_list.map((obj) => (
          <span><a href={obj.link} target='_blank' title={obj.name}>{obj.icon}</a></span>
        ))}
      </div>

      <p
        onClick={onUnflip}
        style={{
          cursor: 'pointer', color: '#3a506b'
        }}
      >
        {`<< Back`}
      </p>

    </div>
  );
};

export default Contact;