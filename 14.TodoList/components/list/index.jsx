import React, {Component} from 'react';
import Item from "../item";

export default class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        //不能这么写，错误的
        //const {todoList} = this.props.todoList
        const {todoList, updateTodo, deleteTodo} = this.props
        return (
            <ul>
                {
                    todoList.map(item => {
                        return (
                            //{...item}表示解构数据，即将item的内容挂载在子类Item的props节点上
                            <Item key={item.id} {...item} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                        )
                    })
                }
            </ul>
        );
    }
}

