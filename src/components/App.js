import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Favicon from 'react-favicon'

import Landing from './Landing/Landing'
import About from './About/About'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer';
import Technologies from './Technologies/Technologies';
import Navbar from './Navbar/Navbar'

import styles from './App.module.css'

const App = () => {
    return (
        <>
            <section>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </section>
        <Navbar />
        <Landing />
        <About />
        <Projects />
        <Technologies />
        <Footer />
        </>
    )
}

export default App
