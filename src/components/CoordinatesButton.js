// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    coorArr = (e) => {
        const array = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(array)
    }

    render() {
        return (
            <div>
                <button onClick={this.coorArr}> Button </button>
            </div>
        )
    }
}
