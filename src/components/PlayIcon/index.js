import React from 'react';

import { PlayerInfo, Statements } from '../';

import { Image, Container } from 'react-bootstrap';

import './style.css'

const PlayIcon = () => {
    return (
        <section className="lets-play">
            <h3>Let's Play</h3>
            <Container className="game-intro">
                <Image id="howdy-img" src="https://i.imgur.com/WGS6L73.jpg" alt="Willy Wonka costume" fluid roundedCircle />
                <Container className="player-input">
                    <PlayerInfo />
                    <Statements />
                </Container>
            </Container>
        </section>
    )
}

export default PlayIcon;