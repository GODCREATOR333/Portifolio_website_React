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
                        <h3><span className='cards_heading_gradient'> All </span> Projects </h3>
                        <div className='card_layout'>
                            <ProjectCards
                                img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                title="hello_helo__1"
                                description="it is just a sample beetch"
                            />
                            <ProjectCards
                                img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                title="hello_helo__2"
                                description="it is just a sample beetch"
                            />
                            <ProjectCards
                                img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                title="hello_helo__3"
                                description="it is just a sample beetch"
                            />
                            <ProjectCards
                                img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                title="hello_helo__1"
                                description="it is just a sample beetch"
                            />
                            <ProjectCards
                                img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                title="hello_helo__2"
                                description="it is just a sample beetch"
                            />
                            <ProjectCards
                                img='https://t3.ftcdn.net/jpg/00/89/29/08/360_F_89290814_TSIevLOXjAUtXGpO0EOhTp1cH9gQWlhq.jpg'
                                title="hello_helo__3"
                                description="it is just a sample beetch"
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
                                    img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                    title="hello_helo__1"
                                    description="it is just a sample beetch"
                                />
                                <ProjectCards
                                    img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                    title="hello_helo__2"
                                    description="it is just a sample beetch"
                                />
                                <ProjectCards
                                    img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                    title="hello_helo__3"
                                    description="it is just a sample beetch"
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
                                    img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                    title="hello_helo__1"
                                    description="it is just a sample beetch"
                                />
                                <ProjectCards
                                    img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                    title="hello_helo__2"
                                    description="it is just a sample beetch"
                                />
                                <ProjectCards
                                    img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                    title="hello_helo__3"
                                    description="it is just a sample beetch"
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
                                    img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                    title="hello_helo__1"
                                    description="it is just a sample beetch"
                                />
                                <ProjectCards
                                    img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                    title="hello_helo__2"
                                    description="it is just a sample beetch"
                                />
                                <ProjectCards
                                    img='https://i.pinimg.com/originals/e9/97/18/e997184ad41aface25fa03dcdf011920.gif'
                                    title="hello_helo__3"
                                    description="it is just a sample beetch"
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