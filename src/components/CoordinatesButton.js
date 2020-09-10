// Code CoordinatesButton Component Here
import React, { Component } from 'react';


export default class CoordinatesButton extends React.Component {
   
     clickResult = event => {
         const coorinatresArray = [event.clientX, event.clientY];
         this.props.onReceiveCoordinates(coorinatresArray)
    }


    render() {
        return(
            <button onClick={this.clickResult}>Coordinates</button>
        )
    }
}
