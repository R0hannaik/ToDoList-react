import React, { Component } from 'react';
import DatePicker from '../common/DatePicker';

class EditTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: props.editForm 
        };
    };

    componentWillReceiveProps = props =>{
        this.setState({formData: props.editForm});
    }
    
    getDateChangeCallback = data => {
        let newFormData = this.state.formData;
        newFormData.date = data;
        this.setState({formData: newFormData})
    };

    handleInputChange = event => {
        let newFormData = this.state.formData;
        newFormData.task = event.target.value;
        this.setState({formData: newFormData})
    }

    handleClick = () => {
        this.props.editFormCallback(this.state.formData);
    };

    render() {
        return (
            <div>
                <input type='text' value={this.state.formData.task} onChange={this.handleInputChange}/>
                <DatePicker  getDateChangeCallback={this.getDateChangeCallback} value={this.state.formData.date}/>
                <button onClick={this.handleClick}>Save</button>      
            </div>
        )
    }
}

export default EditTask
