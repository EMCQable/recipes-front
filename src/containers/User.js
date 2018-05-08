import React, { Component } from "react";
import "./Home.css";

export default class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="User">
        <div className="lander">
          <h1>Recipes</h1>
          <p>User page</p>
        </div>
      </div>
    );
  }
}

