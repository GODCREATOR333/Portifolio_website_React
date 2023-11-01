import React from "react";
import './navbarstyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function NavBar() {
    const iconSize = {
        width: '21px', // Set the width to 50px
        height: '21px', // Set the height to 50px
    };

    return (
        <div className="navbg">
            <div className="navbar-content">
                <h4 className="nav_text_props">About</h4>
                <h4 className="nav_text_props">Projects</h4>
                <h4 className="nav_text_props">Resume</h4>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/hari-preetham-934789201/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white', ...iconSize }} />
                    </a>
                    <a href="https://github.com/GODCREATOR333" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{ color: 'white', ...iconSize }} />
                    </a>
                </div>
            </div>
            <hr width="50%"
                size="2"
            />
        </div>
    );

}
export default NavBar;
