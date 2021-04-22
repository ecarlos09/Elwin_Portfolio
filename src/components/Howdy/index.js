import React from 'react';

import { Container, Image } from 'react-bootstrap';

import './style.css';

const Howdy = () => {
    return (
        <Container fluid>
            <Image id="howdy-img" src="https://i.imgur.com/WGS6L73.jpg" alt="Willy Wonka costume" fluid roundedCircle />
        </Container>
    )
}

export default Howdy;