import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class Nav extends Component {
    btnAddNow = (event) => {
      event.preventDefault();
      this.props.showForm();
      this.props.getEditData.giatri = '';
    }
    render() { 
        return (
            <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: 'black'}}>
            <a className="navbar-brand" href="/">Hello world</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="/" onClick={(event)=>this.btnAddNow(event)}>Home <span className="sr-only">ADD USERNAME</span></a>
                </li>
              </ul>
            </div>
          </nav> 
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stateEdit: state.stateEdit,
    getEditData: state.getEditData
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showForm: () => {
      dispatch({type: "CHANGE_STATE_FROM_EDIT"})
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)