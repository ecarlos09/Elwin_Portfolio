const initState = {
    playerName: 'stranger'
}

const playerReducer =  (state=initState, action) => {
    switch(action.type) {
        case 'ADD_NAME':
            const newPlayer = action.payload;
            return { ...state, playerName: newPlayer};
        default: 
            return state;
    }
}

export default playerReducer;