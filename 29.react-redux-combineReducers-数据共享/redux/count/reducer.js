import {ADD, REDUCE} from "./typeCreators";

const defaultState = {
    count: 0
}

const countReducer = (preState = defaultState, action) => {
    const {type, data} = action
    console.log('redux:', type, data)
    console.log('preState:', preState)
    switch (type) {
        case ADD:
            return {
                count: preState.count + data
            }
        case REDUCE:
            return {
                count: preState.count - data
            }
        default:
            return defaultState
    }
}

export default countReducer
