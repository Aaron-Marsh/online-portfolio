import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import image from '../../images/japan.jpg'

import './Projects.css';

function Projects() {
    return (
        <>
            <h2 className="projects-title">My Projects</h2>
            <div className="project-cards">
            <Card style={{ width: '40vw' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>The London Journal</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '40vw' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>Rabbit Habits</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
        </>
    );
}

export default Projects
