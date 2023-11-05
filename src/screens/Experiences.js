import React from 'react'
import "./experiencestyles.css"

function Experiences() {
    return (
        <div id='experiences' className='experiences'>
            <h1>Experiences</h1>
            <div className=' containers'>
                <div className='container_glass'>
                    <div className='header-container'>
                        <h4>Writing Python Code to calculate complex AeroThermodynamic effects on MIRV's</h4>
                        <img className='drdo_img' src='/drdo.png' alt='drdo_img' />
                    </div>
                    <ul>
                        <li>Developed Python solutions using NumPy, SciPy to analyze 13,000+ data points from 25+ parameters for MIRV aerodynamics.</li>
                        <li>Improved accuracy, efficiency, enabling diverse simulations, revealing skin temperature and heat behavior insights.</li>
                        <li>Expanded capabilities for varied scenarios, deepening understanding of MIRV performance under different conditions.</li>
                        <li>Facilitated vital data extraction, offering valuable insights into MIRV aerodynamic effects.</li>
                    </ul>

                    <div className='buttons'>
                        <a href=''>
                            <button className='results_button'>View Results
                                <img src="/results.png" width="25px"></img></button>
                        </a>
                        <a href=''>
                            <button className='code_button'>View Code
                                <img src="/github.svg" width="25px"></img></button>
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
                        <a href=''>
                            <button className='results_button'>View Results
                                <img src="/results.png" width="25px"></img></button>
                        </a>
                        <a href=''>
                            <button className='code_button'>View Code
                                <img src="/github.svg" width="25px"></img></button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experiences