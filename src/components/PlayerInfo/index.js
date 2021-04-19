import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// import { addName } from '../../actions';

const PlayerInfo = () => {
    const stranger = useSelector(state => state.players[0]);
    // const dispatch = useDispatch();

    const [ formData, setFormData ] = useState({ username: "" });
    const [ player, setPlayer ] = useState(stranger);

    const handleInput = e => {
        const { key, value } = e.target;
        setFormData({...formData, [key]: value });
    }

    // const handleInput = e => {
    //     e.preventDefault();
    //     const newPlayerName = dispatch(addName(e).players)
    //     setNameInput(newPlayerName);
    // };
    
    const handleNameSubmit = e => {
        e.preventDefault();
        setPlayer(formData.username);
        setFormData({username: ""});
    }

    return (
        <section className="player-name">
            <h3>Hi there, { player }!</h3>
            <form onSubmit={handleNameSubmit}>
                <label htmlFor="username">Not your name?</label>
                <input type="text" id="username" name="username" placeholder="Tell us" value={formData.username} onChange={handleInput} />
                <input type="submit" value="We'd love to meet you!" />
            </form>
        </section>
    )
}

export default PlayerInfo;