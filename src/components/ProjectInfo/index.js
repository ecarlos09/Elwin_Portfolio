import React from 'react';
import { Container, Card, Accordion, Button } from 'react-bootstrap';

import consoulLogLanding from '../../assets/consoul-log-landing.jpg';
import consoulLogFeed from '../../assets/consoul-log-feed.jpg';
import habite from '../../assets/habite.jpg';
import choosic from '../../assets/choosic.jpg';

import './style.css';

const ProjectInfo = () => {
    return (
        <Container className="projects">
            <h1>Check out some of my most recent work!</h1>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Consoul.log
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div id="project-1">
                                <div className="project-img">
                                    <img src={consoulLogLanding} alt="Landing page for consoul.log"/>
                                    <img src={consoulLogFeed} alt="Exampe feed for consoul.log"/>
                                </div>
                                <div className="project-links">
                                    <a href="https://consoul-log.netlify.app/">
                                        <i className="fab fa-chrome"></i>
                                    </a>
                                    <a href="https://github.com/ecarlos09/consoul-log">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>                
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Habite
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <div className="project-2">
                                <div className="project-img">
                                    <img src={habite}/>
                                </div>
                                <div className="project-links">
                                    <a href="https://habite.netlify.app/">
                                        <i className="fab fa-chrome"></i>
                                    </a>
                                    <a href="https://github.com/ecarlos09/co-habiters">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            ChoosicMusic
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <div className="project-3">
                                <div className="project-img">
                                    <img src={choosic} />
                                </div>
                                <div className="project-links">
                                    <a href="https://choosic-music.netlify.app/">
                                        <i className="fab fa-chrome"></i>
                                    </a>
                                    <a href="https://github.com/ecarlos09/ee-music-app">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>     
        </Container>
    )
}

export default ProjectInfo;