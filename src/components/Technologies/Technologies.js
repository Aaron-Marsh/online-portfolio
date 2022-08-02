import React from 'react'

import technologiesUsed from '../../images/technologies.png'
import './Technologies.css'

function Technologies() {
    return(
        <>
            <h2 id="technologies" className="technologies-title">Technologies I've Worked With</h2>
            <img src={technologiesUsed} className="technologies-used" alt="Technologies used" />
        
        </>
    )
}

export default Technologies;
