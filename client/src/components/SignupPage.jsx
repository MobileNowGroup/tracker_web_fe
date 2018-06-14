import React, { Component } from "react";
import SignupForm from "./SignupForm";
import "../style/css/main.css";

class SignupPage extends Component {
  render() {
    return (
      <div className="register-contanier">
        <div className="login-container">
          <button
            className="btn btn-light btn-sm"
            href="#"
            style={{ backgroundColor: "white" }}
          >
            Log in
          </button>
        </div>
        <div className="register-form-container">
          <div className="contanier">
            <SignupForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;
