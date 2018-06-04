import React, { Component } from "react";
import { connect } from 'react-redux'
import "./Home.css";

class User extends Component {

  render() {
    return (
      <div className="Preferences">
        <div className="lander">
          <h1>Recipes</h1>
          <p>Settings page</p>
        </div>
      </div>
    );
  }
}

export default connect(
  
)(User)

