import React, { useState } from 'react'
import "./projectstyles.css"
import "../experiencestyles.css"

function ProjectCards(props) {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <div className='cards_and_modals'>
            {modal && (
                <div className='modal'>
                    <div className='overlay'>
                        <div className='modal_content'>
                            {props.modal_head_img && (
                                <img className='modal_img' src={props.modal_head_img} alt='modal_img' />
                            )}
                            <h2>{props.modal_title}</h2>
                            {props.modal_img2 && (
                                <img className='modal_img' src={props.modal_img2} alt='modal_img2' />
                            )}
                            <p>{props.modal_description}</p>
                            {props.modal_try_link && (
                                <a href={props.modal_try_link} target="_blank" rel="noopener noreferrer">
                                    <button className='try_btn'>Check it Out!!</button>
                                </a>
                            )}
                            <button onClick={toggleModal} className='close_modal'>X</button>
                        </div>
                    </div>
                </div>
            )
            }
            <div className='card'>
                <div className='card_body'>
                    <img className='card_img' src={props.img} alt='' />
                    <h2 className='card_title'> {props.title}</h2>
                    <p className='card_description'> {props.description}</p>
                    <div className='card_buttons'>
                        <button onClick={toggleModal} className='card_results_button'>Read More
                            <img src="/results.png" alt='results_img' width="25px"></img></button>
                        <a href='#code'>
                            <button className='card_code_button'>View Code
                                <img src="/github.svg" alt=' github_img' width="25px"></img></button>
                        </a>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ProjectCards