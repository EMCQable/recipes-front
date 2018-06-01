import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import Routes from "./Routes";
import RecipeService from './services/Recipes'
import { Auth, API } from "aws-amplify";
import { connect } from 'react-redux'
import { checkSession } from './reducers/userReducer'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.file = null;
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      user:  {},
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
    this.props.checkSession()

    try {
      let recipes = await this.getRecipes();
      this.setState({
        recipes
      });
    } catch (e) {
      alert(e);
    }
  }

  getRecipes() {
    return RecipeService.getAll()
  }

  render() {
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
  checkSession
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    isAuthenticating: state.user.isAuthenticating
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
