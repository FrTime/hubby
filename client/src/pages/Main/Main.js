import React, { Component } from "react";
import { Link } from "react-router-dom";
import WeatherAPI from "../../components/WeatherAPI";
import Button from "../../components/Button";
import Widget from "../../components/Widget";
import Calendar from "react-calendar";
import TwitterWidget from "../../components/TwitterWidget";
import "./Main.css";
import API from "../../util/API";
import { DropdownButton, MenuItem } from "react-bootstrap";

class Main extends Component {
  // Weather = WeatherAPI;
  constructor(props) {
    super(props);
    console.log(props.match.params.id);
  }
  state = {
    activeId: "",
    staticMode: false,
    activeWidgets: [TwitterWidget]
  };

  handleWidgetAdd = event => {
    const val = event.target.getAttribute("value");

    if (
      val === "Twitter" &&
      this.state.activeWidgets.indexOf(TwitterWidget) < 0
    ) {
      let newActiveWidgets = [...this.state.activeWidgets];
      newActiveWidgets.push(TwitterWidget);
      console.log(newActiveWidgets);
      this.setState({
        activeWidgets: newActiveWidgets
      });
    } else if (
      val === "WeatherAPI" &&
      this.state.activeWidgets.indexOf(WeatherAPI) < 0
    ) {
      let newActiveWidgets = [...this.state.activeWidgets];
      newActiveWidgets.push(WeatherAPI);
      console.log(newActiveWidgets);
      this.setState({
        activeWidgets: newActiveWidgets
      });
    } else if (
      val === "Calendar" &&
      this.state.activeWidgets.indexOf(Calendar) < 0
    ) {
      let newActiveWidgets = [...this.state.activeWidgets];
      newActiveWidgets.push(Calendar);
      console.log(newActiveWidgets);
      this.setState({
        activeWidgets: newActiveWidgets
      });
    }
  };

  componentDidMount = () => {
    this.setState({
      activeId: this.props.match.params.id
    });
  };

  // handleLogout= ()=>{

  // }

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
        <Button className="myBtn" onClick={this.handleBtnClick}>
          Save Settings
        </Button>

        <DropdownButton className="myBtn" title="Add Widgets">
          <MenuItem
            eventKey="1"
            value="WeatherAPI"
            onClick={this.handleWidgetAdd}
          >
            Weather
          </MenuItem>
          <MenuItem
            eventKey="2"
            value="Calendar"
            onClick={this.handleWidgetAdd}
          >
            Calendar
          </MenuItem>

          <MenuItem eventKey="3" value="Twitter" onClick={this.handleWidgetAdd}>
            Twitter
          </MenuItem>
        </DropdownButton>

        <a href="https://hubbydoo.herokuapp.com/">
        <Button className="myBtn logout">
          Logout
        </Button>
        <Link to="/">
          <Button className="myBtn logout">Logout</Button>
        </Link>
      </div>
     
    );
  }
}

export default Main;
