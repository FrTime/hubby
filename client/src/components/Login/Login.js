import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

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
        <Link to="/Main">
          <button
            className="btn btn-lg btn-dark btn-block"
            // type="submit"
            // onClick={props.handleFormSubmit}
          >
            Login
          </button>
        </Link>
        <div className="row">
          <div className="hor-line1 col-md-5" />
          <h5 className="text-center either-or col-md-2"> or </h5>
          <div className="hor-line2 col-md-5" />
        </div>
        <Link to="/register">
          <button
            className="btn btn-lg btn-dark btn-block"
            // type="submit"
          >
            Register
          </button>
        </Link>
      </form>
    </div>
  </div>
);

export default Login;
