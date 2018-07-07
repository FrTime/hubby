import "./Widget.css";
import React, { Component } from 'react'
import Rnd from "react-rnd";
// import WeatherAPI from "../WeatherAPI";
// import Calendar from "react-calendar";

// const movable = document.querySelector('#movable-box');

export default class Widget extends Component {
    state = {
        width: 305,
        height: 305,
        x: 100,
        y: 100,
    }
    // handleChange(event) {
    //     this.setState({value: event.target.value});
    //     console.log("change occured");
    //   }


    // componentDidMount{

    // }


    render() {
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
                >
                    <div className="widget">
                        < this.props.type 
                         style={{  
                            width: this.state.width, 
                            height: this.state.height}}
                             />
                    </div>
                </Rnd>
        )
    }
}
