import countReducer from "../reducers/count";
import personReducer from "../reducers/person";
import {combineReducers} from "redux";

//所有的reducer保存为一个reducer
export default combineReducers({
    c: countReducer, //count可以根据需求任意命名，比如：c，haha,shu等等
    p: personReducer
})
