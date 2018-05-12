import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Routes from "./Routes";
import RecipeService from './services/RecipeService'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.file = null;
    this.state = {
      filter: '',
      recipes: {
        Items: [
          {
            id: 'asdf',
            name: 'nomen'
          },
          {
            id: 'woop',
            name: 'shoop'
          }
        ]
      }
    };
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
  }

  getRecipes() {
    return RecipeService.getAll()
  }

  render() {
    const recipes = this.state.recipes
    return (
      <div className="App">
        <NavBar />
        <Routes childProps={recipes} />
      </div>
    );
  }
}

export default App;
