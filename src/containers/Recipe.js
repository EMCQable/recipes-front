import React, { Component } from "react";
import RecipeService from '../services/RecipeService'
import { Glyphicon } from "react-bootstrap"
import ScheduleForCook from '../components/ScheduleForCook'
import "./Recipe.css";

export default class Recipe extends Component {
  constructor(props) {
    super(props);


    this.state = {
      recipe: {},
      loaded: false
    };
  }

  async componentDidMount() {
    try {
      let recipe = await this.getRecipe();
      recipe = recipe.Items
      recipe = recipe[0]

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
    if (!this.state.recipe) {
      return <h1>There doesn't appear to be a recipe in here.</h1>
    }
    const recipe = this.state.recipe
    return (
      <div>
        <h1>{recipe.name}</h1>
        {recipe.ingredients.map(ingredient => <p key={ingredient}>{ingredient}</p>)}
        <ScheduleForCook recipe={this.state.recipe} user={this.props.user}/>
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

