import React, { Component } from 'react';
import DateDisplay from './DateDisplay';
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>ToDo List</h1>
                <DateDisplay/>
            </div>
        )
    }
}

export default Header
