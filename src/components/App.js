import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './Landing/Landing'
import About from './About/About'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer';

import styles from './App.module.css'

const App = () => {
    return (
        <>
        <div className={styles.container}>
          

          <div className={styles.area} >
            <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        <Landing />
            </div>
        </div>
        <About />
        <Projects />
        <Footer />
        </>
    )
}

export default App
