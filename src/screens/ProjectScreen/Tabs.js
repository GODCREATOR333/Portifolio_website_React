import React, { useState } from 'react';
import "./projectstyles.css";
import ProjectCards from './ProjectCards_all';
import "../experiencestyles.css"


function Tabs() {
    const [activeTab, setActiveTab] = useState('All');
    const [numCardsToShow, setNumCardsToShow] = useState(6);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const cards = [
        <ProjectCards
            img='https://user-images.githubusercontent.com/66235065/266802174-86fe18d2-9e94-4f67-bed6-98b30cb82e7a.PNG'
            title="TrackMaster 3.0"
            description="A full-stack project that uses computer vision, machine learning models from TensorFlow  to authenticate a user's workout activity and recommend workout and diet plans.  "
            modal_head_img='https://wallpapers.com/images/hd/aesthetic-art-orange-cityscape-k6y1orlgvqw8pa81.jpg'
            modal_title="TrackMaster 3.0"
            modal_description="This is a full-stack project that uses computer vision, machine learning models from TensorFlow and AI
            algorithms to authenticate a user's workout activity and recommend workout and diet plans. I used
            Technologies like HTML, CSS, Bootstrap, JavaScript, Open-CV, TensorFlow, Node.js, MongoDB, Mongoose,
            passport.js etc. to make this project
            "
        />,
        <ProjectCards
            img='https://i.imgur.com/uNL5qyt.png'
            title="Netflix Clone"
            description="A  Netflix clone with the help of TMDB api, with the features to create an
            account using firebase as backaend as a service. It also updates in real time"
            modal_head_img='https://wallpapers.com/images/hd/aesthetic-art-pink-flowers-mb8mt3p9o54sys20.jpg'
            modal_title="Netflix Clone"
            modal_description="Successfully finished a full-stack development course, mastering React.js, Redux, Firebase, and Google
            Authentication. Designed a user-friendly Netflix-like interface, highlighting advanced proficiency in CSS and
            JavaScript"
        />,
        <ProjectCards
            img='https://i.imgur.com/6pWzJ8y.jpg'
            title="Pose Detection "
            description="Using ML models from TensorFlow like Movenet.lightning, movenet.thunder and PoseNet to track 17 key points 
                                on the body and predict pose in real-time"
            modal_head_img='https://wallpapers.com/images/featured/art-dajgwkpkb3im2q3u.jpg'
            modal_title="Pose Detection"
            modal_description="I crafted a dynamic pose detection system leveraging powerful TensorFlow models such as Movenet Lightning
             and Movenet Thunder. This innovative code accurately calculates 17 key points on the body, unraveling the intricacies of human poses. Through meticulous design and implementation, 
             my solution goes beyond mere prediction, offering a comprehensive understanding of body language. This project showcases my proficiency in cutting-edge technologies
            and my commitment to delivering precise, efficient solutions in the realm of computer vision. Explore the convergence of technology and movement through my portfolio and
             witness the transformative potential of this pose detection masterpiece."
        />,
        <ProjectCards
            img='https://i.imgur.com/9Fo2XvM.png'
            title="Kinetic Heating Simulation"
            description="Developed python code simulate the effects of complex aerothermodynamic on MIRV's during re-entry 
                                just with the help of trajectory data"
            modal_head_img='https://wallpaperaccess.com/full/2565691.jpg'
            modal_title="Kinetic Heating Simulation"
            modal_description="Developed Python-based solutions to address critical aerodynamic heating challenges in MIRVs
            (Multiple independently targetable reentry vehicles) at DRDL. Transformed trajectory calculations and
            aerodynamic heating assessment by creating optimized code using NumPy, SciPy, and advanced
            numerical methods. Improved accuracy and efficiency significantly compared to previous MATLAB
            code. Enhanced the code's versatility to simulate various conditions, providing crucial insights into skin
            temperature and transient heat behavior, which were previously unattainable
            "
        />,
        <ProjectCards
            img='https://i.imgur.com/WLJGCry.png'
            title="Portifolio website"
            description="Using React, I have created this portifolio website to showcase my work. This website is like a 
                                digital catalogue of my journey and experiences in my career"
            modal_head_img='https://i.pinimg.com/736x/53/1f/4f/531f4f1b591a0953acd0f071efa76b61.jpg'
            modal_title="Portifolio website"
            modal_description="I've sculpted a striking portfolio website using ReactJS, featuring distinct sections like 'About Me,' 
            'Projects,' 'Experience,' and 'Contact.' The Contact section seamlessly integrates EmailJS for easy communication. Dynamic animations
             enrich the user experience, breathing life into each segment. Beyond a traditional portfolio, my website doubles as a personal blog, 
             inviting visitors to explore my work and insights. It's more than a digital resume; it's a versatile platform that mirrors my dedication
              to creativity and technical prowess. Join me on this digital journey, where my projects and experiences come to life, embodying the
              intersection of technology and personal expression."
        />,
        <ProjectCards
            img='https://media.istockphoto.com/id/1225397217/vector/work-in-progress-status-bar.jpg?s=612x612&w=0&k=20&c=mRYGj_xv5omkVZNaBgG0GtFAEBg8i6MfNJj3tK9hN-c='
            title="API Fusion Analytics"
            description="This project to solidify my understanding of API's and visualize the 
                                interaction of API's and produced insights from the data fetched from API's"
            modal_head_img='https://i.pinimg.com/736x/6f/c6/f6/6fc6f6c9e730aa7a70c42bf5cab5c9fe.jpg'
            modal_title="API Fusion Analytics"
            modal_description="In my upcoming project, I aim to create two customized APIs, meticulously designed to meet specific requirements with
             precision and efficiency. Additionally, I plan to integrate a variety of public APIs, harnessing their data
              to unveil compelling correlations. The project's centerpiece will be a sophisticated data visualization,
               offering a clear and insightful representation of the collected information. This multifaceted approach
                not only showcases my technical skills in API development but also emphasizes the art of translating 
                raw data into meaningful visual narratives. The end result will be a portfolio that exemplifies my ability
                 to deliver concise and impactful solutions in the realms of API development and data visualization."
        />,
        <ProjectCards
            img='https://i.pinimg.com/originals/99/40/6d/99406daa1257193d38b13defb83a05c7.png'
            title="Thinking....."
            description="(LOL)"
            modal_head_img='https://wallpaperswide.com/download/space_aesthetic-wallpaper-3840x2160.jpg'
            modal_title="My Mind Wandering"
            modal_description="What's the next BIG Idea ??"
        />,
        <ProjectCards
            img='https://i.pinimg.com/originals/99/40/6d/99406daa1257193d38b13defb83a05c7.png'
            title="Thinking....."
            description="(LOL)"
            modal_head_img='https://wallpaperswide.com/download/space_aesthetic-wallpaper-3840x2160.jpg'
            modal_title="My Mind Wandering"
            modal_description="What's the next BIG Idea ??"
        />,
        <ProjectCards
            img='https://i.pinimg.com/originals/99/40/6d/99406daa1257193d38b13defb83a05c7.png'
            title="Thinking....."
            description="(LOL)"
            modal_head_img='https://wallpaperswide.com/download/space_aesthetic-wallpaper-3840x2160.jpg'
            modal_title="My Mind Wandering"
            modal_description="What's the next BIG Idea ??"
        />,

    ];


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
                            {/* Slice the array of cards to only include the number of cards to show */}
                            {cards.slice(0, numCardsToShow)}
                            {/* Conditionally render the "Load More" or "Load Less" button */}
                            {numCardsToShow < cards.length ? (
                                <button className='load_btn' onClick={() => setNumCardsToShow(numCardsToShow + 3)}>Load More</button>
                            ) : (
                                <button className='load_btn' onClick={() => setNumCardsToShow(6)}>Load Less</button>
                            )}
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