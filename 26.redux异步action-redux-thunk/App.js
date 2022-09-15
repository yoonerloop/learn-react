import React, {Component} from 'react';
import {Button} from 'antd'
import 'antd/dist/antd.css'
//用于获取状态
import store from "./reducer/store";
import {
    addAction,
    addActionAsync,
    reduceAction
} from "./reducer/actionCreators";

export default class App extends Component {

    componentDidMount() {
        //reducer不会触发页面变化，需要state来触发
        store.subscribe(() => {
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
                <Button type='primary' onClick={this.add}>同步+1</Button>
                <Button type='primary' onClick={this.addAsync}>异步+2</Button>
            </div>
        );
    }

    reduce = () => {
        //通知reducer页面数据变化了
        store.dispatch(reduceAction(1))
    }

    add = () => {
        //通知reducer页面数据变化了
        store.dispatch(addAction(1))
    }

    addAsync = () => {
        store.dispatch(addActionAsync(2,500))
    }
}
