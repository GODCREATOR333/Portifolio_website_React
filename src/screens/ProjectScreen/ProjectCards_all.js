import React from 'react'
import "./projectstyles.css"

function ProjectCards(props) {
    return (
        <div className='card'>
            <div className='card_body'>
                <img className='card_img' src={props.img} alt='' />
                <h2 className='card_title'> {props.title}</h2>
                <p className='card_description'> {props.description}</p>
                <a href='#code'>
                    <button className='card_view_code_btn'>View Code
                        <img src="/github.svg" alt=' github_img' width="25px"></img></button>
                </a>
            </div>

        </div>
    )
}

export default ProjectCards