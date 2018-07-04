import React, { Component } from "react";
import SignupForm from "./SignupForm";
import "../style/css/main.css";
import { Redirect } from "react-router-dom";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({
      flag: true
    });
  }

  render() {
    let flag = this.state.flag;
    let redirectToLogin = <Redirect to="/auth/login" />;
    const content = (
      <div className="register-contanier">
        <div className="contanier">
          <div className="row">
            <div className="register-form-container">
              <SignupForm />
            </div>
            <div
              className="col-lg-1 offset-md-11"
              style={{
                paddingTop: "2rem",
                paddingLeft: "0"
              }}
            >
              <button
                className="btn btn-light"
                href="#"
                style={{
                  backgroundColor: "white"
                }}
                onClick={this.login}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    return flag ? redirectToLogin : content;
  }
}

export default SignupPage;
