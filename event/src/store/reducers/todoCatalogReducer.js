import actiontypes from "../actiontypes";

const initState = null

const todoCatalogReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().todoCatalog.set:
            state = action.payload
            return state

        default:
            return state
    }
}

export default todoCatalogReducer;