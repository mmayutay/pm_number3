import React, {Component} from 'react';

class InputCredentials extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            fName: '' ,
            lName: '',
            Address: '',
            Email: '',
            PhoneNumber: '',
            displaySituation: ''
        }
    }
    firstNameHandler(e){
        this.setState({fName: (e.target.value)})
    }
    lastNameHandler(e){
        this.setState({lName: (e.target.value)})
    }
    addressHandler(e){
        this.setState({Address: (e.target.value)})
    }
    emailHandler(e){
        this.setState({Email: (e.target.value)})
    }
    phoneNumberHandler(e){
        this.setState({PhoneNumber: (e.target.value)})
    }
    eventMaker(e){
        if(this.state.fName === '' || this.state.lName === '' ||
        this.state.Address === '' || this.state.Email === '' || 
        this.state.PhoneNumber == ''){
            alert("You are lacking one of the field to fill!")
        }else{
            this.setState({displaySituation: this.state.fName + " " + this.state.lName  + " from " + this.state.Address})
        }
    }

    render(){
        return(
            <div>
                <input type="text" placeholder="Enter your first name" onChange={(e) => this.firstNameHandler(e)}></input>
                <input type="text" placeholder="Enter your last name" onChange={(e) => this.lastNameHandler(e)}></input>
                <input type="text" placeholder="Address" onChange={(e) => this.addressHandler(e)}></input>
                <input type="text" placeholder="E-mail" onChange={(e) => this.emailHandler(e)}></input>
                <input type="text" placeholder="Phone Number" onChange={(e) => this.phoneNumberHandler(e)}></input>
                <button onClick={}></button>
            </div>
        )
    }
}