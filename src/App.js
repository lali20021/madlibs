import React, { Component } from 'react';
import Input from './Input.js'
import Output from './Output'
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            form : {
                noun: '',
                verb: ''
            }
        }
    }
    updateForm = (obj) =>{
        this.setState({form: obj})
    }

    render(){
        return (
            <div>
                <Output
                    appForm={this.state.form}
                />
                <Input
                    updateApp={this.updateForm}
                />
            </div>
        );
    }
}

export default App;
