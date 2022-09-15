import React, {Component} from 'react';
import PubSub from 'pubsub-js'

export default class Person1 extends Component {

    render() {
        return (
            <div>
                <p>{JSON.stringify(data)}</p>
                <button onClick={this.publicData}>发布数据</button>
            </div>
        );
    }

    /**
     * 发布数据
     */
    publicData = () => {
        console.log('Person1-----发布数据')
        PubSub.publish('Person-Data', data)
    }
}

const data = {
    person: 'person1--------',
    time: new Date().getTime()
}
