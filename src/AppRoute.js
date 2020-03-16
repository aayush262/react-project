import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import { HomePage } from './components/homePage/homePage';
import Anime from './components/anime/anime';
import { Header } from './components/common/Header/Header';
import { LoginPage } from './components/loginPage/loginPage';

const Kaguya = () => (
    <h2>Kaguya</h2>
)

export const AppRoute = ()=>(
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component = {HomePage}></Route>
            <Route exact path ="/kaguya" component = {Kaguya}></Route>
            <Route exact path="/anime" component = {Anime}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
        </Switch>
    </Router>
)