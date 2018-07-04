import React, { Component } from "react";
import "../../style/css/main.css";

class ProjectEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["a", "b", "c", "d"],
      isAdd: false,
      projectName: ""
    };

    this.handleAddProject = this.handleAddProject.bind(this);
    this.updateProjectName = this.updateProjectName.bind(this);
  }

  /** 添加project */
  handleAddProject() {
    this.setState({
      isAdd: !this.state.isAdd
    });
  }

  /**取消 */
  handleCancel() {
    this.setState({
      isAdd: false
    });
  }

  handleCreateProject() {
    const arr = this.state.list;
    arr.push(this.state.projectName);
    this.setState({
      list: arr,
      isAdd: false
    });
  }

  updateProjectName(event) {
    this.setState({
      projectName: event.target.value
    });
  }

  render() {
    let projectItems = this.state.list.map(function(project) {
      return (
        <div className="projectItem">
          <div className="projectItem__leftContent">
            <text className="projectItem__title"> {project} </text>
            <text className="projectItem__accountInfo">UserAccount</text>
          </div>
          <div className="projectItem__rightContent">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              style={{ marginRight: "1rem" }}
            >
              Add Task
            </button>
            <button type="button" className="btn btn-outline-primary btn-sm">
              Time report
            </button>
          </div>
        </div>
      );
    });

    const addContainer = (
      <div className="add-project-container">
        <input
          type="text"
          className="form-control"
          id="addProjectInput"
          placeholder="Enter the name for a new project or task"
          style={{ width: "60%" }}
          autoFocus
          onChange={event => this.updateProjectName(event)}
        />
        <button
          type="submit"
          className="btn btn-success btn-sm"
          onClick={this.handleCreateProject.bind(this)}
        >
          + Create new project
        </button>
        <button
          type="button"
          className="btn btn-light btn-sm"
          onClick={this.handleCancel.bind(this)}
        >
          Cancel
        </button>
      </div>
    );

    const addButton = (
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={this.handleAddProject}
      >
        Add Project
      </button>
    );

    return (
      <div className="col-lg-7 col-md-7">
        <div className="panel panel-default" style={{ marginTop: "1.5rem" }}>
          <h3>Projects</h3>
          <div
            className=""
            style={{
              backgroundColor: "#ffffff",
              marginTop: "1.5rem"
            }}
          >
            <div
              className="panel-heading"
              style={{
                padding: "1rem",
                borderBottom: "1px solid #f0f0f0",
                height: "4.5rem"
              }}
            >
              {this.state.isAdd ? null : addButton}
            </div>
            <div className="panel-body">
              {this.state.isAdd ? addContainer : null}
              {projectItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectEdit;
