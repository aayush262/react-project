import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import { HomePage } from './components/homePage/homePage';

const Kaguya = () => (
    <h2>Kaguya</h2>
)

export const AppRoute = ()=>(
    <Router>
        <Switch>
            <Route exact path="/" component = {HomePage}></Route>
            <Route exact path ="/kaguya" component = {Kaguya}></Route>
        </Switch>
    </Router>
)