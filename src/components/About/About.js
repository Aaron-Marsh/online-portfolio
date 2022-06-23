import React from 'react';

import './About.css';
import japanImage from '../../images/japan.jpg';
import snowboardingImage from '../../images/snowboarding.jpg';

// "https://free4kwallpapers.com/uploads/originals/2016/01/03/gullfoss-waterfall-near-sunset-time-in-summer-wallpaper.jpg"

function About() {
    return (
        <>
            <div className='about-section'>
            <div className="about-card">
                <h2 className="about-title">About Me</h2>
                <div className="about-container">
                    <div className="about-paragraphs">
                        <p>Hi, I'm Aaron Marsh, and I'm currently enrolled in a full stack software engineering course with futureproof.</p>
                        <img src={snowboardingImage} className="about-image2" alt="Gullfoss Image" />
                    </div>
                    <div className="about-images">
                        <img src={japanImage} className="about-image1" alt="Gullfoss Image" />
                        <p className="about-paragraphs">some text</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default About
