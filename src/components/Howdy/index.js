import React from 'react';

import { Container, Image } from 'react-bootstrap';
import { Intro } from '..';

import './style.css';

const Howdy = () => {
    return (
        <Container className="howdy">
            <Container fluid className="title">
                <h1>N.B.  We are in the process of making this more mobile friendly! </h1>
                <h1>Howdy!</h1>
            </Container>
            <Image id="howdy-img" src="https://i.imgur.com/WGS6L73.jpg" alt="Willy Wonka costume" fluid roundedCircle />
            <Intro />
        </Container>
    )
}

export default Howdy;