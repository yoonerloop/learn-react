import React, {Component} from 'react';
import qs from 'query-string'

export default class Detail extends Component {

    state = {
        list: [
            {id: '1', title: '哈哈1', 'content': '哈哈哈哈哈1'},
            {id: '2', title: '哈哈2', 'content': '哈哈哈哈哈2'},
            {id: '3', title: '哈哈3', 'content': '哈哈哈哈哈3'},
        ]
    }

    render() {
        //3、参数接收
        const {search} = this.props.location
        const {id, title} = qs.parse(search.slice(1))
        let item = this.state.list.find(value => (value.id === id))

        return (
            <ul>
                <li>ID：{item.id}</li>
                <li>TITLE：{item.title}</li>
                <li>CONTENT：{item.content}</li>
            </ul>
        );
    }
}
