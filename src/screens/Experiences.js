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
                            <img className='modal_img' src='https://wallpapers.com/images/hd/minimal-art-3840-x-2160-wallpaper-lv6t5xn2pu81hcyg.jpg' alt='modal_img' />
                            <h2>Simulation_Kinetic_Heating </h2>
                            <p>Developed Python-based solutions to address critical aerodynamic heating challenges in MIRVs
                                (Multiple independently targetable reentry vehicles) at DRDL. Transformed trajectory calculations and
                                aerodynamic heating assessment by creating optimized code using NumPy, SciPy, and advanced
                                numerical methods. Improved accuracy and efficiency significantly compared to previous MATLAB
                                code. Enhanced the code's versatility to simulate various conditions, providing crucial insights into skin
                                temperature and transient heat behavior, which were previously unattainable
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
                            <img className='modal_img' src='https://images.pling.com/img/00/00/64/96/96/1730165/nature-minimalist-style-241.jpg' alt='modal_img' />
                            <h2>Additive Manufacturing using 3D printing techniques</h2>
                            <p>• I gained proficiency in CAD modeling, including techniques like Stereolithography. I developed skills in
                                reverse engineering and conducted simulations to optimize models. Additionally, I explored topology
                                optimization and deepened my understanding of diverse 3D printing technologies and their practical
                                applications.
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

