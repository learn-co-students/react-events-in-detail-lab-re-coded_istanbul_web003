// Code DelayedButton Component Here
import React from "react";

class DelayedButton extends React.Component {
 
    onDelayedClick = (e) => {
        e.persist();
        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }
 
    render() {
      return (
        <div>
           <button onClick={this.onDelayedClick}>Delay</button>
        </div>
      )
    }
  }

  export default DelayedButton;