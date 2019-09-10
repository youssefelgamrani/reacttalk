import React, { Component } from 'react'

function ShowDate(props) {
    return ( 
      <div>
         <h1>
            Hello {props.name}
        </h1>
        <h2>
            It is {props.date.toLocaleTimeString()}.
        </h2>
      </div>  
    )
}


export default class ShowDateProps extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <ShowDate name={"devTeam"} date={new Date()}/>
            </div>
        )
    }
}
