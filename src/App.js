import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Projects } from './pages';
import { Footer } from './layout';

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
            </Switch>
            <Footer />
        </>
    );
};

export default App;