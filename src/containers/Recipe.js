import React, { Component } from "react";
import RecipeService from '../services/RecipeService'
import "./Home.css";

export default class Recipe extends Component {
  constructor(props) {
    super(props);


    this.state = {
      recipe: null
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
    if (!this.state.recipe) {
      return
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

