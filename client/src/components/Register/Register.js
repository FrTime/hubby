import React from "react";
import "./Login.css";

const Register = props => (
  <div className="container">
    <div className="wrapper">
      <form className="form-signin">
        <h3 className="form-signin-heading text-center">Create an account:</h3>
        <input
          type="text"
          className="form-control"
          name="email"
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
        <input
          type="password"
          className="form-control"
          name="password2"
          placeholder="Confirm password"
          required
          onChange={props.handleInputChange}
        />
        <button
          className="btn btn-lg btn-dark btn-block"
          onClick={props.handleRegister}
        >
          Register
        </button>
      </form>
    </div>
  </div>
);

export default Register;
