import {FirebaseConn} from '../Firebaseconnection/FirebaseConn';
const deleteInitialState = {}
const ReducerDelete = (state = deleteInitialState, action) => {
    switch (action.type) {
        case "DELETE":
            let del = FirebaseConn.database().ref('Node1');
            del.child(action.key).remove();
            return state
        default:
            return state
    }
}
export default ReducerDelete;