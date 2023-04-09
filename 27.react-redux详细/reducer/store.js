import {createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import reducer from "./reducer";

/**
 * 该文件用于暴露一个store对象
 */
export default createStore(reducer, applyMiddleware(thunk))
