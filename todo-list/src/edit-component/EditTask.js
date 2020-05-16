import React, { Component } from 'react';
import DatePicker from '../common/DatePicker';
import './EditTask.scss'

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
            <div className="EditTask">
                <div className="header">
                    <div>
                        <h1>
                            Edit Your Task
                        </h1>
                    </div>
                </div>
                <div className="EditTask-component">
                    <input type='text' value={this.state.formData.task} onChange={this.handleInputChange}/>
                </div>
                <div className="EditTask-component">
                    <DatePicker  getDateChangeCallback={this.getDateChangeCallback} value={this.state.formData.date}/>
                </div>
                <div className="EditTask-component">
                    <button name="save" onClick={this.handleClick}>Save</button>      
                </div>
            </div>
        )
    }
}

export default EditTask
