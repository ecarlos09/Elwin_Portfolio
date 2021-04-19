const initState = {
    players: [{id: 'default', playerName: 'stranger'}]
}

const playerReducer =  (state=initState, action) => {
    switch(action.type) {
        case 'FETCH_INIT':
            return state;
        case 'ADD_NAME':
            const newPlayer = action.payload;
            return ({players: state.players.push(newPlayer)});
        default: 
            return state;
    }
}

export default playerReducer;