import React, { Component } from "react";
import WeatherAPI from "../../components/WeatherAPI";
import Button from "../../components/Button";
import Widget from "../../components/Widget";
import Calendar from "react-calendar";
import TwitterWidget from "../../components/TwitterWidget";
import "./Main.css";
import API from "../../util/API";
import { DropdownButton, MenuItem } from "react-bootstrap";

class Main extends Component {

  constructor(props) {
    super(props);
    console.log(props.match.params);
  }
  state = {
    activeId: "",
    staticMode: false,
    activeWidgets: [],
    activeWidgetsString: [],
    weatherAPIHeight: 300,
    weatherAPIWidth: 300,
    weatherAPIX: 300,
    weatherAPIY: 300,
    twitterHeight: 500,
    twitterWidth: 250,
    twitterX: 500,
    twitterY: 100,
    calendarHeight: 250,
    calendarWidth: 250,
    calendarX: 250,
    calendarY: 250,
    data: {}
  };

  componentDidMount = () => {
    console.log("on init :" + this.state);
    setTimeout(
      this.setState({
        activeId: this.props.match.params.id
      }),
      500
    );
    this.loadUserSettings();
  };

  handleWidgetLoad = () => {
    if (this.state.activeWidgetsString.indexOf("TwitterWidget") >= 0) {
      let newActiveWidgets = [...this.state.activeWidgets];
      newActiveWidgets.push(TwitterWidget);
      this.setState({
        activeWidgets: newActiveWidgets
      });
    }
    if (this.state.activeWidgetsString.indexOf("WeatherAPI") >= 0) {
      let newActiveWidgets = [...this.state.activeWidgets];
      newActiveWidgets.push(WeatherAPI);
      this.setState({
        activeWidgets: newActiveWidgets
      });
    }
    if (this.state.activeWidgetsString.indexOf("Calendar") >= 0) {
      let newActiveWidgets = [...this.state.activeWidgets];
      newActiveWidgets.push(Calendar);
      this.setState({
        activeWidgets: newActiveWidgets
      });
    }
    console.log("this is where the magic happens");
    console.log(this.state);
  };

  componentDidUpdate() {
    if (this.state.activeId !== this.props.match.params.id) {
      this.setState({
        activeId: this.props.match.params.id
      });
    }

    this.changeSettings(this.props.match.params.id);
  }

  handleWidgetAdd = event => {
    const val = event.target.getAttribute("value");

    if (
      val === "Twitter" &&
      this.state.activeWidgets.indexOf(TwitterWidget) < 0
    ) {
      let newActiveWidgets = [...this.state.activeWidgets];
      let newWidgetsString = [...this.state.activeWidgetsString];
      newActiveWidgets.push(TwitterWidget);
      newWidgetsString.push("TwitterWidget");
      console.log(newActiveWidgets);
      this.setState({
        activeWidgets: newActiveWidgets,
        activeWidgetsString: newWidgetsString
      });
    } else if (
      val === "WeatherAPI" &&
      this.state.activeWidgets.indexOf(WeatherAPI) < 0
    ) {
      let newActiveWidgets = [...this.state.activeWidgets];
      let newWidgetsString = [...this.state.activeWidgetsString];
      newActiveWidgets.push(WeatherAPI);
      newWidgetsString.push("WeatherAPI");
      console.log(newActiveWidgets);
      this.setState({
        activeWidgets: newActiveWidgets,
        activeWidgetsString: newWidgetsString
      });
    } else if (
      val === "Calendar" &&
      this.state.activeWidgets.indexOf(Calendar) < 0
    ) {
      let newActiveWidgets = [...this.state.activeWidgets];
      let newWidgetsString = [...this.state.activeWidgetsString];
      newActiveWidgets.push(Calendar);
      newWidgetsString.push("Calendar");
      console.log(newActiveWidgets);
      this.setState({
        activeWidgets: newActiveWidgets,
        activeWidgetsString: newWidgetsString
      });
    }
  };

  handleBtnClick = event => {
    let newState = { ...this.state };
    newState.staticMode = eval(event.target.getAttribute("value"));
    this.setState({ ...newState });
    console.log("click handled");
    console.log(event);
    console.log(this.state.staticMode);
  };

