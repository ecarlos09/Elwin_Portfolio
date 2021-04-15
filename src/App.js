import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages';
import { Header, Footer } from './layout';

const App = () => {
    return (
        <>
            <Header />
            <Footer />
        </>
    );
};

export default App;