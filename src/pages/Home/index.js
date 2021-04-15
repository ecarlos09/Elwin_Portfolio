import React, { useRef } from 'react';

const Home = () => {

    const mainStart = useRef();

    return (
        <h1 ref={mainStart}>Welcome to my site!</h1>
    );
};

export default Home;