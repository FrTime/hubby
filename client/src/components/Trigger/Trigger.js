import React from "react";
import "./Trigger.css";
import { Modal } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const Msg = () => (
  <div>
    Please enter a valid email address and ensure that the passwords match.
  </div>
);

export default class Trigger extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className="modal-container">
        <a
          className="btn btn-lg btn-primary btn-block"
          onClick={() => this.setState({ show: true })}
        >
          Register
        </a>

        <Modal show={this.state.show} onHide={this.handleHide}>
          <Modal.Header closeButton>
            <form>
              <h3 className="form-signin-heading text-center">
                Create an account:
              </h3>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email Address"
                required
                autofocus=""
                onChange={this.props.handleInputChange}
              />
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required
                minlength="8"
                onChange={this.props.handleInputChange}
              />
              <input
                type="password"
                className="form-control"
                name="password2"
                placeholder="Confirm password"
                required
                minlength="8"
                onFocus={this.props.handlePasswordCheck}
                onChange={this.props.handleInputChange}
              />
              <div>
                <ToastContainer />
              </div>
              <a
                className="btn btn-lg btn-primary btn-block"
                onClick={
                  this.props.state.password === this.props.state.password2 &&
                  this.props.state.password.length > 1 &&
                  validateEmail(this.props.state.email)
                    ? this.props.handleRegister
                    : () => toast(<Msg />)
                }
              >
                Get Your New Hubby
              </a>
            </form>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}
