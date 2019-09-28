import React, { Component } from 'react';
import './App.css';

class Dashboard extends Component{
    render() {
        return (
            <div className="App"><br/><br/><br/>
                <h1>Hello {this.props.name}! Welcome to React.js</h1>
            </div>
        );
    }
}


export default Dashboard;