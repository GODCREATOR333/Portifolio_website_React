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

    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbg">
            <div className={`hamburger-menu ${isOpen ? "open" : ""}`} onClick={handleClick}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className="logo_container">
            <img className="logo" src="https://altcoinsbox.com/wp-content/uploads/2022/10/ethereum-logo-.webp" alt="logo_img" />
            </div>

            <div className="navbar-content">
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
