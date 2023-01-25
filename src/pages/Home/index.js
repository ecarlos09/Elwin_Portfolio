import React, { useRef } from 'react';

import { Container } from 'react-bootstrap';

import { NavBar, Header, Skills, Game, Contact } from '../../layout';
import { Howdy, Thanks } from '../../components';

import './style.css';

const Home = () => {

    const mainStart = useRef();
    const skills = useRef();
    const game = useRef();
    const contact = useRef();

    const handleStart = () => {
        mainStart.current.scrollIntoView({ behavior: "smooth" })
    }

    const handleSkills = () => {
        skills.current.scrollIntoView({ behavior: "smooth" })
    }

    const handleGame = () => {
        game.current.scrollIntoView({ behavior: "smooth" })
    }

    const handleContact = () => {
        contact.current.scrollIntoView({ behavior: "smooth" })
    }
    
    return (
        <Container fluid>
            <section className="canvas">
                <Header handleStart={handleStart} />
            </section>

            <NavBar handleStart={handleStart} handleSkills={handleSkills} handleGame={handleGame} handleContact={handleContact} />

            <section ref={mainStart} className="intro">
                <Howdy />         
            </section>

            <span ref={skills}></span>
            <Skills />
            <span ref={game}></span>
            <Game />
            <span ref={contact}></span>
            <Contact /> 
            <Thanks />   
        </Container>    
    );
};

export default Home;