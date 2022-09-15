import React, {Component} from 'react';
import PubSub from 'pubsub-js'

export default class Person2 extends Component {

    state = {
        data: '',
        msg: ''
    }

    constructor(props) {
        super(props);
        //订阅数据
        PubSub.subscribe('Person-Data', (msg, data) => {
            this.setState({
                data, msg
            })
        })
    }

    render() {
        return (
            <div>
                <p>接收到的数据：{JSON.stringify(this.state.data)}</p>
                <p>接收的key：{JSON.stringify(this.state.msg)}</p>
            </div>
        );
    }
}
