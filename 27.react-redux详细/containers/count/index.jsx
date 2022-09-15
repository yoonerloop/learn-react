//引入UI组件
import CountUI from "../../components/count";
//引入connect用于连接UI组件和redux
import {connect} from "react-redux";
//引入action
import {
    addAction,
    reduceAction,
    addActionAsync
} from "../../reducer/actionCreators";

/**
 * 基础版
 */
//使用connect创建并暴露一个count的容器组件
//export default connect()(CountUI)

/**
 * 升级版
 */
// //a函数的返回的对象作为状态传递给了UI组件，相当于<CountUI number={800}/>----->状态
// function a(state) {
//     return {
//         count: state.count
//     }
// }
//
// //操作a函数----->操作状态的方法
// function b(dispatch) {
//     return {
//         add: (number) => {
//             //通知redux执行
//             dispatch(addAction(number))
//         },
//         reduce: (number) => {
//             //通知redux执行
//             dispatch(reduceAction(number))
//         }
//     }
// }
//
//export default connect(a, b)(CountUI)

/**
 * 标准版
 */

/**
 * 1、mapStateToProps函数返回一个对象；
 * 2、返回的key作为传递给UI组件的props的key，value作为UI组件props的value
 * 3、mapStateToProps用于传递状态
 */
//----->状态
function mapStateToProps(state) {
    return {
        count: state.count
    }
}

/**
 * 1、mapDispatchToProps函数返回一个对象；
 * 2、返回的key作为传递给UI组件的props的key，value作为UI组件props的value
 * 3、mapDispatchToProps用于传递状态的方法
 */
//----->操作状态的方法
function mapDispatchToProps(dispatch) {
    return {
        add: number => dispatch(addAction(number)),
        reduce: number => dispatch(reduceAction(number)),
        addActionAsync: (number, time) => dispatch(addActionAsync(number, time))
    }
}

//使用connect创建并暴露一个count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
