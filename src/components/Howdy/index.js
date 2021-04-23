import React from 'react';

import { Container } from 'react-bootstrap';
import { Intro } from '..';

import './style.css';

const Howdy = () => {
    return (
        <Container className="howdy">
            <Container fluid className="title">
                <p id="mob-note">N.B.  We are in the process of making this more mobile friendly! </p>
                <h1>Howdy!</h1>
            </Container>
            <Intro />
        </Container>
    )
}

export default Howdy;