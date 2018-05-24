import React, { Component } from "react";
import RecipeService from '../services/RecipeService'
import { Glyphicon } from "react-bootstrap";
import "./Recipe.css";

export default class Recipe extends Component {
  constructor(props) {
    super(props);


    this.state = {
      recipe: [],
      loaded: false
    };
  }

  async componentDidMount() {
    try {
      let recipe = await this.getRecipe();
      recipe = recipe.Items

      this.setState({
        recipe,
        loaded: true
      });
    } catch (e) {
      alert(e);
    }
  }

  getRecipe() {
    return RecipeService.getRecipe(this.props.match.params.id)
  }

  showRecipe() {
    if (!this.state.loaded) {
      return <Glyphicon glyph="refresh" className="spinning" />
    }
    if (!this.state.recipe[0]) {
      return <h1>There doesn't appear to be a recipe in here.</h1>
    }
    let recipe = this.state.recipe
    recipe = recipe[0]
    return (
      <div>
        <h1>{recipe.name}</h1>
        {recipe.ingredients.map(ingredient =><p key={ingredient}>{ingredient}</p>)}
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
    
