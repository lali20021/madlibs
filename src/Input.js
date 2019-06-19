import React, { Component } from 'react';
// import Output from './Output.js'
import './App.css';

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            form : {
                noun: '',
                verb: ''
            }
        }
    }
    handleChange = () => {
        let text1 = this.refs.text1.value
        let text2 = this.refs.text2.value
        this.props.updateApp({noun: text1, verb: text2})
    }
    handleChange2 = (e) => {
        this.setState({verb: this.refs.text1.value})
    }

    render(){
        return (
            <div>
                <input type="text" ref="text1" placeholder="noun" onChange={this.handleChange2}/>
                <br />
                <br />
                <input type="text" ref="text2" placeholder='verb' onChange={this.handleChange2}/>
                <input onClick = {this.handleChange} type="submit" value="Submit" />
            </div>
        );
    }
}
// <input value={this.props.addNoun}
//     onChange={this.handleChangeNoun}
// />
//
// <input value={this.props.addVerb}
//     onChange={this.handleChangeVerb}
// />
export default Input;
