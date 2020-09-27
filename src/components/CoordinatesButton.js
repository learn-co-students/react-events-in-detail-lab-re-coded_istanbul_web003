import React, { Component } from 'react'
class CoordinatesButton extends Component {

    handle = (event) => {
        let array = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(array)
    }

    render() {
        return (
            <button onClick={this.handle}></button>
        )
    }
}

export default CoordinatesButton;