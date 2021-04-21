import React, { Component } from 'react';
import { connect } from 'react-redux';
class Item extends Component {
  editFormView = () => {
    this.props.hienthiForm();
    this.props.getDataEdit(this.props.dataedit);
  }
  deleteFormView = () => {
    this.props.deleteData(this.props.i);
    this.props.hienthi();
    this.props.content('Đã xóa thành công');
  }
    render() { 
        return (
        <div className="accordion-item">
          <h2 className="accordion-header" id={"headingOne"+this.props.i}>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne"+this.props.i} aria-expanded="true" aria-controls="collapseOne">
              {this.props.tieude}
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={()=>this.editFormView()}>EDIT</button>
                <button type="button" className="btn btn-dark" onClick={()=>this.deleteFormView()}>DELETE</button>
              </div>
            </button>
          </h2>
          <div id={"collapseOne"+this.props.i} className="accordion-collapse collapse" aria-labelledby={"headingOne"+this.props.i} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>{this.props.mota}</strong>
            </div>
          </div>
        </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stateEdit: state.stateEdit,
    thongbao: state.thongbao
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hienthiForm: () => {
      dispatch({type:"CHANGE_STATE_FROM_EDIT"})
    },
    getDataEdit: (getItem) => {
      dispatch({type:"GET_EDIT",getItem})
    },
    deleteData: (key) => {
      dispatch({type:"DELETE",key})
    },
    hienthi: () => {
      dispatch({type:"ALEART_VIEW"})
    },
    content: (newcon) => {
      dispatch({type:"INSERT_CONTENT",newcon})
     }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Item)