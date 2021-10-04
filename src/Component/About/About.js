import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="d-block">
            {/* About Image Section */}
            <div className="d-block bg-dark">
                <div className="about-img">
                    <img src="./about.jpg"/>
                </div>
            </div>
            {/* About Us Section */}
            <div className="about-us mt-5">
                <h1>About Us</h1>
                <p className="text-secondary">We are from IELTS Course. We ensure quality training to prepare you for the IELTS exam. Our teachers are very skillful in English language. They will do at their best to make sure that you can get a very good IELTS score. Take all of our support from us to prepare yourself for world's most popular English language test. You only need to study our course content attentively and take our support when you need. We shall also provide special counselling so that you will have no reason to get prepared for the IELTS test.</p>
            </div>
            {/* Our Teachers Section */}
            <div className="d-block mt-5">
                <h1>Our Teachers</h1>
                <div className="teachers-container d-flex justify-content-around">
                    <div className="single-teacher">
                        <div className="teacher-image">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                        </div>
                        <div className="teacher-detail mt-3">
                            <h5>Name: Mike Henry</h5>
                            <p>M.A in English</p>
                        </div>
                    </div>
                    <div className="single-teacher">
                        <div className="teacher-image">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                        </div>
                        <div className="teacher-detail mt-3">
                            <h5>Name: Mike Henry</h5>
                            <p>M.A in English</p>
                        </div>
                    </div>
                    <div className="single-teacher">
                        <div className="teacher-image">
                            <img src="https://images.unsplash.com/photo-1624797432677-6f803a98acb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8eW91bmclMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                        </div>
                        <div className="teacher-detail mt-3">
                            <h5>Name: Mike Henry</h5>
                            <p>M.A. in English</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;