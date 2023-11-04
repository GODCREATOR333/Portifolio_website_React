import React from 'react'
import './App.css';
import BackDrop from './screens/Backdrop';
import NavBar from './Navbar';
import Hero from './screens/Hero';
import About from './screens/About.js'
import Projects from './screens/Projects'
import Experiences from './screens/Experiences'


function App() {
  return (
    <div >
      <BackDrop />
      <NavBar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
    </div>
  )
}


export default App;
