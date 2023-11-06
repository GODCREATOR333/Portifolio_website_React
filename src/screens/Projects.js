import React from 'react'
import "./projectstyles.css"

function Projects() {
    return (
        <div id='projects' className='projects'>
            <h1>Some things I've Built</h1>
            <div className='containers'>
                <div className='container_glass'>
                    <div className='header-container'>
                        <h4>TrackMaster 3.0</h4>
                        <img className='drdo_img' src='/drdo.png' alt='drdo_img' />
                    </div>

                    <div className='buttons'>
                        <a href='#results'>
                            <button className='results_button'>View Results
                                <img src="/results.png" alt='results_png' width="25px"></img></button>
                        </a>
                        <a href='https://github.com/GODCREATOR333/Netflix-React-Clone' target="_blank" rel="noopener noreferrer">
                            <button className='code_button'>View Code
                                <img src="/github.svg" alt='github_imag' width="25px"></img></button>
                        </a>
                    </div>


                </div>
                <div className='container_glass'>
                    <div className='header-container'>
                        <h4>Netflix Clone using react and redux </h4>
                        <img className=' iitbhu_img' src='/iitbhu.png' alt='iitbhu_img' />
                    </div>

                    <div className='buttons'>
                        <a href='#resume'>
                            <button className='results_button'>View Results
                                <img src="/results.png" alt='results_img' width="25px"></img></button>
                        </a>
                        <a href='#code'>
                            <button className='code_button'>View Code
                                <img src="/github.svg" alt=' github_img' width="25px"></img></button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects