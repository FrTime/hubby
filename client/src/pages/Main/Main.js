import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Interactable from "../../components/Interactable";
import Settings from "../../components/Settings";
import WeatherAPI from "../../components/WeatherAPI";
import Button from "../../components/Button";
import Widget from "../../components/Widget";
import Calendar from "react-calendar";
import "./Main.css";


class Main extends Component {

    state = {
        staticMode: false,
        activeWidgets: [
            Calendar,
            WeatherAPI,
        ],
    };

    // componentDidMount = () => {

    // }

    handleBtnClick = event => {
        let newState = { ...this.state }
        newState.staticMode = eval(event.target.getAttribute("value"));
        this.setState({ ...newState })
        console.log("click handled")
        console.log(event)
        console.log(this.state.staticMode)
    }

    saveUserData = () => {

    }

    render() {

        return (
            <div className="back" style={{ backgroundColor: "grey", position: "relative", }}>



                {this.state.activeWidgets.map((item, i) =>
                    <Widget
                        key={i}
                        type={this.state.activeWidgets[i]}
                        draggable={this.state.staticMode}
                        resizable={(this.state.staticMode == true)? false : true}
                    />
                )}
                <Button
                    value={(this.state.staticMode === false) ? true : false}
                    handleBtnClick={this.handleBtnClick} />
            </div>

        )
    }
}

export default Main;

