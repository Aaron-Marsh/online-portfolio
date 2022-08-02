import React from 'react'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav id="navigation" className="navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#technologies">Technologies</a>
            <a href="#contact">Contact me</a>
        </nav>
    )
}

export default Navbar
