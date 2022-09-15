import React, {Component} from 'react';

export default class Demo5ErrorBoundary extends Component {

    state = {
        hasError: ''
    }

    //当子组件发生异常的时候，会触发getDerivedStateFromError，并且携带错误信息
    //适用于生产环境，开发环境不适应
    //只能捕获声明周期里面产生的错误，最多的主要是render，自己发生的，函数里面的，定时器，等发生的异常不能捕获
    static getDerivedStateFromError(error) {
        console.log(error, "error")
        return {
            hasError: error
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('渲染组件出错了，统计错误次数，返回给服务端，进行bug的修改')
    }

    render() {
        return (
            <div>
                {this.state.hasError ? <h2>当前网络不行，稍后再试</h2> : <Child/>}
            </div>
        );
    }
}

class Child extends React.Component {

    state = {
        student: '哈哈'

    }

    render() {
        return (
            <div>
                {
                    this.state.student.map((item) => {
                        //student不是数组发生异常，生产环境触发getDerivedStateFromError，测试环境还是报错
                    })
                }
            </div>

        )
    }
}
