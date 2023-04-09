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
                        <NavLink replace to={'/about/hot/detail/1/热门001'}>热门001</NavLink>
                    </li>
                    <li>
                        <NavLink replace to={'/about/hot/detail/2/热门002'}>热门002</NavLink>
                    </li>
                    <li>
                        <NavLink replace to={'/about/hot/detail/3/热门003'}>热门003</NavLink>
                    </li>
                </ul>
                <button onClick={() => this.pushShow(4, '热门004')}>push查看</button>
                <button onClick={() => this.replaceShow(4, '热门004')}>replace查看</button>
                <hr/>

                {/*2、声明接收参数*/}
                <Route path={'/about/hot/detail/:id/:title'} component={Detail}/>
            </div>
        );
    }

    replaceShow = (id, title) => {
        //编写一段代码，实现跳转到详情页面
        //params
        this.props.history.replace(`/about/hot/detail/${id}/${title}`)
        //state
        //this.props.history.replace(`/about/hot/detail`,{id:'4', title:'热门004'})
    }

    pushShow = (id, title) => {
        //编写一段代码，实现跳转到详情页面
        //params
        this.props.history.push(`/about/hot/detail/${id}/${title}`)
        //state
        //this.props.history.push(`/about/hot/detail`,{id:'4', title:'热门004'})
    }

    forward = () => {
        this.props.history.goForward()
    }

    back = () => {
        this.props.history.goBack()
    }

    go = () => {
        //前进一步
        this.props.history.go(1)
        //前进两步
        this.props.history.go(2)
        //后端一步
        this.props.history.go(-1)
        //后退两步
        this.props.history.go(-2)
    }
}


