// Code DelayedButton Component Here

import React, { Component } from 'react';

export default class DelayedButton extends React.Component {

    clickMeToDelay = (e) => {
        e.persist()

        setTimeout(() => this.props.onDelayedClick(e),this.props.delay)
            
    }

    render(){
        return (
         <button onClick={this.clickMeToDelay}>press here</button>
        )
    }
}