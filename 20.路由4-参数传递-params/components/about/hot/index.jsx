import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
import Detail from './detail'

export default class Hot extends Component {

    render() {
        return (
            <div>
                <ul>
                    {/*1、向路由组件传递params数据*/}
                    <li>
                        <NavLink to={'/about/hot/detail/1/热门001'}>热门001</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about/hot/detail/2/热门002'}>热门002</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about/hot/detail/3/热门003'}>热门003</NavLink>
                    </li>
                </ul>
                <hr/>

                {/*2、声明接收参数*/}
                <Route path={'/about/hot/detail/:id/:title'} component={Detail}/>
            </div>
        );
    }
}
