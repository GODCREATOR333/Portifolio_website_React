import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import image from 'D:\\ALL__BUILDS\\cs-builds\\react-builds\\portifolio-website\\src\\images\\image.png';
import "./herostyles.css"

function Hero() {

    const [text] = useTypewriter({
        words: [' am a Designer', ' am a Developer', ' am an Engineer', ' like to build cool stuff'],
        loop: {},


    });

    return (
        <div className='hero_bg'>
            <div className='heros_hero'>
                <img
                    className='hi_img'
                    src={image}
                    alt='Hi_img'
                /></div>
            <div className='hero_content' >
                <h2>I'm Hari Preetham</h2>
                <h4>I
                    <span style={{ fontWeight: '200' }}>
                        {text}
                    </span>
                    <span style={{ color: 'red' }}>
                        <Cursor cursorStyle='/' />
                    </span>

                </h4>
                <button className='contact_button'>Get in Touch </button>
            </div>
            <div className='hero_images'>
            </div>
        </div >

    )
}

export default Hero