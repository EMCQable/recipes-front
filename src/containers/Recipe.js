import React, { Component } from "react";
import RecipeService from '../services/RecipeService'
import "./Home.css";

export default class Recipe extends Component {
  constructor(props) {
    super(props);


    this.state = {
      recipe: []
    };
  }

  async componentDidMount() {
    try {
      let recipe = await this.getRecipe();
      recipe = recipe.Items

      this.setState({
        recipe
      });
    } catch (e) {
      alert(e);
    }
  }

  getRecipe() {
    return RecipeService.getRecipe(this.props.match.params.id)
  }

  showRecipe() {
    console.log(this.state.recipe[0])
    if (!this.state.recipe[0]) {
      return <h1>There doesn't appear to be a recipe in here.</h1>
    }
    let recipe = this.state.recipe
    recipe = recipe[0]
    return (
      <div>
        <h1>{recipe.name}</h1>
        <p>{recipe.ingredients}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          {this.showRecipe()}
        </div>
      </div>
    );
  }
}

