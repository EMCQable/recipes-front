import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import Routes from "./Routes";
import RecipeService from './services/Recipes'
import userService from './services/Users'
import { connect } from 'react-redux'
import { checkSession } from './reducers/userReducer'
import { initRecipes } from './reducers/recipeReducer'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.file = null;
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      user: {},
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
    await this.props.checkSession()
    await this.props.initRecipes()

    try {
      let recipes = await this.getRecipes()
      const user = await userService.getUser('1')
      console.log(user)
      this.setState({
        recipes,
        user
      });
    } catch (e) {
      alert(e);
    }
    console.log(this.state)
  }

  getRecipes() {
    return RecipeService.getAll()
  }

  render() {
    console.log(this.props)
    const childProps = {
      isAuthenticated: this.props.isAuthenticated,
      recipes: this.state.recipes,
      userHasAuthenticated: this.userHasAuthenticated,
      user: this.state.user
    };
    return (
      !this.props.isAuthenticating &&
      <div className="App">
        <NavBar />
        <Routes childProps={childProps} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  checkSession,
  initRecipes,
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    isAuthenticating: state.user.isAuthenticating,
    schedule: state.schedule
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
