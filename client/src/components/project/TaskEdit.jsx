import React, { Component } from "react";
import "../../style/css/main.css";
import { PropTypes } from "prop-types";
import { timingSafeEqual } from "crypto";

class TaskEdit extends Component {
  static propTypes = {
    projectName: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask() {}

  render() {
    return (
      <div className="col-lg-5 col-md-5">
        <div
          className="panel panel-default"
          style={{
            marginTop: "5rem",
            backgroundColor: "white"
          }}
        >
          <form onSubmit={this.handleAddTask}>
            <div className="form-group">
              <div className="task-header">
                <h2 className="task-header__title">Add</h2>
                <label
                  for="TaskNameInput"
                  className="task-header__project-name"
                >
                  {this.props.projectName}
                </label>
                <input
                  className="form-control"
                  placeholder="Task name..."
                  id="TaskNameInput"
                />
              </div>
            </div>
            <div className="from-group">Budget</div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskEdit;
