import React, { useState } from 'react';
import "./projectstyles.css";
import ProjectCards from './ProjectCards_all';


function Tabs() {
    const [activeTab, setActiveTab] = useState('All');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='tabs'>
            <div className='bloc_tabs'>
                <div
                    className={`tabs-button ${activeTab === 'All' ? 'active-tab' : ''}`}
                    onClick={() => handleTabClick('All')}
                >
                    All
                </div>
                <div
                    className={`tabs-button ${activeTab === 'Python' ? 'active-tab' : ''}`}
                    onClick={() => handleTabClick('Python')}
                >
                    Python
                </div>
                <div
                    className={`tabs-button ${activeTab === 'AIML' ? 'active-tab' : ''}`}
                    onClick={() => handleTabClick('AIML')}
                >
                    AI/ML
                </div>
                <div
                    className={`tabs-button ${activeTab === 'React' ? 'active-tab' : ''}`}
                    onClick={() => handleTabClick('React')}
                >
                    Reactjs
                </div>
            </div>

            <div className='content_cards'>
                {activeTab === 'All' && (
                    <div className='content'>
                        <h2><span className='cards_heading_gradient'> All </span> Projects </h2>
                        <div className='card_layout'>
                            <ProjectCards
                                img='https://user-images.githubusercontent.com/66235065/266802174-86fe18d2-9e94-4f67-bed6-98b30cb82e7a.PNG'
                                title="TrackMaster 3.0"
                                description="A full-stack project that uses computer vision, machine learning models from TensorFlow and AI
                                algorithms to authenticate a user's workout activity and recommend workout and diet plans."
                            />
                            <ProjectCards
                                img='https://i.imgur.com/uNL5qyt.png'
                                title="Netflix Clone"
                                description="A  Netflix clone with the help of TMDB api, with the features to create an
                                account using firebase as backaend as a service. It also updates in real time"
                            />
                            <ProjectCards
                                img='https://i.imgur.com/6pWzJ8y.jpg'
                                title="Pose detection "
                                description="Using ML models from TensorFlow like Movenet.lightning, movenet.thunder and PoseNet to track 17 key points 
                                on the body and predict pose in real-time"
                            />
                            <ProjectCards
                                img='https://i.imgur.com/9Fo2XvM.png'
                                title="Aerodynamic Heating Simulation"
                                description="Developed python code simulate the effects of complex aerothermodynamic on MIRV's during re-entry 
                                just with the help of trajectory data"
                            />
                            <ProjectCards
                                img='https://i.imgur.com/WLJGCry.png'
                                title="Portifolio website"
                                description="Using React, I have created this portifolio website to showcase my work. This website is like a 
                                digital catalogue of my journey and experiences in my career"
                            />
                            <ProjectCards
                                img='https://wallpapercave.com/wp/wp11705135.jpg'
                                title="API Fusion Analytics"
                                description="This project to solidify my understanding of API's and visualize the 
                                interaction of API's and produced insights from the data fetched from API's"
                            />
                        </div>

                    </div>
                )}
                {activeTab === 'Python' && (
                    <div className='content'>
                        <h3><span className='cards_heading_gradient'> Python </span>Projects </h3>
                        <div className='content'>
                            <div className='card_layout'>
                                <ProjectCards
                                    img='https://i.imgur.com/6pWzJ8y.jpg'
                                    title="Pose detection "
                                    description="Using ML models from TensorFlow like Movenet.lightning, movenet.thunder and PoseNet to track 17 key points 
                                on the body and predict pose in real-time"
                                />
                                <ProjectCards
                                    img='https://i.imgur.com/9Fo2XvM.png'
                                    title="Aerodynamic Heating Simulation"
                                    description="Developed python code simulate the effects of complex aerothermodynamic on MIRV's during re-entry 
                                just with the help of trajectory data"
                                />
                                <ProjectCards
                                    img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                    title="Mario like game "
                                    description="Using Pygame,I built a mario like game but with limited functionality"
                                />

                            </div>

                        </div>
                    </div>
                )}
                {activeTab === 'AIML' && (
                    <div className='content'>
                        <h3><span className='cards_heading_gradient'> AI/ML </span> Projects </h3>
                        <div className='content'>
                            <div className='card_layout'>
                                <ProjectCards
                                    img='https://i.imgur.com/6pWzJ8y.jpg'
                                    title="Pose detection "
                                    description="Using ML models from TensorFlow like Movenet.lightning, movenet.thunder and PoseNet to track 17 key points 
                                on the body and predict pose in real-time"
                                />
                                <ProjectCards
                                    img='https://wallpapercave.com/wp/wp11705135.jpg'
                                    title="Deep learning model that plays Flappy bird "
                                    description="Building a Flappy Bird game using Pygame and then using NEAT algorithm
                                    to play the game using AI"
                                />
                                <ProjectCards
                                    img='https://wallpapercave.com/wp/wp11705135.jpg'
                                    title="Analysing Financial Data"
                                    description="Using Some of the most common supervised learning algorithms are linear and logistic regression, decision trees, support vector machines, and neural network to analyse a
                                    financial data set"
                                />

                            </div>

                        </div>
                    </div>
                )}
                {activeTab === 'React' && (
                    <div className='content'>
                        <h3><span className='cards_heading_gradient'> Reactjs </span>Projects </h3>
                        <div className='content'>
                            <div className='card_layout'>
                                <ProjectCards
                                    img='https://user-images.githubusercontent.com/66235065/266802174-86fe18d2-9e94-4f67-bed6-98b30cb82e7a.PNG'
                                    title="TrackMaster 3.0"
                                    description="A full-stack project that uses computer vision, machine learning models from TensorFlow and AI
                                algorithms to authenticate a user's workout activity and recommend workout and diet plans."
                                />
                                <ProjectCards
                                    img='https://i.imgur.com/uNL5qyt.png'
                                    title="Netflix Clone"
                                    description="A  Netflix clone with the help of TMDB api, with the features to create an
                                account using firebase as backaend as a service. It also updates in real time"
                                />
                                <ProjectCards
                                    img='https://i.imgur.com/WLJGCry.png'
                                    title="Portifolio website"
                                    description="Using React, I have created this portifolio website to showcase my work. This website is like a 
                                digital catalogue of my journey and experiences in my career"
                                />

                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;