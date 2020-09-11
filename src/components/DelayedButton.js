// Code CoordinatesButton Component Here
import React, { Component } from 'react';
export default class DelayedButton extends Component {
    constructor(props) {
        super()
    }

    DelayedClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
    render() {
        return (
            <button onClick={this.DelayedClick}></button>
        )
    }
}