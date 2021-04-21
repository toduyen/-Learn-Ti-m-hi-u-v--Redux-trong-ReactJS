const aleartInitialState = false
const ReducerAleart = (state = aleartInitialState, action) => {
    switch (action.type) {
        case "ALEART_VIEW":
            return !state
        default:
            return state
    }
}
export default ReducerAleart;