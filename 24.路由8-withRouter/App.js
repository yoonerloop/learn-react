import React, {Component} from 'react';
import {NavLink, Route, HashRouter, Switch, Redirect} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import './App.css';
import Header from "./components/header";

export default class App extends Component {
    render() {
        return (
            <di>
                <HashRouter>
                    {/*一般组件*/}
                    <Header/>
                    {/*路由组件*/}
                    <hr/>
                    <NavLink to={'/home'}>Home</NavLink><br/>
                    <NavLink to={'/about'} children={'About'}/><br/>
                    <Switch>
                        <Route path={'/home'} component={Home}/>
                        <Route path={'/about'} component={About}/>
                        <Redirect to={'/home'}/>
                    </Switch>
                </HashRouter>
            </di>
        );
    }
}
