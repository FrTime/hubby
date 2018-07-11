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
        {/* <Link to="/Main"> */}
        <button
          className="btn btn-lg btn-primary btn-block"
          // onClick={}
          // type="submit"
          // onClick={props.handleFormSubmit}
        >
          Login
        </button>
        {/* </Link> */}
        <div className="row">
          {/* <div className="hor-line1 col-md-5" /> */}
          <h5 className="text-center either-or"> or </h5>
          {/* <div className="hor-line2 col-md-5" /> */}
        </div>
        {/* <Link to="/register" handlePasswordCheck={props.handlePasswordCheck}> */}
        {/* <button
          onClick={<Trigger />}
          className="btn btn-lg btn-primary btn-block"
          // type="submit"
        >
          Register
        </button> */}
        


        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#myModal"
        >
          Launch demo modal
        </button>
        <div
          className="modal fade"
          id="myModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">
                  Modal title
                </h4>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>



        
        {/* </Link> */}
      </form>
    </div>
  </div>
);

export default Login;
