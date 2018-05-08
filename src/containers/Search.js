import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Search extends Component {
  render() {
    return (
      <div className="Search">
        <div className="lander">
          <h1>Recipes</h1>
          <p>Search for recipes</p>
          <Link to="/Recipes/1" />
        </div>
      </div>
    );
  }
}

