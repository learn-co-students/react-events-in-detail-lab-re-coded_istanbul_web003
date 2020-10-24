// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    delayFunc = (e) => {
        e.persist()
        const target = e;
        setTimeout(() => this.props.onDelayedClick(target), this.props.delay)
    }
    render() {
        return (
            <div>
                <button onClick={this.delayFunc}>Button2</button>
            </div>
        )
    }
}
