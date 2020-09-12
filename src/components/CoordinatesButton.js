// Code CoordinatesButton Component Here
import React, {Component} from "react";

export default class CoordinatesButton extends Component{
    createArr = (e) => {
        const arr = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(arr)
    }
    render(){
        return(
            <button onClick={this.createArr}>Click</button>
        )
    }
}