import React, {Component} from 'react';
import {NavLink, Route, HashRouter, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import './App.css'
import Detail from "./components/Detail";

/**
 * 路由5.0，以下都是5.0，路由6.0请查看33
 *
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
                    {/*1、定义路由*/}
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/about'} component={About}/>
                    {/*路由匹配从上到下依次进行，正常情况下一个路径对应一个组件，但是路径相同会匹配多个，例如上面的/home会同时显示Home和
                    Detail组件，引入Switch组件可以使得Route出现多个情况下匹配到第一个之后，后面的就会在执行，查找更快。就不会匹配下面的了*/}
                    <Route path={'/about'} component={Detail}/>
                </Switch>
                {/*2、页面跳转1*/}
                <NavLink activeClassName={'test'} to={'/home'}>Home</NavLink>
                <NavLink activeClassName={'test'} to={'/about'} children={'About'}/>
                <NavLink activeClassName={'test'} to={'/about/a/b/c'} children={'About'}/>
            </HashRouter>
        );
    }
}
