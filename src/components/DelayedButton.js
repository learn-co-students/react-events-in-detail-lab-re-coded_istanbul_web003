import React, { Component } from "react"

class DelayedButton extends Component {

    onDelay = (event) => {
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)

    }

    render() {
        return(
            <div>
            <button onClick= {this.onDelay} />
            </div>
        )
    }
}

export default DelayedButton;