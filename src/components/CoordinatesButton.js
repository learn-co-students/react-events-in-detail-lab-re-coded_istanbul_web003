// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
 
    onClickHandler = (e) => {
        console.log(e)
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
 
    render() {
      return (
        <div>
           <button onClick={this.onClickHandler}>Click me </button>
        </div>
      )
    }
  }

  export default CoordinatesButton;