import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
class AleartNoti extends Component {

    handleDismis = () => {
        this.props.hienthi();
    }

    hienthi = () => {
        if(this.props.thongbao === true)
        {
            return(
                <AlertContainer>
                    <Alert type="info" timeout={4000} onDismiss={()=>this.handleDismis()}>
                        {this.props.noidung.cont}
                    </Alert>
                </AlertContainer>
            )
        }
    }
    render() { 
        console.log(this.props.noidung.cont);
        return (
            <div>
                {this.hienthi()}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        thongbao: state.thongbao,
        noidung: state.noidung
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hienthi: () => {
            dispatch({type:"ALEART_VIEW"})
        },
        content: (newcon) => {
            dispatch({type:"INSERT_CONTENT",newcon})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AleartNoti)