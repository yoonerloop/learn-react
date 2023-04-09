import React, {Component} from 'react';
import {Button} from 'antd'
import 'antd/dist/antd.css'
//用于获取状态
import store from "./reducer/store";

export default class App extends Component {

    componentDidMount() {
        //reducer不会触发页面变化，需要state来触发
        store.subscribe(() =>{
            this.setState(store.getState())
        })
    }

    render() {
        //获取reducer数据
        const {count} = store.getState()
        return (
            <div>
                <Button type='primary' onClick={this.reduce}>-</Button>
                <span>{count}</span>
                <Button type='primary' onClick={this.add}>+</Button>
            </div>
        );
    }

    reduce = () => {
        //通知reducer页面数据变化了
        store.dispatch({
            type: 'reduce',
            data: 1
        })
    }

    add = () => {
        //通知reducer页面数据变化了
        store.dispatch({
            type: 'add',
            data: 1
        })
    }
}
