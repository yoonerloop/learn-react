import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Input} from "antd";
import {nanoid} from "nanoid";
import {addToListAction} from "../../redux/person/actionCreators";

class Person extends Component {
    render() {
        return (
            <div>
                <Input ref={(e) => this.input = e} type={'text'} style={{width: '300px'}}/>
                <Button type={'primary'} onClick={this.addToList}>添加</Button>
                <p>获取另一个组件count的数据：{this.props.count}</p>
                <ul>
                    {
                        this.props.list.map(item => {
                            return (
                                <li key={item.id}>{item.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

    addToList = () => {
        this.props.addToList({
            name: this.input.input.value,
            id: nanoid()
        })
    }
}

const mapStateToProps = state => {
    return {
        list: state.p.pList,
        count:state.c.count
    }
}

const mapDispatchToProps = {
    addToList: addToListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Person)

