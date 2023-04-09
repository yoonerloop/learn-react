import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
import Detail from './detail'

export default class Hot extends Component {

    render() {
        return (
            <div>
                <ul>
                    {/*1、向路由组件传递数据search*/}
                    <li>
                        <NavLink to={'/about/hot/detail?id=1&title=热门001'}>热门001</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about/hot/detail?id=2&title=热门002'}>热门002</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about/hot/detail?id=3&title=热门003'}>热门003</NavLink>
                    </li>
                </ul>
                <hr/>

                {/*2、声明接收参数，无需声明接收*/}
                <Route path={'/about/hot/detail'} component={Detail}/>
            </div>
        );
    }
}
