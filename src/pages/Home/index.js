import React, { useRef } from 'react';

import { NavBar, Header, Skills, Game, Contact } from '../../layout';
import { Howdy, Intro } from '../../components';

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
        <>
            <section className="canvas">
                <Header handleStart={handleStart} />
            </section>

            <NavBar handleStart={handleStart} handleSkills={handleSkills} handleGame={handleGame} handleContact={handleContact} />

            <section className="intro">
                <h1>N.B.  This page is still under construction ... come back later and perhaps it will be finished!</h1>
                <h1 ref={mainStart}>Howdy!</h1>
                <div className="about">
                    <Intro />
                    <Howdy />
                </div>            
            </section>

            <span ref={skills}></span>
            <Skills />
            <span ref={game}></span>
            <Game />
            <span ref={contact}></span>
            <Contact />    
        </>    
    );
};

export default Home;