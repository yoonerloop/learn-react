const defaultState = {
    count: 0
}

const reducer = (preState = defaultState, action) => {
    const {type, data} = action
    console.log('redux:', type, data)
    console.log('preState:', preState)
    switch (type) {
        case 'add':
            return {
                count: preState.count + data
            }
        case 'reduce':
            return {
                count: preState.count - data
            }
        default:
            return defaultState
    }
}

export default reducer
