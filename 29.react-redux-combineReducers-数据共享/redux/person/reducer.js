import {ADD_TO_LIST} from "./typeCreators";

const defaultState = {
    pList: [
        {
            id: 1,
            name: '张三'
        }
    ]
}

const personReducer = (preState = defaultState, action) => {
    const {type, data} = action
    console.log(action)
    switch (type) {
        case ADD_TO_LIST:
            return {
                pList: [data, ...preState.pList]
            }
    }
    return preState
}

export default personReducer
