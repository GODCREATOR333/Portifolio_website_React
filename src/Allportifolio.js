import React, { useState, useEffect } from 'react'
import './App.css';
import { Link } from 'react-scroll';
import { Switch } from 'react-router-dom';
import BackDrop from './screens/Backdrop.js';
import NavBar from './Navbar.js';
import Hero from './screens/Hero.js';
import About from './screens/About.js'
import Projects from './screens/ProjectScreen/Projects.js'
import Experiences from './screens/Experiences.js'


import { getAnalytics, logEvent } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const firebaseConfig = {
    apiKey: "AIzaSyBogWNVOeEfyOQc4AQtGC2_FPiKQ3Xz6QQ",
    authDomain: "haripreetham-portifolio.firebaseapp.com",
    projectId: "haripreetham-portifolio",
    storageBucket: "haripreetham-portifolio.appspot.com",
    messagingSenderId: "167895926596",
    appId: "1:167895926596:web:d76f89ffdcd093db7ef911",
    measurementId: "G-3856DEG089"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function Allportifolio() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY > window.innerHeight * 0.9) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', checkScroll);
        logEvent(analytics, 'page_view');
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <div >
            <BackDrop />
            <NavBar />
            <Hero />
            <About />
            <Experiences />
            <Projects />
            <Link
                to="top"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`back-to-top ${showButton ? 'show' : ''}`}
            >
                ⬆Back to Top
            </Link>


        </div>
    )
}

export default Allportifolio