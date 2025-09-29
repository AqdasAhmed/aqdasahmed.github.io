import React, { useState, useEffect } from "react";
import "./Navbar.css";
import useScrollStep from "../hooks/useScrollStep";

const Navbar = () => {
    const scrollStep = useScrollStep(10, 5);
    const [activeLink, setActiveLink] = useState("top");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const sections = ["top", "mySelf", "skill", "project", "certificate"];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            if (window.scrollY < 100) {
                setActiveLink("top");
                return;
            }

            let currentSection = "top";
            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    if (section.offsetTop <= scrollPosition) {
                        currentSection = sectionId;
                    }
                }
            }
            setActiveLink(currentSection);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // toggle handler
    const toggleNavbar = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <div id="top"></div>
            
            {/* Hamburger Button */}
            <div className={`nav-btn ${isOpen ? "open" : ""}`} onClick={toggleNavbar}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navbar */}
            <nav className={`navbar ${scrollStep > 2 ? "visible" : ""} ${isOpen ? "open" : ""}`}>
                <ul className="navbar-links">
                    <li>
                        <a 
                          href="#top" 
                          className={activeLink === "top" ? "active" : ""}
                          onClick={() => setIsOpen(false)}
                        >
                          Home
                        </a>
                    </li>
                    <li>
                        <a 
                          href="#mySelf" 
                          className={activeLink === "mySelf" ? "active" : ""}
                          onClick={() => setIsOpen(false)}
                        >
                          About
                        </a>
                    </li>
                    <li>
                        <a 
                          href="#skill" 
                          className={activeLink === "skill" ? "active" : ""}
                          onClick={() => setIsOpen(false)}
                        >
                          Skills
                        </a>
                    </li>
                    <li>
                        <a 
                          href="#project" 
                          className={activeLink === "project" ? "active" : ""}
                          onClick={() => setIsOpen(false)}
                        >
                          Projects
                        </a>
                    </li>
                    <li>
                        <a 
                          href="#certificate" 
                          className={activeLink === "certificate" ? "active" : ""}
                          onClick={() => setIsOpen(false)}
                        >
                          Certificates
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
