import React, { useRef } from 'react';

import { Header, Skills, Game, Contact } from '../../layout';
import { Howdy, Intro } from '../../components';

const Home = () => {

    const mainStart = useRef();

    // const handleStart = () => notesEnd.current.scrollIntoView({ behavior: "smooth" })

    return (
        <>
            <section className="canvas">
                <Header />
            </section>

            <section className="intro">
                <h1>N.B.  This page is still under construction ... come back later and perhaps it will be finished!</h1>
                <h1 ref={mainStart}>Howdy!</h1>
                <Howdy />
                <Intro />            
            </section>
            <Skills />
            <Game />
            <Contact />    
        </>    
    );
};

export default Home;