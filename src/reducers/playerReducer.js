const initState = {
    players: ['stranger']
}

const playerReducer =  (state=initState, action) => {
    switch(action.type) {
        case 'ADD_NAME':
            const newPlayer = action.payload;
            console.log()
            return {...state, players: [ ...state.players, newPlayer ] };
        default: 
            return state;
    }
}

export default playerReducer;