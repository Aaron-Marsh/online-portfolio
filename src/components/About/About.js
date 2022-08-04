import React from 'react';

import './About.css';
import japanImage from '../../images/japan.jpg';
import snowboardingImage from '../../images/snowboarding.jpg';

// "https://free4kwallpapers.com/uploads/originals/2016/01/03/gullfoss-waterfall-near-sunset-time-in-summer-wallpaper.jpg"

function About() {
    let spinning = false

    const rotate = () => {
        spinning = true
        document.getElementById('about-image2').classList.remove('about-image2-hover')
        document.getElementById('about-image2').classList.add('rotate');
        setTimeout(()=>{
            document.getElementById('about-image2').classList.remove('rotate')
            spinning = false
        }, 2000)
    }

    const confetti = () => {  
        function random(max){
            return Math.random() * (max - 0) + 0;
        }
      
        let c = document.createDocumentFragment();
        for (let i=0; i<100; i++) {
          let styles = 'transform: translate3d(' + (random(800) - 400) + 'px, ' + (random(800) - 450) + 'px, 0) rotate(' + random(360) + 'deg);\
                        background: hsla('+random(360)+',100%,50%,1);\
                        animation: bang 1.2s ease-out forwards;\
                        opacity: 0';
            
          let e = document.createElement("i");
          e.style.cssText = styles.toString();
          c.appendChild(e);
      }
        document.getElementById('confetti-div').append(c);
      }

      const enter = () => {
        if (spinning === false) {
            document.getElementById('about-image2').classList.add('about-image2-hover')
        }
      }

    return (
        <>
            <div id="about" className="about-card">
                <h2 className="about-title">About Me</h2>
                <div className="about-container">
                    <div>
                        <p className="about-paragraphs">Hi, I'm Aaron Marsh, and I'm currently enrolled in a full stack software engineering course with futureproof.</p>
                        <img id="about-image2" src={snowboardingImage} className="about-image2 about-image2-hover" alt="Aaron snowboarding" onClick={rotate} onMouseEnter={enter} />
                    </div>
                    <div>
                        <div id="confetti-div" className='confetti'></div>
                        <img id="about-image1" src={japanImage} className="about-image1" alt="Aaron in Japan" onClick={confetti}/>
                        <p className="about-paragraphs">I graduated with a master's in chemical engineering from the University of Cambridge. I love working on challenging problems, collaborating with interesting people, and learning new things everyday.</p>
                        <p className="about-paragraphs">I have worked on some really fun full stack projects that you can check out below. I enjoyed working on and developing both the front end and back end of different projects.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About
