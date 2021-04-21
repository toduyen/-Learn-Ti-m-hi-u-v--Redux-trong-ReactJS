import { FirebaseConn } from '../Firebaseconnection/FirebaseConn';
const addInitialState = {}
const RedcuerAdd = (state = addInitialState, action) => {
    switch (action.type) {
        case "ADD":
            let data = FirebaseConn.database().ref('Node1');
            data.push(action.getItem);
            return state
        default:
            return state
    }
}
export default RedcuerAdd;