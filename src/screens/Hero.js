import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';
import image from '../images/image.png';
import "./herostyles.css"
import { Link } from 'react-scroll';

function Hero() {
    const [text] = useTypewriter({
        words: [' am a Designer', ' am a Developer', ' am an Engineer', ' like to build stuff'],
        loop: {},
    });

    return (
        <div className='hero_bg '>
            <div className='heros_hero'>
                <img
                    className='hi_img'
                    src={image}
                    alt='Hi_img'
                /></div>
            <div className='hero_content' >
                <h2 className='h2'> I'm  <span className='h2_child'> Hari Preetham </span></h2>
                <h4>I
                    <span style={{ fontWeight: '400' }}>
                        {text}
                    </span>
                </h4>

                               <div className='buttons_hero'>
                             <Link
                        activeClass="active"
                        to="contact"

                    >
                        <button className='contact_button'>Get in Touch </button>

                    </Link>
                    <      a href="/my_resume.pdf"  target="_blank" rel="noopener noreferrer">
                        <button className='resume'>Resume <span style={{ fontSize: '18px' }}> ↗ </span></button>
                                   </a>
                                 <a href="#blog" target="_blank" rel="noopener noreferrer">
                       
                                     <button className='blog_button'>Blog 📝<span style={{ fontSize: '18px' }}> ↗ </span></button>
                    </a> 
                </div>
            </div>
        </div >

    )
}

export default Hero