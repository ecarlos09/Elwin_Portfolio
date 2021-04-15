import React, { useRef } from 'react';

const Home = () => {

    const mainStart = useRef();

    // const handleStart = () => notesEnd.current.scrollIntoView({ behavior: "smooth" })

    return (
        <h1 ref={mainStart}>Welcome to my site!</h1>
    );
};

export default Home;