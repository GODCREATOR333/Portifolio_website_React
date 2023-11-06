import React from 'react'
import "./contactstyles.css"

function Contact() {

    const currentYear = new Date().getFullYear();

    return (
        <div id='contact' className='contact'>
            <h1>Get in Touch !</h1>
            <div className='footer'>
                <h4>© {currentYear} Hari Preetham AKA GodCreator333</h4>
            </div>
        </div>
    )
}

export default Contact