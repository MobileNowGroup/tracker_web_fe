import React, { Component } from "react";
import "../style/css/main.css";
import LoginForm from "./LoginForm";
import LoginContent from "./LoginContent";

class LoginPage extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-md-1">
              <LoginContent />
            </div>
            <div className="col-sm-8 col-lg-4 col-md-4 offset-md-1">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
