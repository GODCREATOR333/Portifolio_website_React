import React, { useState } from 'react';
import "./experiencestyles.css"


function Experiences() {

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);

    const toggleModal1 = () => {
        setModal1(!modal1);
    };

    const toggleModal2 = () => {
        setModal2(!modal2);
    };

    const closeAllModals = () => {
        setModal1(false);
        setModal2(false);
    };

    if (modal1 || modal2) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <div id='experiences' className='experiences'>
            <h1>Experiences</h1>
            {modal1 && (
                <div className='modal'>
                    <div className='overlay'>
                        <div className='modal_content'>
                            <img style={{ height: '350px', width: '700px' }} src='https://wallpapers.com/images/hd/minimal-art-3840-x-2160-wallpaper-lv6t5xn2pu81hcyg.jpg' alt='modal_img' />
                            <h2>Simulation_Kinetic_Heating </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                            <button onClick={closeAllModals} className='close_modal'>X</button>
                        </div>
                    </div>
                </div>
            )}
            {modal2 && (
                <div className='modal'>
                    <div className='overlay'>
                        <div className='modal_content'>
                            <img style={{ height: '350px', width: '700px' }} src='https://images.pling.com/img/00/00/64/96/96/1730165/nature-minimalist-style-241.jpg' alt='modal_img' />
                            <h2>Simulation_Kinetic_Heating </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                            <button onClick={closeAllModals} className='close_modal'>X</button>
                        </div>
                    </div>
                </div>
            )}
            <div className='containers'>
                <div className='container_glass'>
                    <div className='header-container'>
                        <h4 style={{ lineHeight: "1.5" }}> Writing Python Code to Compute complex <br />
                            AeroThermodynamic effects on MIRV's</h4>
                        <img className='drdo_img' src='/drdo.png' alt='drdo_img' />
                    </div>
                    <ul>
                        <li>Developed Python solutions using NumPy, SciPy to analyze 13,000+ data points from 25+ parameters for MIRV aerodynamics.</li>
                        <li>Improved accuracy, efficiency, enabling diverse simulations, revealing skin temperature and heat behavior insights.</li>
                        <li>Expanded capabilities for varied scenarios, deepening understanding of MIRV performance under different conditions.</li>
                        <li>Facilitated vital data extraction, offering valuable insights into MIRV aerodynamic effects.</li>
                    </ul>

                    <div className='buttons'>
                        <a href='#resume'>
                            <button onClick={toggleModal1} className='results_button'>View Results
                                <img src="/results.png" alt='results_png' width="25px"></img></button>
                        </a>
                        <a href='https://github.com/GODCREATOR333/Simulation_Kinetic_Heating' target="_blank" rel="noopener noreferrer">
                            <button className='code_button'>View Code
                                <img src="/github.svg" alt='github_imag' width="25px"></img></button>
                        </a>
                    </div>
                </div>


                <div className='container_glass'>
                    <div className='header-container'>
                        <h4>Additive Manufacturing using 3D printing techniques</h4>
                        <img className=' iitbhu_img' src='/iitbhu.png' alt='iitbhu_img' />
                    </div>
                    <ul>
                        <li>Proficiency in CAD modeling, specifically utilizing Stereolithography techniques for precise model creation.</li>
                        <li>Applied reverse engineering skills to optimize models through simulation techniques.</li>
                        <li>Applied reverse engineering skills to optimize models through simulation techniques.</li>
                        <li>Delved into diverse 3D printing technologies, leveraging practical applications for real-world use based on learned insights.</li>
                    </ul>
                    <div className='buttons'>
                        <a href='#resume'>
                            <button onClick={toggleModal2} className='results_button'>View Results
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

export default Experiences

