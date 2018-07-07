import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Interactable from "../../components/Interactable";

import WeatherAPI from "../../components/WeatherAPI";
import Widget from "../../components/Widget";
import Calendar from "react-calendar";
import "./Main.css";


class Main extends Component {

    state = {
        activeWidgets: [ 
            Calendar,
            WeatherAPI,
        ],
    };

    // componentDidMount = () => {
      
    // }
    



    render() {

        return (
            <div className="back" style={{backgroundColor: "grey",}}>

                    {/* <img src="https://placeimg.com/1000/500/arch" /> */}

           {this.state.activeWidgets.map((item, i) =>
              <Widget
                key={i}
                type={this.state.activeWidgets[i]} />)}
                    {/* <Widget widgetType={WeatherAPI}/> */}

                    {/* <i className="material-icons">mail_outline</i>

                    <div className="fixed-action-btn">
                        <a className="btn-floating btn-large grey darken-3">
                            <i className="large material-icons">settings</i>
                        </a>
                        <ul>
                            <li>
                                <button className="btn-floating red">
                                    Color
                </button>
                            </li>
                            <li>
                                <button className="btn-floating green">
                                    Add
                </button>
                            </li>
                            <li>
                                <button className="btn-floating blue">
                                    Edit
                </button>
                            </li>
                        </ul>
                    </div> */}

            </div>

        )
    }
}

export default Main;

