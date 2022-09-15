import {ADD, REDUCE} from "../constant/count";
import store from "../store";

/**
 * 创建减的action
 */
export const reduceAction = (data) => (
    {
        type: REDUCE,
        data
    }
)

/**
 * 同步加的action：返回的是object
 */
export const addAction = (data) => (
    {
        type: ADD,
        data
    }
)

/**
 * 异步加的action：返回的是函数，这种方式会报错，根据提示，需要用到redux-thunk
 */
// export const addActionAsync = (data, time) => {
//     return ()=>{
//         setTimeout(()=>{
//             store.dispatch(addAction(data))
//         },time)
//     }
// }

/**
 * 简化版
 */
export const addActionAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            //异步任务一般在函数内都会调用同步action
            dispatch(addAction(data))
        }, time)
    }
}
