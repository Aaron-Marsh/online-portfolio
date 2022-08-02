import React, { useEffect } from 'react'

import './Landing.css'

const Landing = () => {
    
    const checkpoint = window.innerHeight;
    let opacity = 1;
    console.log(window.innerHeight)
    console.log(screen.height)
    
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll < checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
        document.getElementById("navigation").style.display = '';
    } else {
        opacity = 0;
        document.getElementById("navigation").style.display = 'none';
    }
      document.getElementById("main-title").style.opacity = opacity;
      document.getElementById("landing-subtitle").style.opacity = opacity;
      document.getElementById("navigation").style.opacity = opacity;
    });

    
  
  // useEffect(()=>{
    
  //   if (window.location.href === 'https://aaronmarsh.netlify.app/') {
  //     document.getElementById("mainsite-btn").style.display="none";
  //   }
  // })
  
    return (
        <>
        
        <div className="heading-box">
          <h1 id="main-title">Aaron Marsh</h1>
          <h2  id="landing-subtitle" className="sub-title">Futureproof Tech Trainee</h2>
        </div>
        <img className="landing-image" src="https://free4kwallpapers.com/uploads/originals/2016/02/03/hubble-galaxy-wallpaper.jpg" alt="Hubble Telescope Galaxy image" />
        </>
    )
}

export default Landing
