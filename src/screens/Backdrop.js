import React from 'react'
import "./backdrop.css"

function BackDrop() {
    return (
        <div className='backdrop'>
            <div className='gradient-overlay' />
            <img className='backdrop_cover_img1' src='https://4kwallpapers.com/images/wallpapers/among-us-minimal-colorful-space-5k-8k-amoled-3840x2160-4081.png' alt='cover_img1' />
        </div>
    )
}

export default BackDrop
