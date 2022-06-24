import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './Landing/Landing'
import About from './About/About'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer';

const App = () => {
    return (
        <>
        <Landing />
        <About />
        <Projects />
        <Footer />
        </>
    )
}

export default App
