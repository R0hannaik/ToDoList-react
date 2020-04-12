import React, { Component } from 'react';
import DatePicker from '../common/DatePicker';
import { v4 as uuidv4 } from 'uuid';

class TodoInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            task: '',
            date: '',
            status: false,
            uid: uuidv4()
        }
    }
    
    handleInputChange =  event => this.setState({task: event.target.value});

    handleClick = ()=> {
        const task = this.state.task;
        const date = this.state.date;
        const status = this.state.status;
        const uid = this.state.uid;
        this.setState({task: '', date:'', uid: uuidv4()},()=>{
            this.props.getAddTaskCallback({task: task, date: date, status: status, uid: uid});
        })
    }

    getDateChangeCallback = data => this.setState({date: data})

    render() {
        return (
            <div>
                <input type='text' value={this.state.task} onChange={this.handleInputChange}/>
                <DatePicker getDateChangeCallback={this.getDateChangeCallback} value={this.state.date}/>
                <button onClick={this.handleClick}>Save</button>      
            </div>
        )
    }
}

export default TodoInput;
