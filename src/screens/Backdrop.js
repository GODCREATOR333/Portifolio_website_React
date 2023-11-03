import React from 'react'
import "./backdrop.css"

function BackDrop() {
    return (
        <div className='backdrop'>
            <div className='gradient-overlay1' />
            <div className='backdrop_cover_img1' />
            <div className='backdrop_cover_img2' />
            <div className='gradient-overlay2' />
        </div>
    )
}

export default BackDrop
