import { FirebaseConn } from '../Firebaseconnection/FirebaseConn';
const updateInitialState = {}
const ReducerUpdate = (state = updateInitialState, action) => {
    switch (action.type) {
        case "UPDATE":
            let data = FirebaseConn.database().ref('Node1');
            data.child(action.getId).update({
                title : action.getTitle,
                description : action.getDescription
            })
            return state
        default:
            return state
    }
}
export default ReducerUpdate;