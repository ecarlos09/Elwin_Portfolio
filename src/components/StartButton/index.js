import React from 'react';

const StartButton = ({handleStart}) => {
    return (
        <button id="start-button" onClick={handleStart}>
            <h1>Welcome to my portfolio!</h1>
            <h4>Click on me to get started ...</h4>
        </button>
    )
}

export default StartButton;