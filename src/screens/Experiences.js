import React from 'react'
import "./experiencestyles.css"

function Experiences() {
    return (
        <div id='experiences' className='experiences'>
            <h1>Experiences</h1>
            <div className='containers'>
                <div className='container_glass'>
                    <h4>Writing Python Code to calculate complex AeroThermodynamic effects on MIRV's</h4>
                    <p>Developed Python-based solutions to address critical aerodynamic heating challenges in MIRVs
                        (Multiple independently targetable reentry vehicles) at DRDL. Transformed trajectory calculations and
                        aerodynamic heating assessment by creating optimized code using NumPy, SciPy, and advanced
                        numerical methods. Improved accuracy and efficiency significantly compared to previous MATLAB
                        code. Enhanced the code's versatility to simulate various conditions, providing crucial insights into skin
                        temperature and transient heat behavior, which were previously unattainable</p>

                </div>
                <div className='container_glass'>
                    <h4>Additive Manufacturing using 3D printing techniques</h4>
                    <p>I gained proficiency in CAD modeling, including techniques like Stereolithography. I developed skills in
                        reverse engineering and conducted simulations to optimize models. Additionally, I explored topology
                        optimization and deepened my understanding of diverse 3D printing technologies and their practical
                        applications.</p>


                </div>
            </div>
        </div>
    )
}

export default Experiences