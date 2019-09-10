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


export default class ShowDateState extends Component {

    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }

    render() {
        return (
            <div>
                <ShowDate name={"devTeam"} date={this.state.date}/>
            </div>
        )
    }
}
