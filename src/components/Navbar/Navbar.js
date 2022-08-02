import React from 'react'

import './Navbar.css'

const Navbar = () => {
    
    const portfolioLink = () => {
        window.open('https://aaronmarsh.netlify.app/','_blank')
    }

    return (
        <nav id="navigation" className="navigation">
            <button id="mainsite-btn" className="landing-btn" onClick={portfolioLink}>Cohorts? Go to Main Site ➞</button>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#technologies">Technologies</a>
            <a href="#contact">Contact me</a>
        </nav>
    )
}

export default Navbar
