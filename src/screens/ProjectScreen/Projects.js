import React from 'react'
import "./projectstyles.css"
import Tabs from './Tabs'
import ContactForm from '../Contact';

function Projects() {

    return (
        <div id='projects' className='projects'>
            <h1>Some things I've Built</h1>
            <div className="projects-container">
                <Tabs />
                <ContactForm />
            </div>


        </div>
    )
}

export default Projects