import React, {Component} from 'react';
import './index.css'

export default class Footer extends Component {

    render() {
        const {todoList} = this.props
        //注意reduce的如何使用，怎么过滤数据
        const doneCount = todoList.reduce((previousValue, currentValue) => {
            return previousValue + (currentValue.done ? 1 : 0)
        }, 0)
        const total = todoList.length
        return (
            <div className={'footer-wrapper'}>
                <label>
                    <input type='checkbox' className={'footer-input'}
                           checked={doneCount === total && total !== 0}
                           onChange={this.onFooterCheckAll}/>
                    <span>已完成{doneCount}/全部{total}</span>
                    <button style={{float: 'right'}} onClick={this.clearClickAll}>清除已完成任务</button>
                </label>
            </div>
        );
    }

    /**
     * 调用父类的方法传递数据
     * @param event
     */
    onFooterCheckAll = (event) => {
        this.props.onFooterCheckAll(event.target.checked)
    }

    /**
     * 调用父类的方法传递数据
     * @param event
     */
    clearClickAll = () => {
        this.props.clearClick()
    }
}
