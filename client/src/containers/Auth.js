import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import SignupPage from "../components/SignupPage";
import LoginPage from "../components/LoginPage";

// function Home() {
//   return <h1>首页</h1>;
// }

class Auth extends Component {
  render() {
    const match = this.props.match;
    return (
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/login`}>登录</Link>
          </li>
          <li>
            <Link to={`${match.url}/register`}>注册</Link>
          </li>
        </ul>
        <Route path={`${match.url}/login`} exact component={LoginPage} />
        <Route path={`${match.url}/register`} component={SignupPage} />
      </div>
    );
  }
}

export default Auth;
