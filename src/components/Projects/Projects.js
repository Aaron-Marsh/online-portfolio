import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import londonJournal from '../../images/londonJournal.png'
import rabbitHabits from '../../images/rabbitHabits.png'
import aboutTime from '../../images/aboutTime.png'
import lap4 from '../../images/lap4.png'

import './Projects.css';

function Projects() {
    return (
        <>
            <h2 className="projects-title">My Projects</h2>
            <div className="project-cards">
            <Card style={{ width: '40vw' }}>
                <Card.Img variant="top" src={londonJournal} alt="London Journal website" />
                <Card.Body>
                <Card.Title>The London Journal</Card.Title>
                <Card.Text>
                    I worked on this website for my very first project week at Futureproof! Here, you can anonymously post threads about travelling in London, add your reactions to posts, or even send replies and gifs.
                </Card.Text>
                <button className="project-btn">
                <a href="https://london-journal.netlify.app/" target="_blank">Visit the Site</a>
                </button>
                </Card.Body>
            </Card>
            <Card style={{ width: '40vw' }}>
                <Card.Img variant="top" src={rabbitHabits} alt="Rabbit Habits website" />
                <Card.Body>
                <Card.Title>Rabbit Habits</Card.Title>
                <Card.Text>
                    A neat little habit tracker! Create your own account and use it to track whatever daily, weekly, or monthly habits you want to form. Can you hit your goals and keep your streaks going?! (Looks best on mobile sizes!)
                </Card.Text>
                <button className="project-btn">
                <a href="https://rabbit-habits.netlify.app/" target="_blank">Visit the Site</a>
                </button>
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
                <button className="project-btn">
                <a href="https://about-time.netlify.app/" target="_blank">Visit the Site</a>
                </button>
                </Card.Body>
            </Card>
            <Card style={{ width: '40vw' }}>
                <Card.Img variant="top" src={lap4} alt="Coming Soon image" />
                <Card.Body>
                <Card.Title>Lap 4 Project</Card.Title>
                <Card.Text>
                    I'm working on this now but check back soon to see my project with a python backend!
                </Card.Text>
                <button className="project-btn">
                Visit the Site
                </button>
                </Card.Body>
            </Card>
            </div>
        </>
    );
}

export default Projects
