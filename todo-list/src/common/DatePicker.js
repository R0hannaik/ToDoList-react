import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

class DatePicker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            date: props.value
        }
    };

    componentWillReceiveProps = props => this.setState({date: props.value}); 

    onChange = date => this.setState({date},()=>this.props.getDateChangeCallback(this.state.date))
    
    render() {
        return (
            <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}
            />
        )
    }
}

export default DatePicker
