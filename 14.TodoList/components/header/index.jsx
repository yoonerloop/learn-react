import React, {Component} from 'react';
import {nanoid} from "nanoid";
import './index.css'

export default class Header extends Component {

    render() {
        return (
            <div className={'header-wrapper'}>
                <input placeholder={'请输入任务名称，按回车键确认'}
                       type={'text'} onKeyDown={this.onKeyDown}/>
            </div>
        );
    }

    /**
     * 监听键盘事件，当为13的时候是回车键
     */
    onKeyDown = (event) => {
        if (event.keyCode === 13) {
            //过滤空数据
            if (event.target.value.trim() === '') {
                return
            }
            //生成对象，调用nanoid()生成ID
            let list = {
                id: nanoid(),
                name: event.target.value,
                done: false
            }
            this.props.addTodo(list)
            //输入框置空
            event.target.value = ''
        }
    }
}

