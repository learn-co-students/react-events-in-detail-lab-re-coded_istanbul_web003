import React, { Component } from "react"

class CoordinatesButton extends Component {
    getCoordinates  = event => {
        let coordinates = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(coordinates);
      }
      render(){
        return(
          <div>
            <button onClick={this.getCoordinates}/>
          </div>
        );
      }
}

export default CoordinatesButton;