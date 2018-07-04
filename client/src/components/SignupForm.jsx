import React, { Component } from "react";
import "../style/css/main.css";

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invalidCheck: true
    };
  }

  changeCheck() {
    let check = !this.state.invalidCheck;
    this.setState({
      invalidCheck: check
    });
  }

  render() {
    return (
      <div className="form">
        <a href="https://www.timecamp.com/">
          <image
            style={{
              position: "absolute",
              top: "-55px",
              left: "0",
              widht: "150px",
              height: "50px"
            }}
            src={require("../images/timecamp-logo.png")}
          />
        </a>

        <form
          className="form col-md-10 offset-md-1"
          id="signup_form"
          style={{ padding: "20px" }}
        >
          <div
            className="contaniner col-md-12"
            style={{ paddingBottom: "20px" }}
          >
            <h1 className="font-weight-bold text-center ">Sign up for free</h1>
            <h6 className="font-weight-bold text-center">
              All features. No credit card required.
            </h6>
          </div>
          <div className="form-group">
            <input
              className="form-control required"
              type="email"
              placeholder="Email"
              name="email"
              autoFocus="autofocus"
              maxLength="20"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control required"
              type="password"
              placeholder="Password"
              name="password"
              maxLength="10"
              required
            />
          </div>
          <div class="form-group form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              checked={this.state.invalidCheck ? "checked" : ""}
              onClick={this.changeCheck.bind(this)}
              required
            />
            <label class="form-check-label" for="invalidCheck">
              I agree to Terms of Service and Privacy Policy.
            </label>
          </div>
          <button type="submit" className="btn btn-success btn-lg btn-block">
            Sign up free
          </button>
          <div className="text-sm-center">
            <small style={{ color: "#999999" }}> or </small>
          </div>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg btn-block"
            style={{ color: "#666666" }}
          >
            Sign up free with Google
          </button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
