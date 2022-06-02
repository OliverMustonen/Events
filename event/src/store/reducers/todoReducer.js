import actiontypes from "../actiontypes";

const initState = {
    todo: null,
}

const todoReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().todo.set:
            return {
                ...state,
                todo: action.payload
            }

        case actiontypes().todo.clear:
            return {
                ...state,
                todo: null
            }

        default:
            return state
    }
}

export default todoReducer;