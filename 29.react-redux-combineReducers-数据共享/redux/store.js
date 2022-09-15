import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from "redux-thunk";
import countReducer from "./count/reducer";
import personReducer from "./person/reducer";

//所有的reducer保存为一个reducer
const allReducer = combineReducers({
    c: countReducer, //count可以根据需求任意命名，比如：c，haha,shu等等
    p: personReducer
})

export default createStore(allReducer, applyMiddleware(thunk))
