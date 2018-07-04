import React, { Component } from "react";
import "../style/css/main.css";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
    this.register = this.register.bind(this);
  }

  register() {
    console.log("这里是注册这里是注册");
    this.setState({
      flag: true
    });
  }

  handleLogin(event) {
    let email = event.target[0].value;
    let password = event.target[1].value;
    this.props.callbackParent(email, password);
  }

  render() {
    let flag = this.state.flag;
    let redirectToRegister = <Redirect to="/auth/register" />;
    let app = (
      <div className="login-form-panel">
        <form className="form" onSubmit={this.handleLogin.bind(this)}>
          <h5
            className="font-weight-bold"
            style={{ paddingTop: "1rem", paddingLeft: "1rem" }}
          >
            Log in to TimeCamp
          </h5>
          <div className="panel-input">
            <div className="form-group row">
              <label
                for="email"
                className="col-sm-3 col-md-4 col-lg-3 col-form-label"
                style={{
                  textAlign: "right",
                  paddingLeft: "0",
                  paddingRight: "0",
                  fontWeight: "bold",
                  fontSize: "0.9rem"
                }}
              >
                E-mail:
              </label>
              <div className="col-sm-9 col-md-8 col-lg-9">
                <input
                  id="email"
                  className="form-control"
                  maxLength="20"
                  type="email"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                for="password"
                style={{
                  textAlign: "right",
                  paddingLeft: "0",
                  paddingRight: "0",
                  fontWeight: "bold",
                  fontSize: "0.9rem"
                }}
                className="col-sm-3 col-md-5 col-lg-3 col-form-label"
              >
                Password:
              </label>
              <div className="col-sm-9 col-md-7 col-lg-9">
                <input
                  id="password"
                  className="form-control"
                  maxLength="20"
                  type="password"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="offset-sm-2 offset-md-4 offset-lg-3 col-sm-10 col-md-8 col-lg-9">
                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ fontSize: "small" }}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="row" style={{ padding: "1rem" }}>
          <div className="col-md-6">
            <div>
              <button
                type="button"
                className="btn btn-link btn-sm"
                style={{ paddingLeft: "0", fontSize: "small" }}
              >
                Forgotten Password?
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-link btn-sm"
                onClick={this.register}
                style={{ paddingLeft: "0" }}
              >
                No account? Sign up
              </button>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-around">
            <div>or</div>
            <button
              type="button"
              className="btn btn-primary btn-small"
              style={{
                fontSize: "0.7rem",
                marginLeft: "1rem",
                fontWeight: "bold"
              }}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    );
    return flag ? redirectToRegister : app;
  }
}

export default LoginForm;
