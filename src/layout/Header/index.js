import React from 'react';

import { useWindowSize } from '../../hooks';

import './style.css';

import { Canvas, StartButton } from '../../components';

const Header = ({ handleStart }) => {
    return (
        <>
            <header style={{width: useWindowSize().width, height: useWindowSize().height}}>
                <Canvas />
                <StartButton handleStart={handleStart}/>
            </header>
        </>
    );
};

export default Header;