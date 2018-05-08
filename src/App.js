import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Routes from "./Routes";
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="App">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
