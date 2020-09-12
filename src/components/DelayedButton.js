// Code DelayedButton Component Here
import React, {Component} from "react";

export default class DelayedButton extends Component{
    someFunc = (e) => {
        e.persist()
        const target = e;
        setTimeout(() => this.props.onDelayedClick(target), this.props.delay)
    }
    render(){
        return(
            <button onClick={this.someFunc}>Click2</button>
        )
    }
}