export const defaultInitial = {
    name: '未知'
}

// 注意参数需要一一对应，dispatch的参数在action，而不是state
export default function appReducer(state = defaultInitial, action) {
    const {type} = action;
    console.log(state)
    switch (type) {
        case "INIT":
            return defaultInitial;
        case "ADD":
            return {name: action.name + new Date()}
        default:
            return state;
    }
}