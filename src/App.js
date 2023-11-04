import React, { useState, useEffect } from 'react'
import './App.css';
import { Link } from 'react-scroll';
import BackDrop from './screens/Backdrop';
import NavBar from './Navbar';
import Hero from './screens/Hero';
import About from './screens/About.js'
import Projects from './screens/Projects'
import Experiences from './screens/Experiences'


function App() {
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


export default App;
