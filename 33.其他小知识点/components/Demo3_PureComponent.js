import React, {Component, PureComponent} from 'react';

/**
 * Component不合理的地方：
 * 1.只要执行setState（setState({})），即使不改变组件数据，组件也会重新render。
 * 2、当前组件重新render，就会自动重新render子组件====>效率低下
 *
 * 原因：
 * shouldComponentUpdate总是返回true
 *
 * 解决方法：
 * 1、shouldComponentUpdate
 * 2、使用PureComponent
 */
export default class Demo3PureComponent extends PureComponent {
//export default class Demo3PureComponent extends Component {

    state = {
        car: '奔驰'
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //判断更新逻辑
    }

    render() {
        const {car} = this.state
        return (
            <div style={{width: '500px', height: '200px', background: 'red'}}>
                <h3>我是父组件</h3><br/>
                <span>{car}</span>
                <button onClick={this.changeCar}>换车</button>
                <Child car={car}/>
            </div>
        );
    }

    changeCar = () => {
        this.setState({
            car: '迈巴赫'
        })
    }
}

class Child extends PureComponent {
//class Child extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //判断更新逻辑
    }

    render() {
        console.log(this.props)
        return (
            <div style={{width: '500px', height: '50px', background: 'gray'}}>
                <h3>我是子组件</h3>
                <br/>
                <span>获取父组件的数据：{this.props.car}</span>
            </div>
        );
    }
}
