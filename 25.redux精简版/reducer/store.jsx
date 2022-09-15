/**
 * 该文件用于暴露一个store对象
 */
//引入createStore
import {createStore} from 'redux'
//引入服务的reducer
import reducer from "./reducer";

export default createStore(reducer)
