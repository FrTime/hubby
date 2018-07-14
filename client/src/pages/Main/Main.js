import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import Settings from "../../components/Settings";
import WeatherAPI from "../../components/WeatherAPI";
import Button from "../../components/Button";
import Widget from "../../components/Widget";
import Calendar from "react-calendar";
import "./Main.css";
import API from "../../util/API";


class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.id);
  }
  state = {
    activeId: "",
    staticMode: false,
    activeWidgets: [Calendar, WeatherAPI],
  };

  componentDidMount = () => {
    this.setState({
      activeId: this.props.match.params.id
    });
  };

  handleBtnClick = event => {
    let newState = { ...this.state };
    newState.staticMode = eval(event.target.getAttribute("value"));
    this.setState({ ...newState });
    console.log("click handled");
    console.log(event);
    console.log(this.state.staticMode);
  };

  changeSettings = activeId => {
    console.log("cha cha cha changing");
    API.updateUserData({
      weatherAPIWidth: this.state.weatherAPIWidth,
      weatherAPIHeight: this.state.weatherAPIHeight,
      weatherAPIX: this.weatherAPIX,
      weatherAPIY: this.weatherAPIY,
      calendarWidth: this.calendarWidth,
      calendarHeight: this.calendarHeight,
      calendarX: this.calendarX,
      calendarY: this.calendarY
    })
      .then(activeId => this.props.history.push("/Main/:id"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div
        className="back"
        style={{ backgroundColor: "grey", position: "relative" }}
      >
        {this.state.activeWidgets.map((item, i) => (
          <Widget
            key={i}
            type={this.state.activeWidgets[i]}
            draggable={this.state.staticMode}
            resizable={this.state.staticMode == true ? false : true}
          />
        ))}
        <Button
        className='myBtn'
          value={this.state.staticMode === false ? true : false}
          onClick={this.handleBtnClick}
        >
          Toggle
        </Button>
        <Button 
        className='myBtn'
        onClick={this.handleBtnClick}>Change Settings</Button>
      </div>
    );
  }
}

export default Main;
