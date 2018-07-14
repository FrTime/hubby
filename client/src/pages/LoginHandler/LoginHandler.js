import React, { Component } from "react";
import Register from "../../components/Register";
import API from "../../util/API";
import Main from "../Main";
import { Link } from "react-router-dom";
import Trigger from "../../components/Trigger";

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

  loadUserSettings = res => {
    console.log(res);
    this.setState({ userData: res.data });
    this.props.history.push("/Main/" + res.data._id);
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
    if (this.state.password !== this.state.password2) {
      alert("these no match yo");
    } else if (this.state.password === this.state.password2) {
      API.saveUserData({
        password: this.state.password,
        email: this.state.email,
        //maybe we need to have a method that sets a default value for the weather/calendar api's so when user is created
      //they already have values in their userObject
        weatherAPIWidth: this.state.weatherAPIWidth,
        weatherAPIHeight: this.state.weatherAPIHeight,
        weatherAPIX: this.weatherAPIX,
        weatherAPIY: this.weatherAPIY,
        calendarWidth: this.calendarWidth,
        calendarHeight: this.calendarHeight,
        calendarX: this.calendarX,
        calendarY: this.calendarY
      })
        .then(() => this.props.history.push("/Main/:id"))
        .catch(err => console.log(err));
      
    }
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
              name="username"
              placeholder="Email Address"
              required
              autofocus=""
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
              // onClick={props.handleFormSubmit}
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
