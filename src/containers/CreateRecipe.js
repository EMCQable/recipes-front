import React, { Component } from "react";
import "./CreateRecipe.css";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import RecipeService from '../services/Recipes'
import { connect } from 'react-redux'
import { addRecipe } from '../reducers/recipeReducer'

class CreateRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      ingredient1: "",
      ingredient2: "",
      servings: 4,
    };
  }

  validateForm() {
    return (
      this.state.name.length > 0 &&
      this.state.ingredient1.length > 0 &&
      this.state.ingredient2.length > 0 &&
      Number.isInteger(this.state.servings) &&
      this.state.servings > 0 &&
      this.state.servings < 11
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleServingsChange = event => {
    this.setState({
      servings: Number(event.target.value)
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const Item = {
      name: this.state.name,
      ingredients: [
        this.state.ingredient1,
        this.state.ingredient2,
      ],
      servings: this.state.servings.toString()
    }

    console.log(Item)

    //const newly = await RecipeService.create(Item)
    //this.props.recipes.Items.push(newly)
    this.props.addRecipe(Item)

    this.setState({
      name: "",
      ingredient1: "",
      ingredient2: "",
      servings: 4,
    });
  }

  validateServings() {
    if (this.state.servings > 0 &&
      this.state.servings < 11) {
      return 'success'
    }
    return 'error'
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="name" bsSize="large">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            autoFocus
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="servings" bsSize="large" validationState={this.validateServings()}>
          <ControlLabel>Servings</ControlLabel>
          <FormControl
            type="number"
            value={this.state.servings}
            onChange={this.handleServingsChange}
          />
        </FormGroup>
        <FormGroup controlId="ingredient1" bsSize="large">
          <ControlLabel>Ingredient 1</ControlLabel>
          <FormControl
            value={this.state.ingredient1}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="ingredient2" bsSize="large">
          <ControlLabel>Ingredient 2</ControlLabel>
          <FormControl
            value={this.state.ingredient2}
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          text="Signup"
        >Add</Button>
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.renderForm()}
      </div>
    );
  }
}

const mapDispatchToProps = {
  addRecipe,
}

export default connect(
  null,
  mapDispatchToProps
)(CreateRecipe)