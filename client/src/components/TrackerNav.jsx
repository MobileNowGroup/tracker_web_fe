import React, { Component } from "react";
import "../style/css/main.css";
import { Link } from "react-router-dom";
import classname from "classnames";
import { PropTypes } from "prop-types";
import DropdownMenu from "./DropdownMenu";

// const TimeheetPath = "/timeSheet";
const ReportsPath = "/reports";
const ProjectsPath = "/projects";
const ComputerTimePath = "/computerTime";
const SettingPath = "/setting";

class TrackerNav extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      timeSheet: false,
      reports: false,
      projects: false,
      computerTime: false,
      setting: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.handleClick(this.props.path);
  }

  toggleDropdown() {
    this.setState({ hide: !this.state.hide });
  }

  handleClick = name => {
    switch (name) {
      case "/":
        this.setState({
          timeSheet: true,
          reports: false,
          projects: false,
          computerTime: false,
          setting: false,
          show: false
        });
        break;
      case ReportsPath:
        this.setState({
          timeSheet: false,
          reports: true,
          projects: false,
          computerTime: false,
          setting: false,
          show: false
        });
        break;
      case ProjectsPath:
        this.setState({
          timeSheet: false,
          reports: false,
          projects: true,
          computerTime: false,
          setting: false,
          show: false
        });
        break;
      case ComputerTimePath:
        this.setState({
          timeSheet: false,
          reports: false,
          projects: false,
          computerTime: true,
          setting: false,
          show: false
        });
        break;
      case SettingPath:
        this.setState({
          timeSheet: false,
          reports: false,
          projects: false,
          computerTime: false,
          setting: true,
          show: false
        });
        break;
      case "/User":
        this.setState({
          timeSheet: false,
          reports: false,
          projects: false,
          computerTime: false,
          setting: false,
          show: !this.state.show
        });
        break;
      default:
        this.setState({
          timeSheet: false,
          reports: false,
          projects: false,
          computerTime: false,
          setting: false,
          show: false
        });
        break;
    }
  };

  render() {
    const url = this.props.url;
    return (
      <nav
        class="navbar navbar-expand-lg navbar-dark navbar-fixed-top"
        style={{ backgroundColor: "#3D9259" }}
      >
        <div class="container">
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <Link
                to={`${url}`}
                className={classname("nav-link", {
                  active: this.state.timeSheet
                })}
                onClick={() => this.handleClick("/")}
              >
                Timesheet
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to={`${url}${ReportsPath}`}
                // to={`${match.url}${ReportsPath}`}
                className={classname("nav-link", {
                  active: this.state.reports
                })}
                onClick={() => this.handleClick(ReportsPath)}
              >
                Reports
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to={`${url}${ProjectsPath}`}
                className={classname("nav-link", {
                  active: this.state.projects
                })}
                onClick={() => this.handleClick(ProjectsPath)}
              >
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to={`${url}${ComputerTimePath}`}
                className={classname("nav-link", {
                  active: this.state.computerTime
                })}
                onClick={() => this.handleClick(ComputerTimePath)}
              >
                Computer Time
              </Link>
            </li>
          </ul>
          <ul class="nav navbar-nav pull-sm-right m-r-0 hidden-xs-down">
            <li class="nav-item">
              <Link
                to={`${url}${SettingPath}`}
                className={classname("nav-link", {
                  active: this.state.setting
                })}
                onClick={() => this.handleClick(SettingPath)}
              >
                Setting
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => this.handleClick("/User")}
              >
                Dropdown
              </a>
              <DropdownMenu
                show={this.state.show}
                onClick={this.handleClick.bind(this)}
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default TrackerNav;
