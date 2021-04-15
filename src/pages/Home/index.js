import React, { useRef } from 'react';

import { Howdy } from '../../components';

const Home = () => {

    const mainStart = useRef();

    // const handleStart = () => notesEnd.current.scrollIntoView({ behavior: "smooth" })

    return (
        <section className="intro">
            <h1 ref={mainStart}>Howdy!</h1>
            <Howdy />
        </section>        
    );
};

export default Home;