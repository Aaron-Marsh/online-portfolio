import React, {useState} from 'react'
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
    let [shootingstars, setShootingstars] = useState(0)
    const starClick = () => {
        setShootingstars(count => count + 1)
    }

    return (
        <>
            <section>
                <span onClick={starClick}></span>
                <span onClick={starClick}></span>
                <span onClick={starClick}></span>
                <span onClick={starClick}></span>
                <span onClick={starClick}></span>
                <span onClick={starClick}></span>
                <span onClick={starClick}></span>
                <span onClick={starClick}></span>
                <span onClick={starClick}></span>
                <span onClick={starClick}></span>
                <p className={styles.starcount}>Shooting Stars Caught: {shootingstars}</p>
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
