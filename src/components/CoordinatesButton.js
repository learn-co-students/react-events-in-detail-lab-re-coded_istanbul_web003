// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  render() {
    return (
      <button 
      onClick = {e => {
        const coordinates = [e.clientX, e.clientY, ]
        this.props.onReceiveCoordinates(coordinates)
      }
    }
      >Click Me!</button>
    )
  }
}

export default CoordinatesButton