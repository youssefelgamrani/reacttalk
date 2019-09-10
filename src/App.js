import React from 'react';
import './App.css';
import { Component } from 'react'

function SubmitButton() {
  return (
    <input type="submit"/>
  )
}

function LoginInput(props) {
  return (
   <input type="text" value={props.value} onChange={props.onChange}/>
  )
}


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {inputValue : "input value"}

    this.handleForm = this.handleForm.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  handleInput(event){
    this.setState({inputValue : event.target.value})
  }


  handleForm(event){
     alert("An input has been submited"+ this.state.inputValue);
     event.preventDefault();
  }
  

  render() {
    return (
      <div id="root">
         <form onSubmit={this.handleForm}>
           <LoginInput value={this.state.inputValue} onChange={this.handleInput}/>
           {this.state.inputValue}
           <SubmitButton/>
         </form>
      </div>
    )
  }
}
