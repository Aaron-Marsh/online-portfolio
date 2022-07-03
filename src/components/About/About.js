import React from 'react';

import './About.css';
import japanImage from '../../images/japan.jpg';
import snowboardingImage from '../../images/snowboarding.jpg';

// "https://free4kwallpapers.com/uploads/originals/2016/01/03/gullfoss-waterfall-near-sunset-time-in-summer-wallpaper.jpg"

function About() {
    return (
        <>
            <div className="about-card">
                <h2 className="about-title">About Me</h2>
                <div className="about-container">
                    <div>
                        <p className="about-paragraphs">Hi, I'm Aaron Marsh, and I'm currently enrolled in a full stack software engineering course with futureproof.</p>
                        <img src={snowboardingImage} className="about-image2" alt="Aaron snowboarding" />
                    </div>
                    <div>
                        <img src={japanImage} className="about-image1" alt="Aaron in Japan" />
                        <p className="about-paragraphs">some more text will need to go here</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About
