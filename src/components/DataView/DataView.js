import React, { Component } from 'react';
import Item from '../DataRitel/Item';
import {FirebaseConn} from '../../Firebaseconnection/FirebaseConn';
class DataView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }
    componentWillMount() {
        let dataView = FirebaseConn.database().ref('Node1');
        dataView.on('value',(notes) => {
            var arrayData = [];
            notes.forEach((element) => {
                const key = element.key;
                const title = element.val().title;
                const description = element.val().description;
                arrayData.push({
                    key : key,
                    title : title,
                    description : description
                })
            });
            this.setState({
                dataFirebase : arrayData
            });
        })
    }
    showDaas = () => {
        if(!!this.state.dataFirebase)
        {
            return this.state.dataFirebase.map((value , key) => {
                return <Item key={key} i={value.key} tieude={value.title} mota={value.description} dataedit={value}/>
            })
        }
    }
    render() { 
        return (
            <div className="accordion accordion-flush" id="accordionFlushExample">
                {this.showDaas()}
            </div>
        );
    }
}
 
export default DataView;