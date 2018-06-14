import React, { Component } from "react";

class LoginContent extends Component {
  render() {
    return (
      <div>
        <h2 style={{ color: "#666", fontSize: "1rem" }}>LATEST UPDATE </h2>
        <strong style={{ color: "#999", fontSize: "0.9rem" }}>
          JUNE 13 2018
        </strong>
        <p style={{ color: "#666" }}>
          <a
            style={{ color: "#333" }}
            href="https://www.timecamp.com/blog/index.php/2018/06/the-lazy-project-manager-podcast/"
          >
            Stay on Top of Your Work with The Lazy Project Manager! [PODCAST
            EPISODE #26]
          </a>
        </p>
        <p style={{ color: "#999", fontSize: "0.9rem" }}>
          Another Wednesday, another episode of our podcast! Are you a Project
          Manager? Do you like…
        </p>
      </div>
    );
  }
}

export default LoginContent;
