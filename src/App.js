import React, { Component } from 'react';
import { connect } from 'react-redux';
import AleartNoti from './components/AlertNotifier/AleartNoti';
import DataView from './components/DataView/DataView';
import FormData from './components/FormData/FormData';
import Nav from './components/Nav/Nav';
class App extends Component {
  showForm = () => {
    if(this.props.stateEdit === true)
    {
      return(<FormData/>)
    }
  }
  render() { 
    return (
      <div>
          <div className="container-fluid">
            <div className="row">
              <AleartNoti/>
              <Nav/>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-8">
                <DataView/>
              </div>
              <div className="col-4">
              {this.showForm()}
              </div>
            </div>
          </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stateEdit: state.stateEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStateValue: () => {
      dispatch({type:"CHANGE_STATE_FROM_EDIT"})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)