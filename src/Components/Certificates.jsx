import {
  FaHtml5, FaCss3Alt, FaReact, FaFreeCodeCamp, FaBootstrap, FaSass
} from "react-icons/fa";
import { SiJquery, SiRedux } from "react-icons/si";
import { GoLinkExternal } from "react-icons/go";
import "./Certificates.css";

const Certificates = () => {
  const IbmIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" fill="transparent" />
      <text x="32" y="44" textAnchor="middle" fontSize="32" fill="#006400" style={{ fontFamily: "IBM Plex Sans" }}>IBM</text>
    </svg>
  );

  const certificates = [
    {
      key: "rwd",
      name: "Responsive Web Design",
      imgSrc: <FaFreeCodeCamp size={64} color="#006400" />, // big icon instead of image
      issue_date: "18th Aprl 2025",
      expire_date: "Does not expire",
      issuing_org: "freeCodeCamp",
      org_link: 'https://www.freecodecamp.org/',
      credential_link:
        "https://freecodecamp.org/certification/fcc3eb7428b-179c-448e-837b-f7cb3408d59b/responsive-web-design",
      course_link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
      skillsGained: [
        { skill: "HTML", icon: <FaHtml5 /> },
        { skill: "CSS", icon: <FaCss3Alt /> },
      ],
    },
    {
      key: "fedl",
      name: "Front End Development Libraries",
      imgSrc: <FaFreeCodeCamp size={64} color="#006400" />, // big icon instead of image
      issue_date: "6th August 2025",
      expire_date: "Does not expire",
      issuing_org: "freeCodeCamp",
      org_link: 'https://www.freecodecamp.org/',
      credential_link:
        "https://freecodecamp.org/certification/fcc3eb7428b-179c-448e-837b-f7cb3408d59b/front-end-development-libraries",
      course_link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
      skillsGained: [
        { skill: "Bootstrap", icon: <FaBootstrap /> },
        { skill: "jQuery", icon: <SiJquery /> },
        { skill: "React", icon: <FaReact /> },
        { skill: "Redux", icon: <SiRedux /> },
        { skill: "SASS", icon: <FaSass /> },
      ],
    },
    {
      key: "aifndmntl",
      name: "Artificial Intelligence Fundamentals",
      imgSrc: <IbmIcon size={64} color="#006400" />,
      issue_date: "14th September 2025",
      expire_date: "Does not expire",
      issuing_org: "IBM SkillsBuild",
      org_link: 'https://skillsbuild.org/',
      credential_link:
        "https://www.credly.com/badges/ed70c58f-52b9-4a91-ade4-e3524539e7f2/public_url",
      course_link: "https://skills.yourlearning.ibm.com/activity/PLAN-7913EE1DB030",
      skillsGained: [
        { skill: "AI Applications", },
        { skill: "AI Capabilities", },
        { skill: "AI Ethics", },
        { skill: "Artificial Intelligence", },
        { skill: "Artificial Neural Networks", },
        { skill: "Chatbots", },
        { skill: "Computer Vision", },
        { skill: "Deep Learning", },
        { skill: "Machine Learning", },
        { skill: "Natural Language Processing", },
        { skill: "PWID-B0133500", },
        { skill: "Watson Studio", },
      ],
    },
  ];

  return (
    <div className="certificates" id="certificate">
      <h2 className="section-title">Certificates</h2>

      <div className="certificate-list">
        {certificates.map((obj) => (
          <div
            className="certificate"
            key={obj.key}
          >
            <div className="certificate-header">
              <div className="certificate-icon">{obj.imgSrc}</div>
              <div>
                <h3><a href={obj.course_link} target="_blank" rel="noopener noreferrer">{obj.name}</a></h3>
                <a href={obj.org_link} className="org" target="_blank" rel="noopener noreferrer">{obj.issuing_org}</a>
              </div>
            </div>

            <div className="certificate-body">
              <p><b>Issued:</b> {obj.issue_date}</p>
              <p><b>Expiry:</b> {obj.expire_date}</p>
              <a
                href={obj.credential_link}
                className="credential-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoLinkExternal /> View Credential
              </a>
            </div>

            <div className="skill-badges">
              {obj.skillsGained.map((item, i) => (
                <span key={i} className="skill-badge">
                  {item.icon} {item.skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
