import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

/**
 * 一般组件
 */
class Header extends Component {

    render() {
        return (
            <div>
                React Demo
                <button onClick={() => this.forward()}>前进</button>
                <button onClick={() => this.back()}>后退</button>
            </div>
        );
    }

    forward = () => {
        this.props.history.goForward()
    }

    back = () => {
        this.props.history.goBack()
    }
}
//暴露的是withRouter暴露组件的返回值
export default withRouter(Header)
