import RedcuerAdd from '../Reducer/ReducerAdd';
import ReducerDelete from '../Reducer/ReducerDelete';
import ReducerGetEdit from '../Reducer/ReducerGetEdit';
import ReducerStateEdit from '../Reducer/ReducerStateEdit';
import ReducerUpdate from '../Reducer/ReducerUpdate';
import ReducerAleart from '../Reducer/ReducerAleart';
import ReducerContent from '../Reducer/ReducerContent';
var redux = require('redux');

let allCombine = redux.combineReducers({
    stateEdit : ReducerStateEdit,
    getEditData : ReducerGetEdit,
    updateEditData : ReducerUpdate,
    ReducerDelete: ReducerDelete,
    addDataInshow : RedcuerAdd,
    thongbao : ReducerAleart,
    noidung : ReducerContent
})
let store = redux.createStore(allCombine);
export default store;