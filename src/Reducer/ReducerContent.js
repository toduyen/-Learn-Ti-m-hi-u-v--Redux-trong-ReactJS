const contentInitialState = {cont: ''}
const ReducerContent = (state = contentInitialState, action) => {
    switch (action.type) {
        case "INSERT_CONTENT":
            return{...state,cont:action.newcon}
        default:
            return state
    }
}
export default ReducerContent;