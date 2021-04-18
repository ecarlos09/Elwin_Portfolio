import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './index.css';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Container fluid>
                <App />
            </Container>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);