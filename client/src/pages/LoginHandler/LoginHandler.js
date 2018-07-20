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
        <footer className="groupCopyright">
            <small>
                    <i></i>
            </small>
     </footer>
      </div>
      
    );
  }
}

export default LoginHandler;
