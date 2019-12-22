import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Blog from '../pages/Blog';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Blog} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;