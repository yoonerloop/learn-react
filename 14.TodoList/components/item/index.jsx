import React, {Component} from 'react';
import './index.css'

export default class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mouse: false
        }
    }

    render() {
        //解构数据
        const {mouse} = this.state
        const {id, name, done} = this.props
        return (
            //onMouseEnter、onMouseLeave监听鼠标点击的事件，label表示扩大checkbox的点击范围
            <li className={'item'}
                style={{background: mouse ? '#ddd' : 'white'}}
                onMouseEnter={() => this.onMouseEvent(true)}
                onMouseLeave={() => this.onMouseEvent(false)}>
                <label>
                    <input type={'checkbox'} checked={done}
                           onChange={(event) => this.onCheckChange(event, id)}/>
                    <span>{name}</span>
                </label>
                <button className={'item-button'} style={{display: mouse ? 'block' : 'none'}}
                        onClick={() => this.onDeleteClick(id)}>删除
                </button>
            </li>
        );
    }

    /**
     * 鼠标移动事件
     * @param flag
     */
    onMouseEvent = (flag) => {
        this.setState({
            mouse: flag
        })
    }

    /**
     * 选择框点击时间
     *
     * @param event
     * @param id
     */
    onCheckChange = (event, id) => {
        this.props.updateTodo(id, event.target.checked)
    }

    /**
     * 删除按钮事件
     */
    onDeleteClick = (id) => {
        //注意这里有个window，不写会报错
        if (window.confirm('确定删除吗？')) {
            this.props.deleteTodo(id)
        }
    }
}
