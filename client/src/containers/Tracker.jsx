import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import TrackerNav from "../components/TrackerNav";
import "../style/css/main.css";
import Projects from "./Project";

function TimeSheet() {
  return <h1>TimeSheet</h1>;
}

function Reports() {
  return <h1>Reports</h1>;
}

// function Projects() {
//   return <h1>Projects</h1>;
// }

function ComputerTime() {
  return <h1>Computer Time</h1>;
}

function Settings() {
  return <h1>Settings</h1>;
}

// function Help() {
//   return <h1>Help</h1>;
// }

function User() {
  return <h1>User</h1>;
}

// function TimeTracker() {
//   return <h1>Tracker</h1>;
// }

class Tracker extends Component {
  render() {
    const match = this.props.match;
    return (
      <div className="app-contanier">
        <TrackerNav url={match.url} />
        <Route path={`${match.url}`} exact component={TimeSheet} />
        <Route path={`${match.url}/reports`} component={Reports} />
        <Route path={`${match.url}/projects`} component={Projects} />
        <Route path={`${match.url}/computerTime`} component={ComputerTime} />
        <Route path={`${match.url}/setting`} component={Settings} />
        <Route path={`${match.url}/user`} component={User} />
      </div>
    );
  }
}

export default Tracker;
