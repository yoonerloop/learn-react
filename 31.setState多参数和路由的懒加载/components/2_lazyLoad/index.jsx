import React, {Component, lazy,Suspense} from 'react';
import {NavLink, Route, HashRouter,Switch} from "react-router-dom";

//懒加载路由组件
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

/**
 * Suspense：必须要有，包裹在懒加载 组件的外面
 * fallback：表示加载中时候的组件状态，例如loading状态，注意这个fallback里面的状态不能使用lazy加载，
 * 需要用到直接加载，否则加载失败
 */
export default class Demo2 extends Component {
    render() {
        return (
            <HashRouter>
                <Suspense fallback={<h1>loading……</h1>}>
                    <Switch>
                        <Route path={'/home'} component={Home}/>
                        <Route path={'/about'} component={About}/>
                    </Switch>
                </Suspense>

                <NavLink activeClassName={'test'} to={'/home'}>Home</NavLink>
                <NavLink activeClassName={'test'} to={'/about'} children={'About'}/>
            </HashRouter>
        );
    }
}
