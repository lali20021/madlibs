import React, { Component } from 'react';
// import Input from './Input.js'
import './App.css';

class Output extends Component {


    render(){
        const { noun, verb } =this.props.appForm
        return (
            <div>
                <p> I {verb} with a {noun} </p>
            </div>
        );
    }
}

export default Output;
