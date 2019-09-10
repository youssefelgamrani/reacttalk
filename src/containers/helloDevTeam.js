import React, { Component } from 'react'
import './App.css';

function SubmitButton(props) {
    return (
        <input type="submit" class={props.buttonStyle}/>
    )
}

export default class HelloDevTeam extends Component {
     statut = "inactif";

    constructor(props){
       super(props);
    }
    
    handleButtonSubmit=()=> {
       this.statut = "actif";
    }

    render() {

        return (
            <div>
               <SubmitButton buttonStyle={this.statut} handleButtonSubmit={this.handleButtonSubmit}/>
            </div>
        )
    }
}
