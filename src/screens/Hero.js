import React, { useState, useEffect } from 'react'
import { useTypewriter } from 'react-simple-typewriter';
import image from 'D:\\ALL__BUILDS\\cs-builds\\react-builds\\portifolio-website\\src\\images\\image.png';
import "./herostyles.css"

function Hero() {
    const [showNotification, setShowNotification] = useState(true);
    const [text] = useTypewriter({
        words: [' am a Designer', ' am a Developer', ' am an Engineer', ' like to build cool stuff'],
        loop: {},


    });

    const closeNotification = () => {
        setShowNotification(false);
    };

    useEffect(() => {
        const closeButton = document.querySelector('.close');
        closeButton.addEventListener('click', closeNotification);

        return () => {
            closeButton.removeEventListener('click', closeNotification);
        };
    }, []); // Adding an empty dependency array to run this effect only once



    return (
        <div className='hero_bg'>
            {showNotification && (
                <div className="notification">
                    <span className="close">&times;</span>
                    I am currently looking for an <span style={{ fontWeight: 'bolder' }}>Internship</span> opportunity.
                </div>
            )}
            <div className='heros_hero'>
                <img
                    className='hi_img'
                    src={image}
                    alt='Hi_img'
                /></div>
            <div className='hero_content' >
                <h2>I'm Hari Preetham</h2>
                <h4>I
                    <span style={{ fontWeight: '400' }}>
                        {text}
                    </span>
                </h4>
                <div className='buttons'>
                    <button className='contact_button'>Get in Touch </button>
                    <button className='resume'>Resume <span style={{ fontSize: '18px' }}> ⬇ </span></button>
                </div>
            </div>
        </div >

    )
}

export default Hero