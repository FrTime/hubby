import "./Widget.css";
import React, { Component } from 'react'
import Rnd from "react-rnd";
import API from "../../util/API";
// import WeatherAPI from "../WeatherAPI";
// import Calendar from "react-calendar";

// const movable = document.querySelector('#movable-box');

export default class Widget extends Component {
    state = {
        
        width: 305,
        height: 305,
        x: (window.innerWidth / 3) ,
        y: (window.innerHeight / 3) ,
        
    }

    


    saveData = (width, height) => {

        API.updateUserData({
          username: width,
          password: height,

        })
          .then(console.log("saved"))
          .catch(err => console.log(err));
      };

    render = props => {

        return (

                <Rnd

                    style
                    size={{ width: this.state.width, height: this.state.height }}
                    position={{ x: this.state.x, y: this.state.y }}
                    onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                    bounds={ "window" }
                    minWidth={ 200 }
                    minHeight={ 200 }
                    lockAspectRatio={ true }
                    onResize={(e, direction, ref, delta, position) => {
                        this.setState({
                            width: ref.offsetWidth,
                            height: ref.offsetHeight,
                            ...position,
                        });
                    }}
                    disableDragging={this.props.draggable}
                    
                >
                    <div className="widget">
                        < this.props.type 
                         style={{  
                            width: this.state.width, 
                            height: this.state.height}}
                            width={this.state.width}
                            height={this.state.height}
                            x={this.state.x}
                            y={this.state.y}
                            id={this.state.activeId}
                             />
                    </div>
                </Rnd>
        )
    }
}
