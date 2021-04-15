import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages';
import { Header, Footer } from './layout';

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
        </>
    );
};

export default App;