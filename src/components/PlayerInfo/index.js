import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// import { addName } from '../../actions';

const PlayerInfo = () => {
    const stranger = useSelector(state => state.players[0]);
    // const dispatch = useDispatch();

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
                <input type="submit" value="We'd love to meet you!" />
            </form>
        </section>
    )
}

export default PlayerInfo;

   // const handleInput = e => {
    //     const { key, value } = e.target;
    //     setFormData({...formData, [key]: value });
    // }

    // const handleNameSubmit = e => {
    //     e.preventDefault();
    //     setPlayer(formData.username);
    //     setFormData({username: ""});
    // }

    // const handleInput = e => {
    //     e.preventDefault();
    //     const newPlayerName = dispatch(addName(e).players)
    //     setNameInput(newPlayerName);
    // };
