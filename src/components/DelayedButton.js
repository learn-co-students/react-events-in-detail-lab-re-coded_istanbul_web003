import React, {Component} from "react";

export default class DelayButton extends Component{
    constructor(props){
        super(props);
    }

    delayBtn = (e) => {
        e.persist();
        setTimeout(() => {
        this.props.onDelayedClick(e)},this.props.delay)
    }

    render(){
        return (
            <div>
                <button onClick={this.delayBtn}>Delay Results</button>
            </div>
        )
    }
}
