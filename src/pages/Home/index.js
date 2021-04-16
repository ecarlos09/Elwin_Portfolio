import React, { useRef } from 'react';

import { Howdy, Intro } from '../../components';

const Home = () => {

    const mainStart = useRef();

    // const handleStart = () => notesEnd.current.scrollIntoView({ behavior: "smooth" })

    return (
        <section className="intro">
            <h1>N.B.  This page is still under construction ... come back later and perhaps it will be finished!</h1>
            <h1 ref={mainStart}>Howdy!</h1>
            <Howdy />
            <Intro />            
        </section>        
    );
};

export default Home;