const stateEditInitialState = false
const ReducerStateEdit = (state = stateEditInitialState, action) => {
    switch (action.type) {
        case "CHANGE_STATE_FROM_EDIT":
            return !state
        default:
            return state
    }
}
export default ReducerStateEdit