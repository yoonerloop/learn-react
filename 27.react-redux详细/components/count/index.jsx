import React, {Component} from 'react';
import {Button} from 'antd'
import 'antd/dist/antd.css'

export default class CountUI extends Component {

    render() {
        console.log('UI组件接收到的props：', this.props)
        return (
            <div>
                <Button type='primary' onClick={this.reduce}>-</Button>
                <span>{this.props.count}</span>
                <Button type='primary' onClick={this.add}>同步+1</Button>
                <Button type='primary' onClick={this.addAsync}>异步+2</Button>
            </div>
        );
    }

    reduce = () => {
        this.props.reduce(10)
    }

    add = () => {
        this.props.add(5)
    }

    addAsync = () => {
        this.props.addActionAsync(2, 500)
    }
}
