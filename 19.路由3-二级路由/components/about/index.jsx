import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from "react-router-dom";
import Hot from "../home/hot";
import Mine from "../home/mine";

export default class About extends Component {
    render() {
        return (
            <div>
                {/*嵌套的二级路由需要指定一级路由的内容：/about/ */}
                {/*页面跳转*/}
                <NavLink to={'/about/hot'}>热门</NavLink>
                <br/>
                <NavLink to={'/about/mine'}>我的</NavLink>

                {/*定义二级路由*/}
                <Switch>
                    <Route path={'/about/hot'} component={Hot}/>
                    <Route path={'/about/mine'} component={Mine}/>
                    {/*设置耳机路由的默认项*/}
                    <Redirect to={'/about/hot'}/>
                </Switch>
            </div>
        );
    }
}
