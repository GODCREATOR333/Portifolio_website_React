import React from "react";
import './navbarstyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll'

function NavBar() {
    const iconSize = {
        width: '21px', // Set the width to 50px
        height: '21px', // Set the height to 50px
    };

    return (
        <div className="navbg">
            <div className="navbar-content">
                <img className="logo" src="https://pbs.twimg.com/media/FBctw4vXoAQv6CP.jpg:large" alt="logo_img" />
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
            </div>
            <div className="line" >
                <hr />
            </div>
        </div>
    );

}
export default NavBar;
