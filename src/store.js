import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import playerReducer from './reducers/playerReducer';

const store = createStore(playerReducer, devToolsEnhancer());

export default store;