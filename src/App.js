import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import Routes from "./Routes";
import Footer from './components/Footer'
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
      recipes: {},
      user: {
        Items: [{
          schedule:
            [{
              date: {
                start: '2018-05-25'
              },
              food: {
                name: 'stuff',
                servings: '5'
              }
            }],
          settings: { servingsPerDay: '3' }
        }
        ]
      }
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  async componentDidMount() {
    try {
      await this.props.checkSession()
      await this.props.initRecipes()
      //let recipes = await this.getRecipes()
      //const user = await userService.getUser('1')
      //this.setState({
        //recipes,
        //user
      //});
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
      //recipes: this.state.recipes,
      userHasAuthenticated: this.userHasAuthenticated,
      user: this.state.user
    };
    return (
      !this.props.isAuthenticating &&
      <div className="App">
        <NavBar />
        <Routes childProps={childProps} />
        <Footer />
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
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
