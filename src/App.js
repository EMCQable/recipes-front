import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Routes from "./Routes";
import RecipeService from './services/Recipes'
import { Auth, API } from "aws-amplify";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.file = null;
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      user: {},
      recipes: {
        Items: [
        ]
      }
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  async componentDidMount() {
    try {
      let recipes = await this.getRecipes();
      this.setState({
        recipes
      });
    } catch (e) {
      alert(e);
    }

    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true);
        const user = await API.get("users", "/users/1")
        this.setState({user})
      }
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }

  getRecipes() {
    return RecipeService.getAll()
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      recipes: this.state.recipes,
      userHasAuthenticated: this.userHasAuthenticated,
      user: this.state.user
    };
    return (
      !this.state.isAuthenticating &&
      <div className="App">
        <NavBar authentication={childProps} />
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App
