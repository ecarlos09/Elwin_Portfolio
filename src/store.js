import { createSore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import playerReducer from './reducers/playerReducer';

const store = createStore(doggosReducer, devToolsEnhancer());

export default store;