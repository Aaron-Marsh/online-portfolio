import React from 'react'

import './Footer.css'
import linkedinIcon from '../../images/linkedinSienna.png'
import githubIcon from '../../images/githubSienna.png'

const Footer = () => {
    return (
        <>
            <div className="footer">
            <h3 className="contacts-title">Contact Me</h3>
            <a href="https://www.linkedin.com/in/aaron-marsh98/" className="icon-box" target="_blank"><img src={linkedinIcon} alt="LinkedIn" className="icon" /></a>
            <a href="https://github.com/Aaron-Marsh" className="icon-box"  target="_blank" ><img src={githubIcon} alt="GitHub" className="icon" /></a>
            <p className="credits">Aaron Marsh 2022</p>
            </div>
        </>
    )
}

export default Footer
