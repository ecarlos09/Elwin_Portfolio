import React from 'react';

import { Container } from 'react-bootstrap';

const Intro = () => {
    return (
        <Container className="intro-blurb">
            <p>
                Hi there!  My name is Elwin and I am a keen coder and problem solver. 
                I am passionate about learning new things, embracing fresh challenges and using my skills to improve the lives of other people. 
                Although relatively new to the tech industry, I thoroughly enjoy exploring what it has to offer and look forward to launching my digital career.
            </p>

            <p>
                Outside of work, you will find me involved with one of the following:
            </p>

            <ul>
                <li>indulging in cue sports</li>
                <li>watching/playing Countdown</li>
                <li>settling down for a T.V. series binge session</li>
                <li>(having a go at) cooking something delicious!</li>
            </ul> 

            <p>
                Read on to find out more about my skill set.  There's also a little game for you to play at the end ...
            </p>
        </Container>
    )
}

export default Intro;