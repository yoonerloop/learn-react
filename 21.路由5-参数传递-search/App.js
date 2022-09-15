import React, {Component} from 'react';
import {NavLink, Route, HashRouter, Switch,Redirect} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import './App.css';

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <NavLink to={'/home'}>Home</NavLink><br/>
                <NavLink to={'/about'} children={'About'}/><br/>
                <hr/>
                <Switch>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/about'} component={About}/>
                    <Redirect to={'/home'}/>
                </Switch>
            </HashRouter>
        );
    }
}
