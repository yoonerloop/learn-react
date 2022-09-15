import React, {Component} from 'react';
import {Button} from "antd";

export default class Demo1 extends Component {
    state = {
        count: 0
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <Button type={'primary'} onClick={this.add}>点我+1</Button>
            </div>
        );
    }

    /**
     * 对象式的setState
     */
    // add = () => {
    //     const {count} = this.state
    //     this.setState({
    //         count: count + 1
    //     })
    // }

    // add = () => {
    //     const {count} = this.state
    //     this.setState({
    //         count: count + 1
    //     },() => {
    //         //在这里获取结果，否则可能获取不到更新的数据
    //         console.log(this.state.count)
    //     })
    // }

    /**
     * 函数式的状态回调
     */
        // add = () => {
        //     //state表示原来的参数，props可选，可以删掉
        //     this.setState((preState, props) => {
        //         return {
        //             count: preState.count + 1
        //         }
        //     })
        // }

    add = () => {
        this.setState(preState => ({count: preState.count + 1}))
    }
}
