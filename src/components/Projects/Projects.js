import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


import londonJournal from '../../images/londonJournal.png'
import rabbitHabits from '../../images/rabbitHabits.png'
import aboutTime from '../../images/aboutTime.png'
import readHerring from '../../images/readHerring.png'

import './Projects.css';

function Projects() {
    const londonLink = () => {
        window.open('https://london-journal.netlify.app/','_blank')
    }
    const habitLink = () => {
        window.open('https://rabbit-habits.netlify.app/','_blank')
    }
    const abouttimeLink = () => {
        window.open('https://about-time.netlify.app/','_blank')
    }
    const readherringLink = () => {
        window.open('https://read-herring.netlify.app/','_blank')
    }

    return (
        <>
            <h2 id="projects" className="projects-title">My Projects</h2>
            <div className="project-cards">
            <Card style={{ width: '40vw' }}>
                <Card.Img variant="top" src={londonJournal} alt="London Journal website" />
                <Card.Body>
                <Card.Title>The London Journal</Card.Title>
                <Card.Text>
                    I worked on this website for my very first project week at Futureproof! Here, you can anonymously post threads about travelling in London, add your reactions to posts, or even send replies and gifs.
                </Card.Text>
                <button className="project-btn" onClick={londonLink}>Visit the Site</button>
                </Card.Body>
            </Card>
            <Card style={{ width: '40vw' }}>
                <Card.Img variant="top" src={rabbitHabits} alt="Rabbit Habits website" />
                <Card.Body>
                <Card.Title>Rabbit Habits</Card.Title>
                <Card.Text>
                    A neat little habit tracker! Create your own account and use it to track whatever daily, weekly, or monthly habits you want to form. Can you hit your goals and keep your streaks going?! (Looks best on mobile sizes!)
                </Card.Text>
                <button className="project-btn" onClick={habitLink}>Visit the Site</button>
                </Card.Body>
            </Card>
            </div>

            <div className="project-cards">
            <Card style={{ width: '40vw' }}>
                <Card.Img variant="top" src={aboutTime} alt="About Time website" />
                <Card.Body>
                <Card.Title>About Time</Card.Title>
                <Card.Text>
                    'About Time' is a fun quiz game where correct answers give you more points if you answer fast. Don't run out of time on questions, and invite your friends to see who can stay on top of the live leaderboard!
                </Card.Text>
                <button className="project-btn" onClick={abouttimeLink}>Visit the Site</button>
                </Card.Body>
            </Card>
            <Card style={{ width: '40vw' }}>
                <Card.Img variant="top" src={readHerring} alt="Read Herring website" />
                <Card.Body>
                <Card.Title>Read Herring</Card.Title>
                <Card.Text>
                    A fun bookclub where you can discover new books, and discuss all your crazy fan theories in our forums. Setup your own profile, add books to your bookshelves, rate, favourite, and review... there's lots to do!
                </Card.Text>
                <button className="project-btn" onClick={readherringLink}>Visit the Site</button>
                </Card.Body>
            </Card>
            </div>
        </>
    );
}

export default Projects
