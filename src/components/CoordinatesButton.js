import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    clallback = (event) => {
        const Coordinates = [event.clientX, event.clientY];
        // event.persist()
        this.props.onReceiveCoordinates(Coordinates);
        
    }
    render() {
        return (
            <div>
                <button onClick={this.clallback}>Coordinates</button>
            </div>
        )
    }
}
