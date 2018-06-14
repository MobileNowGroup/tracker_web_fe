import React, { Component } from "react";
import "../style/css/main.css";

class LoginForm extends Component {
  render() {
    return (
      <div className="login-form-panel">
        <form className="form">
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
                className="col-sm-2 col-md-4 col-lg-3 col-form-label"
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
              <div className="col-sm-10 col-md-8 col-lg-9">
                <input
                  id="email"
                  className="form-control"
                  maxLength="20"
                  type="email"
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
                className="col-sm-2 col-md-4 col-lg-3 col-form-label"
              >
                Password:
              </label>
              <div className="col-sm-10 col-md-8 col-lg-9">
                <input
                  id="password"
                  className="form-control"
                  maxLength="20"
                  type="password"
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
              <a style={{ fontSize: "small" }} href="#h">
                Forgotten Password?
              </a>
            </div>
            <div>
              <a
                style={{ fontSize: "small" }}
                className="pull-left"
                href="#http"
              >
                No account? Sign up
              </a>
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
  }
}

export default LoginForm;
