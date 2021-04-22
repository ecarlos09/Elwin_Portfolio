import React from 'react';
import { Container } from 'react-bootstrap';

import './style.css';

const Contact = () => {
    return (
        <Container className="contact" fluid>
            <h2>Get in touch!</h2>
            <p>Do you have any questions about my work?</p>
            <p>Fancy collaborating?</p>
            <p>Or are you simply curious?</p>
            <p>Check out my <a href="https://github.com/ecarlos09"><i className="fab fa-github"></i>Github</a> and <a href="https://github.com/ecarlos09"><i className="fab fa-linkedin"></i>LinkedIn</a> pages!</p>
            <p>Or contact me directly via email (email form coming soon ...)</p>
        </Container>
    )
}

export default Contact;