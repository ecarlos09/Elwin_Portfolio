import React from 'react';

import { useWindowSize } from '../../hooks'

import './style.css'

import { Canvas, StartButton } from '../../components';

const Header = () => {
    return (
        <header style={{width: useWindowSize().width, height: useWindowSize().height}}>
            <Canvas />
            <StartButton />
        </header>
    );
};

export default Header;