import React, { Component } from 'react'

export default class UpdateState extends Component {
    constructor(props){
        super(props);
        this.state={count : 0};
        this.count = this.count.bind(this);
    }

    count(){
        this.state.count = this.state.count + 1;
    }

    countBySetState = () => {
        this.setState({count: this.state.count+1});
    }
    
    render() {
        return (
            <div>
                <button onClick={this.count}>Update using this.state</button>
                <button onClick={this.countBySetState}>Update using this.setState()</button>
                {this.state.count}
            </div>
        )
    }
}
