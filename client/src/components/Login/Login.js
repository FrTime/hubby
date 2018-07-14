import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Trigger from "../Trigger";

const Login = props => (
  <div className="container">
    <div className="wrapper">
      <form className="form-signin">
        <h3 className="form-signin-heading text-center">Login to Hubby:</h3>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Email Address"
          required
          autofocus=""
          onChange={props.handleInputChange}
        />
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          required
          onChange={props.handleInputChange}
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
        <button
          className="btn btn-lg btn-primary btn-block"
          // onClick={}
          // type="submit"
          // onClick={props.handleFormSubmit}
        >
          Login
        </button>
        <div className="row">
          <h5 className="text-center either-or"> or </h5>
        </div>
        <Trigger />
      </form>
    </div>
  </div>
);

export default Login;
