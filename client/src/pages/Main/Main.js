import React, { Component } from "react";
import WeatherAPI from "../../components/WeatherAPI";
import Button from "../../components/Button";
import Widget from "../../components/Widget";
import Calendar from "react-calendar";
import WorldClock from "../../components/WorldClock";
import TrafficReport from "../../components/TrafficReport";
import TwitterWidget from "../../components/TwitterWidget";
import "./Main.css";
import API from "../../util/API";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params);
  }
  state = {
    activeId: this.props.match.params.id,
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
    worldClockHeight: 250,
    worldClockWidth: 250,
    worldClockX: 250,
    worldClockY: 250,
    trafficReportHeight: 250,
    trafficReportWidth: 250,
    trafficReportX: 250,
    trafficReportY: 250,
    data: {}
  };

  componentDidMount = () => {
    console.log("mounted");
    console.log(this.state);
    // setTimeout(
    //   this.setState({
    //     activeId: this.props.match.params.id
    //   }),
    //   500
    // );
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
    if (this.state.activeWidgetsString.indexOf("WorldClock") >= 0) {
      let newActiveWidgets = [...this.state.activeWidgets];
      newActiveWidgets.push(WorldClock);
      this.setState({
        activeWidgets: newActiveWidgets
      });
    }
    if (this.state.activeWidgetsString.indexOf("TrafficReport") >= 0) {
      let newActiveWidgets = [...this.state.activeWidgets];
      newActiveWidgets.push(TrafficReport);
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
    setTimeout(this.changeSettings(this.props.match.params.id), 1000);
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
    } else if (
      val === "WorldClock" &&
      this.state.activeWidgets.indexOf(WorldClock) < 0
    ) {
      let newActiveWidgets = [...this.state.activeWidgets];
      let newWidgetsString = [...this.state.activeWidgetsString];
      newActiveWidgets.push(WorldClock);
      newWidgetsString.push("WorldClock");
      console.log(newActiveWidgets);
      this.setState({
        activeWidgets: newActiveWidgets,
        activeWidgetsString: newWidgetsString
      });
    } else if (
      val === "TrafficReport" &&
      this.state.activeWidgets.indexOf(TrafficReport) < 0
    ) {
      let newActiveWidgets = [...this.state.activeWidgets];
      let newWidgetsString = [...this.state.activeWidgetsString];
      newActiveWidgets.push(TrafficReport);
      newWidgetsString.push("TrafficReport");
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
    console.log(this.state.activeId);
    API.getUserDataById(this.state.activeId)
      .then(res => {
        console.log(res.data);
        let newState = {
          activeWidgetsString: res.data.activeWidgetsString,
          weatherAPIHeight: res.data.weatherAPIHeight,
          weatherAPIWidth: res.data.weatherAPIWidth,
          weatherAPIX: res.data.weatherAPIX,
          weatherAPIY: res.data.weatherAPIY,
          twitterHeight: res.data.twitterHeight,
          twitterWidth: res.data.twitterWidth,
          twitterX: res.data.twitterX,
          twitterY: res.data.twitterY,
          calendarHeight: res.data.calendarHeight,
          calendarWidth: res.data.calendarWidth,
          calendarX: res.data.calendarX,
          calendarY: res.data.calendarY,
          worldClockHeight: res.data.worldClockHeight,
          worldClockWidth: res.data.worldClockWidth,
          worldClockX: res.data.worldClockX,
          worldClockY: res.data.worldClockY,
          trafficReportHeight: res.data.trafficReportHeight,
          trafficReportWidth: res.data.trafficReportWidth,
          trafficReportX: res.data.trafficReportX,
          trafficReportY: res.data.trafficReportY
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
      console.log(res.data.activeWidgetsString[0]);
    });
  };

  loadWidgetSettings = activeId => {
    console.log("widget load instaciated");
    API.getUserDataById;
  };

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
        calendarY: this.state.calendarY,
        worldClockWidth: this.state.worldClockWidth,
        worldClockHeight: this.state.worldClockHeight,
        worldClockX: this.state.worldClockX,
        worldClockY: this.state.worldClockY,
        trafficReportWidth: this.state.trafficReportWidth,
        trafficReportHeight: this.state.trafficReportHeight,
        trafficReportX: this.state.trafficReportX,
        trafficReportY: this.state.trafficReportY
      }
    }).catch(err => console.log(err));
  };

  handleWidgetDelete = event => {
    const widgetString = event.target.getAttribute("value");
    const widget = this.handleWidgetString(widgetString);
    console.log(widget);
    this.handleWidgetDeleteUpdate(widget);
  };

  handleWidgetString = widgetString => {
    switch (widgetString) {
      case "WeatherAPI":
        return WeatherAPI;
      case "TwitterWidget":
        return TwitterWidget;
      case "Calendar":
        return Calendar;
      case "WorldClock":
        return WorldClock;
      case "TrafficReport":
        return TrafficReport;
        break;
    }
  };

  handleWidgetNonString = widget => {
    switch (widget) {
      case WeatherAPI:
        return "WeatherAPI";
      case TwitterWidget:
        return "TwitterWidget";
      case Calendar:
        return "Calendar";
      case WorldClock:
        return "WorldClock";
      case TrafficReport:
        return "TrafficReport";
        break;
    }
  };

  handleWidgetDeleteUpdate = widget => {
    this.changeSettings;
    let emperorsNewWidgets = [...this.state.activeWidgets];
    let emperorsNewWidgetsString = [...this.state.activeWidgetsString];
    emperorsNewWidgets.splice(emperorsNewWidgets.indexOf(widget), 1);
    emperorsNewWidgetsString.splice(
      emperorsNewWidgetsString.indexOf(this.handleWidgetNonString(widget)),
      1
    );
    this.setState({
      activeWidgets: emperorsNewWidgets,
      activeWidgetsString: emperorsNewWidgetsString
    });
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        {this.state.activeWidgets.map((item, i) => (
          <Widget
            handleWidgetDelete={this.handleWidgetDelete}
            key={i}
            type={this.state.activeWidgets[i]}
            thisWidget={
              i === this.state.activeWidgets.indexOf(WeatherAPI)
                ? "WeatherAPI"
                : i === this.state.activeWidgets.indexOf(TwitterWidget)
                  ? "TwitterWidget"
                  : i === this.state.activeWidgets.indexOf(Calendar)
                    ? "Calendar"
                    : i === this.state.activeWidgets.indexOf(WorldClock)
                      ? "WorldClock"
                      : i === this.state.activeWidgets.indexOf(TrafficReport)
                        ? "TrafficReport"
                        : null
            }
            height={
              i === this.state.activeWidgets.indexOf(WeatherAPI)
                ? this.state.weatherAPIHeight
                : i === this.state.activeWidgets.indexOf(TwitterWidget)
                  ? this.state.twitterHeight
                  : i === this.state.activeWidgets.indexOf(Calendar)
                    ? this.state.calendarHeight
                    : i === this.state.activeWidgets.indexOf(WorldClock)
                      ? this.state.worldClockHeight
                      : i === this.state.activeWidgets.indexOf(TrafficReport)
                        ? this.state.trafficReportHeight
                        : null
            }
            width={
              i === this.state.activeWidgets.indexOf(WeatherAPI)
                ? this.state.weatherAPIWidth
                : i === this.state.activeWidgets.indexOf(TwitterWidget)
                  ? this.state.twitterWidth
                  : i === this.state.activeWidgets.indexOf(Calendar)
                    ? this.state.calendarWidth
                    : i === this.state.activeWidgets.indexOf(WorldClock)
                      ? this.state.worldClockWidth
                      : i === this.state.activeWidgets.indexOf(TrafficReport)
                        ? this.state.trafficReportWidth
                        : null
            }
            x={
              i === this.state.activeWidgets.indexOf(WeatherAPI)
                ? this.state.weatherAPIX
                : i === this.state.activeWidgets.indexOf(TwitterWidget)
                  ? this.state.twitterX
                  : i === this.state.activeWidgets.indexOf(Calendar)
                    ? this.state.calendarX
                    : i === this.state.activeWidgets.indexOf(WorldClock)
                      ? this.state.worldClockX
                      : i === this.state.activeWidgets.indexOf(TrafficReport)
                        ? this.state.trafficReportX
                        : null
            }
            y={
              i === this.state.activeWidgets.indexOf(WeatherAPI)
                ? this.state.weatherAPIY
                : i === this.state.activeWidgets.indexOf(TwitterWidget)
                  ? this.state.twitterY
                  : i === this.state.activeWidgets.indexOf(Calendar)
                    ? this.state.calendarY
                    : i === this.state.activeWidgets.indexOf(WorldClock)
                      ? this.state.worldClockY
                      : i === this.state.activeWidgets.indexOf(TrafficReport)
                        ? this.state.trafficReportY
                        : null
            }
            draggable={this.state.staticMode}
            resizable={this.state.staticMode == true ? false : true}
            changeHandler={this.widgetOnChangeHandler}
            value="test2"
          />
        ))}

        <DropdownButton
          className="myBtn"
          title="+"
          noCaret
          style={{
            borderRadius: "50%",
            height: "36px",
            width: "36px",
            margin: ".5em",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
          }}
        >
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

          <MenuItem
            eventKey="4"
            value="WorldClock"
            onClick={this.handleWidgetAdd}
          >
            World Clock
          </MenuItem>

          <MenuItem
            eventKey="5"
            value="TrafficReport"
            onClick={this.handleWidgetAdd}
          >
            Traffic Report
          </MenuItem>
        </DropdownButton>
        <Link to="/">
          <Button className="myBtn logout">Logout</Button>
        </Link>
      </div>
    );
  }
}

export default Main;
