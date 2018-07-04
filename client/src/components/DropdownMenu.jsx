import React, { Component } from "react";
// import { Link } from "react-router-dom";
import classname from "classnames";
import "../style/css/main.css";
import { PropTypes } from "prop-types";

export default class DropdownMenu extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      userMenuopen: false
    };
  }

  // toggleDropdownMenu() {
  //   this.setState({ userMenuopen: !this.state.userMenuopen });
  // }

  handleClick = name => {
    this.props.onClick();
  };

  render() {
    return (
      <div
        className={classname("dropdown-menu", {
          show: this.props.show
        })}
        role="menu"
        aria-labelledby="dropdownMenu1"
      >
        <a
          class="dropdown-item"
          href="#Username"
          onClick={() => this.handleClick("#")}
          role="menuitem"
        >
          Username
        </a>
        <a
          class="dropdown-item"
          href="#Download"
          onClick={() => this.handleClick("#")}
        >
          Download
        </a>
        <a
          class="dropdown-item"
          href="#Help"
          onClick={() => this.handleClick("#")}
        >
          Help....
        </a>
        <div class="dropdown-divider" />
        <a
          class="dropdown-item"
          href="#5"
          onClick={() => this.handleClick("#")}
        >
          Logout
        </a>
      </div>
    );
  }
}
