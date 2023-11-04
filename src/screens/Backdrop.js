import React, { useState, useEffect } from 'react'
import "./backdrop.css"



function BackDrop() {

    const [showNotification, setShowNotification] = useState(true);
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
        <div id='top' className='backdrop'>
            <div>
                {showNotification && (
                    <div className="notification">
                        <span className="close">&times;</span>
                        I am currently looking for an <span style={{ fontWeight: 'bolder' }}>Internship</span> opportunity.
                    </div>
                )}</div>
            <div className='gradient-overlay1' />
            <div className='backdrop_cover_img1' />
            <div className='gradient-overlay2' />
            <div className='backdrop_cover_img2' />
            <div className='gradient-overlay3' />
            <div className='backdrop_cover_img3' />
            <div className='gradient-overlay4' />
            <div className='backdrop_cover_img4' />

        </div>
    )
}

export default BackDrop
