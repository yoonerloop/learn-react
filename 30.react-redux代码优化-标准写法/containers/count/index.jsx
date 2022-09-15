import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button} from 'antd'
import 'antd/dist/antd.css'
import {
    addAction,
    reduceAction,
    addActionAsync
} from "../../redux/actions/count";

class Count extends Component {

    render() {
        return (
            <div>
                <Button type='primary' onClick={this.reduce}>-</Button>
                <span>{this.props.count}</span>
                <Button type='primary' onClick={this.add}>同步+1</Button>
                <Button type='primary' onClick={this.addAsync}>异步+2</Button>
            </div>
        );
    }

    reduce = () => {
        this.props.reduce(10)
    }

    add = () => {
        this.props.add(5)
    }

    addAsync = () => {
        this.props.addActionAsync(2, 500)
    }
}

const mapStateToProps = state => {
    return {count: state.c.count}
}

//mapDispatchToProps一般写法
// const mapDispatchToProps = dispatch => ({
//     add: number => dispatch(addAction(number)),
//     reduce: number => dispatch(reduceAction(number)),
//     addActionAsync: (number, time) => dispatch(addActionAsync(number, time))
// });

//mapDispatchToProps精简写法，react-redux可以自动调用dispatch完成分发
const mapDispatchToProps = {
    add: addAction,
    reduce: reduceAction,
    addActionAsync: addActionAsync
};

//参数1：映射状态
//参数2：映射状态的操作方法，如果没有状态操作可以省略改参数
export default connect(mapStateToProps, mapDispatchToProps)(Count)
