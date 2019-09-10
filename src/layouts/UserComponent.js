import React, { Component } from 'react'

export default class UserComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <h1> Users </h1>
        )
    }
}
