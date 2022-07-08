import React, { useEffect } from 'react'

import './Landing.css'

const Landing = () => {
    
    const checkpoint = 200;
    let opacity = 1;
    
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
      document.getElementById("main-title").style.opacity = opacity;
      document.getElementById("landing-subtitle").style.opacity = opacity;
    
    });
    return (
        <>
        <div className="heading-box">
        <h1 id="main-title" className="scroll-fade">Aaron Marsh</h1>
        <h2  id="landing-subtitle" className="sub-title">Futureproof Tech Trainee</h2>
        </div>
        <img className="landing-image" src="https://free4kwallpapers.com/uploads/originals/2016/02/03/hubble-galaxy-wallpaper.jpg" alt="Hubble Telescope Galaxy image" />
        </>
    )
}

export default Landing
