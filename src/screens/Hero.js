import React from 'react'
import image from 'D:\\ALL__BUILDS\\cs-builds\\react-builds\\portifolio-website\\src\\images\\image.png';
import code from 'D:\\ALL__BUILDS\\cs-builds\\react-builds\\portifolio-website\\src\\images\\code.png';
import "./herostyles.css"

function Hero() {
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
                <h4>I like to build interesting stuff</h4>
                <button className='contact_button'>Get in Touch </button>
            </div>
            <div className='hero_images'>
                <img className='react_img' src='https://iconape.com/wp-content/png_logo_vector/react-native-firebase.png' alt='react_img' />
                <img className='python_img' src='https://www.svgrepo.com//show/376344/python.svg' alt='python_img' />
                <img className='node_img' src='https://www.svgrepo.com/show/376337/node-js.svg' alt='node_img' />
                <img className='mongo_img' src='https://www.svgrepo.com/show/331488/mongodb.svg' alt='mongo_img' />
            </div>
        </div>

    )
}

export default Hero