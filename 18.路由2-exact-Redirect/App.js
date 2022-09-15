import React, {Component} from 'react';
import {NavLink, Route, HashRouter, Switch,Redirect} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import './App.css'
import Detail from "./components/Detail";

/**
 * 1、定义路由
 * （1）使用HashRouter包裹顶层
 * （2）使用Routes包裹路由定义Route
 * 2、页面跳转
 * （1）使用Link或者NavLink
 *    <NavLink to={'/home'}><p>Home</p></NavLink>
 * (2) 使用useNavigate
 *
 */
export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/about'} component={About}/>
                    {/*exact表示精准匹配，路径必须完全一致，向这种/about/a/b/c就会匹配失败*/}
                    {/*<Route path={'/about'} exact component={About}/>*/}

                    {/*重定向，如果上面都没有匹配到，就走到这*/}
                    <Redirect to={'/about'}/>
                </Switch>

                <NavLink to={'/home'}>Home</NavLink><br/>
                <NavLink to={'/about'} children={'About'}/><br/>
                <NavLink to={'/about/a/b/c'} children={'About2'}/><br/>
            </HashRouter>
        );
    }
}
