import React from 'react';
import { Container } from 'react-bootstrap';

import './style.css';

import { PlayIcon } from '../../components'

const Game = () => {
    return (
        <Container className="game" fluid>
            <h2>Two Truths and a Lie</h2>

            <p>
                The following is a well-known icebreaker. 
                If you've not heard of this game before, the instructions are fairly simple. 
                After you've entered your name in the form below, three statements will appear. 
                Two of these are true facts about me, while the other is be a complete lie. 
                Your task is to figure out which of the three statements is false.
            </p>

            <div className="game-content" >
                <PlayIcon />
            </div>
        </Container>
    )
}

export default Game;