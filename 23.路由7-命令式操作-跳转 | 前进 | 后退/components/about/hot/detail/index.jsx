import React, {Component} from 'react';

export default class Detail extends Component {

    state = {
        list: [
            {id: '1', title: '哈哈1', 'content': '哈哈哈哈哈1'},
            {id: '2', title: '哈哈2', 'content': '哈哈哈哈哈2'},
            {id: '3', title: '哈哈3', 'content': '哈哈哈哈哈3'},
            {id: '4', title: '哈哈4', 'content': '哈哈哈哈哈4'},
        ]
    }

    render() {
        console.log(this.props.match.params)
        //3、参数接收
        const {id, title} = this.props.match.params
        let item = this.state.list.find(value => (value.id === id))
        console.log(this.props)
        return (
            <ul>
                <li>ID：{item.id}</li>
                <li>TITLE：{item.title}</li>
                <li>CONTENT：{item.content}</li>
            </ul>
        );
    }
}
