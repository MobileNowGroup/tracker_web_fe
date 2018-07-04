import React, { Component } from "react";
import "../style/css/main.css";
import ProjectEdit from "../components/project/ProjectEdit";
import TaskEdit from "../components/project/TaskEdit";

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-12 col-md-12">
          <div className="row">
            <ProjectEdit />
            <TaskEdit projectName="CC" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
