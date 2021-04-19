import React, { useState } from 'react';

import { useSelector } from 'react-redux';

const PlayerInfo = () => {
    const stranger = useSelector(state => state.players[0]);
    console.log(stranger);
    const [ player, setPlayer ] = useState(stranger);
    const [ nameInput, setNameInput ] = useState("");

    const handleInput = e => setNameInput(e.target.value);
    
    const handleNameSubmit = e => {
        e.preventDefault();
        setPlayer(nameInput);
        setNameInput("");
    }

    return (
        <section className="player-name">
            <h3>Hi there, { player }!</h3>
            <form onSubmit={handleNameSubmit}>
                <label htmlFor="username">Not your name?</label>
                <input type="text" id="username" name="username" placeholder="Tell us" value={nameInput} onChange={handleInput} />
                <input type="submit" value="We're waiting ..." />
            </form>
        </section>
    )
}

export default PlayerInfo;