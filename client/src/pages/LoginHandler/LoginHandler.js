import React, { Component } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";
import API from "../../util/API";
import Main from "../Main";
import { Link } from "react-router-dom";
import { Popover } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const popoverRight = (
  <Popover id="popover-positioned-right" title="Popover right">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

class LoginHandler extends Component {
  state = {
    password: "",
    email: "",
    password2: ""
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
    event.preventDefault();
    if (this.state.password !== this.state.password2) {
      alert("these no match yo");
    } else if (this.state.password === this.state.password2) {
      alert("you deed it");
      this.handleFormSubmit();
      this.getUser();
    }
  };

  // handlePasswordCheck = () => {
  //   <Popover id="popover-positioned-scrolling-right" title="Popover right">
  //     <strong>Holy guacamole!</strong> Check this info.
  //   </Popover>;
  // };

  handleFormSubmit = event => {
    console.log("whoopsies");
    event.preventDefault();
    // this.getUser();
    if (this.state.email && this.state.password) {
      API.saveUser({
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        devices: this.state.devices
      })
        .then(res => this.handleRegister())
        .catch(err => console.log(err));
    }
  };

  getUser = query => {
    // API.getUser(query);
    {
      return (
        <Link>
          <Main />
        </Link>
      );
    }
  };

  goToRegister = event => {
    console.log("clickity wickity");
    event.preventDefault();
    return <Register />;
  };

  render() {
    return (
      <div>
        <Login
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleRegister={this.handleRegister}
          goToRegister={this.goToRegister}
          handlePasswordCheck={popoverRight}
        />
      </div>
    );
  }
}

export default LoginHandler;
