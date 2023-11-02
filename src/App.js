import React from 'react'
import './App.css';
import NavBar from './Navbar';
import Hero from './screens/Hero';
import BackDrop from './screens/Backdrop';

function App() {
  return (
    <div>
      <BackDrop />
      <NavBar />
      <Hero />
    </div>
  )
}


export default App;
