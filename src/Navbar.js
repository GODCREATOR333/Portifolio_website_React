import React, { useState } from "react";
import './navbarstyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function NavBar() {
    const iconSize = {
        width: '30px', 
        height: '30px', 
    };

    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-black`} style={{ position: 'fixed', width: '100vw', top: 0, zIndex: 999 }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="https://haripreetham-portifolio.web.app/"></a>
                <button className="navbar-toggler" type="button" onClick={handleClick}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav"  >
                    <ul className="navbar-nav ms-md-auto gap-5">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav_text_props"
                        >
                            About
                        </Link>
                        <Link
                            activeClass="active"
                            to="experiences"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav_text_props"
                        >
                            Experiences
                        </Link>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav_text_props"
                        >
                            Projects
                        </Link>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/hari-preetham-934789201/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white', ...iconSize }} />
                            </a>
                            <a href="https://github.com/GODCREATOR333" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} style={{ color: 'white', ...iconSize }} />
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );}

    export default NavBar;