import React, {Component} from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import List from "./components/list";

import './App.css'

export default class App extends Component {

    //默认数据
    state = {
        todoList: [
            {
                id: '001',
                name: '吃饭',
                done: false
            },
            {
                id: '002',
                name: '睡觉',
                done: true
            }
        ]
    }

    render() {
        const {todoList} = this.state
        return (
            <div className={'todo-wrapper'}>
                {/*子组件Header向父组件传递数据，定义addTodo方法，子类this.props.addTodo()即可以调用父类的方法传递*/}
                <Header addTodo={this.addTodo}/>
                <List todoList={todoList} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                <Footer todoList={todoList} onFooterCheckAll={this.onFooterCheckAll} clearClick={this.clearClickAll}/>
            </div>
        );
    }

    /**
     * 用户添加一个todo添加的对象是一个todo的对象
     * @param todoObj
     */
    addTodo = (todoObj) => {
        //获取源todo
        const {todoList} = this.state
        //追加一个todo
        const newTodo = [todoObj, ...todoList]
        //更新状态
        this.setState({
            todoList: newTodo
        })
    }

    /**
     * 用于更新一个todo
     * @param id
     * @param done
     */
    updateTodo = (id, done) => {
        const {todoList} = this.state
        let list = todoList.map((item) => {
            if (item.id === id) {
                return {...item, done}
            } else {
                return item
            }
        })
        this.setState({
            todoList: list
        })
    }

    /**
     * 删除按钮事件
     */
    deleteTodo = (id) => {
        const {todoList} = this.state
        const list = todoList.filter((item) => {
            return item.id !== id
        })
        this.setState({
            todoList: list
        })
    }

    /**
     * 全部选中
     */
    onFooterCheckAll = (done) => {
        const {todoList} = this.state
        const list = todoList.map(item => {
            return {...item, done}
        })
        this.setState({
            todoList: list
        })
    }

    /**
     * 清空
     */
    clearClickAll = () => {
        const {todoList} = this.state
        const list = todoList.filter(item => {
            return !item.done
        })
        this.setState({
            todoList: list
        })
    }
}
