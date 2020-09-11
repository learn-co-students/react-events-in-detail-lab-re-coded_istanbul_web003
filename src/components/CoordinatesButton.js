import React from "react";

export default class CoordinatesButton extends React.Component{
   constructor(props){
       super(props);
   }
    getCoordinates = (e)=>{
        let coordinates = [e.clientX, e.clientY];
        this.props.onReceiveCoordinates(coordinates);
    }

    render(){
        return (
            <div>
                <button onClick={this.getCoordinates}>Get Coordinates</button>
            </div>
        )
    }
}
