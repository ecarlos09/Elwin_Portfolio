import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Container } from 'react-bootstrap';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store} >
                    <Container fluid>
                        <App />
                    </Container>
            </Provider>            
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);