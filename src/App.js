import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages';
import { Header, Skills, Game, Footer } from './layout';

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
            <Skills />
            <Game />
            <Footer />
        </>
    );
};

export default App;