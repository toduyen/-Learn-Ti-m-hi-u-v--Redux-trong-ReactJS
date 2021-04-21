import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class FormData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            fTitle: '',
            fText: ''
        }
    }
    componentWillMount() {
        if(this.props.getEditData.giatri)
        {
            this.setState({
                id: this.props.getEditData.giatri.key,
                fTitle: this.props.getEditData.giatri.title,
                fText: this.props.getEditData.giatri.description
            })
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }

    buttonEdit = () => {
        if(this.state.id)
        {
            this.props.updateData( this.props.getEditData.giatri.key ,  this.state.fTitle , this.state.fText);
            this.props.closeForm();
        }
        else
        {
            var info = {};
            info.title = this.state.fTitle;
            info.description = this.state.fText;
            this.props.addData(info);
        }
    }
    
    render() { 
        return (
            <div>
                  <form action>
                  <div className="form-group">
                    <label htmlFor />
                    <input type="text" name="fTitle" onChange={(event)=>this.isChange(event)} defaultValue={this.props.getEditData.giatri.title}  className="form-control"  aria-describedby="helpId" placeholder="Nhập tiêu đề"/>
                    <small id="helpId" className="text-muted">Nhập tiêu đề</small>
                    <div className="form-floating">
                      <textarea className="form-control" onChange={(event)=>this.isChange(event)} defaultValue={this.props.getEditData.giatri.description} placeholder="Leave a comment here" name="fText" id="floatingTextarea2" style={{height: '100px'}} />
                      <label htmlFor="floatingTextarea2">Comments</label>
                    </div>
                    <small id="helpId" className="text-muted">Nhập nội dung</small>
                </div>
                <button type="reset" className="btn btn-primary w-100" onClick={()=>this.buttonEdit()}>SAVE</button>
                  </form>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        getEditData: state.getEditData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateData: (getId,getTitle,getDescription) => {
            dispatch({type:"UPDATE",getId,getTitle,getDescription})
        },
        addData: (getItem) => {
            dispatch({type:"ADD",getItem})
        },
        closeForm: () => {
            dispatch({type:"CHANGE_STATE_FROM_EDIT"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormData)