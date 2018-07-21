import React, { Component } from "react";
import Register from "../../components/Register";
import API from "../../util/API";
import Main from "../Main";
import { Link } from "react-router-dom";
import Trigger from "../../components/Trigger";
import { ToastContainer, toast } from "react-toastify";

const Msg = () => <div>This password is incorrect.</div>;

class LoginHandler extends Component {
  state = {
    password: "",
    email: "",
    password2: "",
    userData: []
  };

  componentDidMount() {
    //this.loadUserSettings();
  }
  // THIS should happen on the main page?
  // loadUserSettings = (res) => {
  //  console.log(res);
  //      this.setState({ userData: res.data });
  //      this.props.history.push('/Main/:id/' + res.data._id);

  loadUserSettings = event => {
    // console.log(res);
    event.preventDefault();
    API.getUserDataByEmail(this.state.email)
      // .then(res => console.log(res.data[0]))
      .then(res => {
        console.log(res.data[0]);
        if (this.state.password === res.data[0].password) {
          this.props.history.push("/Main/" + res.data[0]._id);
        } else {
          toast(<Msg />);
        }
      })
      .catch(err => console.log(err));
    // this.setState({ userData: res.data });
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleRegister = event => {
    console.log("click");
    event.preventDefault();

    API.saveUserData({
      password: this.state.password,
      email: this.state.email,
      //maybe we need to have a method that sets a default value for the weather/calendar api's so when user is created
      //they already have values in their userObject
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
      trafficReportY: 250
    })
      .then(this.loadUserSettings(event))
      .catch(err => console.log(err));
  };

  goToRegister = event => {
    console.log("clickity wickity");
    event.preventDefault();
    return <Register />;
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <form className="form-signin">
            <h3 className="form-signin-heading text-center">Login to Hubby:</h3>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              required
              autoFocus=""
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required
              onChange={this.handleInputChange}
            />
            <ToastContainer />
            <label className="checkbox">
              <input
                type="checkbox"
                value="remember-me"
                id="rememberMe"
                name="rememberMe"
              />{" "}
              Remember me
            </label>
            <a
              className="btn btn-lg btn-primary btn-block"
              // onClick={}
              // type="submit"
              onClick={this.loadUserSettings}
            >
              Login
            </a>
            <div className="row">
              <h5 className="text-center either-or"> or </h5>
            </div>

            <Trigger
              handlePasswordCheck={this.handlePasswordCheck}
              handleInputChange={this.handleInputChange}
              handleRegister={this.handleRegister}
              state={this.state}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginHandler;
