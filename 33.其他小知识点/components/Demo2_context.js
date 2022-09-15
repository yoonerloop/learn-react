import React, {Component, createContext} from 'react';

//需要放在公共地方，创建context对象
const MyContext = createContext(undefined)

export default class Demo2Context extends Component {

    state = {
        name:'tom',
        age:20
    }

    render() {
        const {name,age} = this.state
        return (
            <div>
                <h1>Demo5Context----名称是：{name}</h1>
                <MyContext.Provider value={{name:name,age: age}}>
                    <A/>
                    <C/>
                </MyContext.Provider>
            </div>
        );
    }
}

 class A extends Component {
    render() {
        return (
            <div>
                AAAAAA
                <B/>
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div>
                BBBBBBBB
            </div>
        );
    }
}

// class C extends Component {
//
//     //必须先声明声明接收context
//     static contextType = MyContext
//
//     render() {
//         console.log(this.context)
//         return (
//             <div>
//                 CCCCCCC
//             </div>
//         );
//     }
// }

function C(){

    return (
        <div>
            哈哈哈哈
            <MyContext.Consumer>
                {
                    value => {
                        return `${value.name}----${value.age}`
                    }
                }
            </MyContext.Consumer>
        </div>
    )
}
