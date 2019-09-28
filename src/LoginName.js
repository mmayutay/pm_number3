import React, { Component } from 'react';
import Dashboard from './Dashboard';

class LoginName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valuesName: "Raymond",
            valuesPassword: "gwapo101",
            name: '',
            password: '',
            situation: '',
            boolean: false
        }
    }
    name(e) {
        this.setState({ name: e.target.value })
    }
    password(e) {
        this.setState({ password: e.target.value })
    }
    situation(e) {
        if (this.state.name === this.state.valuesName && this.state.password === this.state.valuesPassword) {
            this.setState({ boolean: true })
        } else {
            alert("Invalid credentials!")
        }
    }
    render() {
        if (this.state.boolean === false) {
            return (
                <div>
                    <h1>Simple Log-in Form</h1>
                    <h3>Name:</h3>
                    <input type="text" placeholder="Enter Your Name" onChange={(e) => this.name(e)}></input>
                    <h3>Password:</h3>
                    <input type="password" placeholder="Enter Your Password" onChange={(e) => this.password(e)}></input>
                    <br />
                    <button onClick={(e) => this.situation(e)}>Click</button>
                    <center>
                        <h1>{this.state.situation}</h1>
                    </center>
                </div>
            )
        } if (this.state.boolean === true) {
            return (
                <div>
                    <Dashboard name={this.state.name}/>
                </div>
            )
        }
    }
}
export default LoginName;