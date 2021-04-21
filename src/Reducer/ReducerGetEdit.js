const getEditInitialState = {giatri: ''}
const ReducerGetEdit = (state = getEditInitialState, action) => {
    switch (action.type) {
        case "GET_EDIT":
            return{...state,giatri:action.getItem}
        default:
            return state
    }
}
export default ReducerGetEdit;