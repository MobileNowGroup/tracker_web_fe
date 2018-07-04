import React, { Component } from "react";
import "../style/css/main.css";
import LoginForm from "./LoginForm";
import LoginContent from "./LoginContent";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../reducers/Auth.redux";
import { bindActionCreators } from "redux";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(email, password) {
    // console.log(email);
    // console.log(password);
    this.props.loginAction();
  }

  render() {
    const redirectToTracker = <Redirect to="/tracker" />;
    const container = (
      <div className="login-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-md-1">
              <LoginContent />
            </div>
            <div className="col-sm-9 col-lg-4 col-md-6 offset-md-1">
              <LoginForm callbackParent={this.onLogin.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
    const isAuth = Boolean(this.props.isAuth);
    return isAuth ? redirectToTracker : container;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginAction }, dispatch);
}

function mapStateToProps(state) {
  return {
    isAuth: state.authReducer.isAuth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
