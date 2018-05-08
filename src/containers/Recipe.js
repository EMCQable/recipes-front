import React, { Component } from "react";
import "./Home.css";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Recipes</h1>
          <p>Recipe page</p>
        </div>
      </div>
    );
  }
}