  loadUserSettings = event => {
    console.log("loading user settings...");
    API.getUserDataById(this.state.activeId)
      .then(res => {
        console.log(res.data[0]);
        let newState = {
          activeWidgetsString: res.data[0].activeWidgetsString,
          weatherAPIHeight: res.data[0].weatherAPIHeight,
          weatherAPIWidth: res.data[0].weatherAPIWidth,
          weatherAPIX: res.data[0].weatherAPIX,
          weatherAPIY: res.data[0].weatherAPIY,
          twitterHeight: res.data[0].twitterHeight,
          twitterWidth: res.data[0].twitterWidth,
          twitterX: res.data[0].twitterX,
          twitterY: res.data[0].twitterY,
          calendarHeight: res.data[0].calendarHeight,
          calendarWidth: res.data[0].calendarWidth,
          calendarX: res.data[0].calendarX,
          calendarY: res.data[0].calendarY
        };
        console.log("setting new state...");
        this.setState({ ...newState });
        this.handleWidgetLoad();
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  arrayPersistChecker = () => {
    API.getUserDataById(this.props.match.params.id).then(res => {
      console.log(res.data[0].activeWidgetsString[0]);
    });
  };

  loadWidgetSettings = activeId => {
    console.log("widget load instaciated");
    API.getUserDataById;
  };

  newData;

  widgetOnChangeHandler = event => {
    console.log("widget change handled: " + event);
    const newData = event;
    console.log("hope this is data: " + newData.weatherAPIHeight);
    this.setState({ ...newData });
  };

  changeSettings = activeId => {

    API.updateUserData(activeId, {
      $set: {
        activeWidgetsString: this.state.activeWidgetsString,
        weatherAPIWidth: this.state.weatherAPIWidth,
        weatherAPIHeight: this.state.weatherAPIHeight,
        weatherAPIX: this.state.weatherAPIX,
        weatherAPIY: this.state.weatherAPIY,
        twitterWidth: this.state.twitterWidth,
        twitterHeight: this.state.twitterHeight,
        twitterX: this.state.twitterX,
        twitterY: this.state.twitterY,
        calendarWidth: this.state.calendarWidth,
        calendarHeight: this.state.calendarHeight,
        calendarX: this.state.calendarX,
        calendarY: this.state.calendarY
      }
    })
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
            thisWidget={
              i === this.state.activeWidgets.indexOf(WeatherAPI)
                ? "WeatherAPI"
                : i === this.state.activeWidgets.indexOf(TwitterWidget)
                  ? "TwitterWidget"
                  : i === this.state.activeWidgets.indexOf(Calendar)
                    ? "Calendar"
                    : null
            }
            height={
              i === this.state.activeWidgets.indexOf(WeatherAPI)
                ? this.state.weatherAPIHeight
                : i === this.state.activeWidgets.indexOf(TwitterWidget)
                  ? this.state.twitterHeight
                  : i === this.state.activeWidgets.indexOf(Calendar)
                    ? this.state.calendarHeight
                    : null
            }
            width={
              i === this.state.activeWidgets.indexOf(WeatherAPI)
                ? this.state.weatherAPIWidth
                : i === this.state.activeWidgets.indexOf(TwitterWidget)
                  ? this.state.twitterWidth
                  : i === this.state.activeWidgets.indexOf(Calendar)
                    ? this.state.calendarWidth
                    : null
            }
            x={
              i === this.state.activeWidgets.indexOf(WeatherAPI)
                ? this.state.weatherAPIX
                : i === this.state.activeWidgets.indexOf(TwitterWidget)
                  ? this.state.twitterX
                  : i === this.state.activeWidgets.indexOf(Calendar)
                    ? this.state.calendarX
                    : null
            }
            y={
              i === this.state.activeWidgets.indexOf(WeatherAPI)
                ? this.state.weatherAPIY
                : i === this.state.activeWidgets.indexOf(TwitterWidget)
                  ? this.state.twitterY
                  : i === this.state.activeWidgets.indexOf(Calendar)
                    ? this.state.calendarY
                    : null
            }
            draggable={this.state.staticMode}
            resizable={this.state.staticMode == true ? false : true}
            changeHandler={this.widgetOnChangeHandler}
          />
        ))}
        {/* <Button
          className="myBtn"
          value={this.state.staticMode === false ? true : false}
          onClick={this.handleBtnClick}
        >
          Toggle
        </Button> */}
        <Button className="myBtn" onClick={this.handleBtnClick}>
          Save Settings
        </Button>
        {/* <Button className="myBtn" onClick={this.handleBtnClick}>
          Add Widgets
        </Button> */}

        <DropdownButton 
          className="myBtn" 
          title="+" 
          noCaret
          style={{
            borderRadius: "50%", 
            height: "36px", 
            width: "36px",
            margin: ".5em",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",}}>
          <MenuItem
            eventKey="1"
            value="WeatherAPI"
            onClick={ this.handleWidgetAdd }
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
      </div>
    );
  }
}

export default Main;
