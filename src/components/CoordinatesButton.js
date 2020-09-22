// Code CoordinatesButton Component Here


import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {
    click = (event) => {
        const clickArr = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(clickArr)
    }

    render(){
        return (
         <button onClick={this.click}>click me</button>
        )
    }
}