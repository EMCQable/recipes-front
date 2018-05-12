import React, { Component } from "react";
import "./CreateRecipe.css";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import RecipeService from '../services/RecipeService'

export default class CreateRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      ingredient1: "",
      ingredient2: "",
    };
  }

  validateForm() {
    return (
      this.state.name.length > 0 &&
      this.state.ingredient1.length > 0 &&
      this.state.ingredient2.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const Item = {
      Item: {
        name: this.state.name,
        ingredients:[
          this.state.ingredient1,          
          this.state.ingredient2,
        ]
      }
    }

    console.log(await RecipeService.create(Item))

    this.setState({ name: ""});
    this.setState({ ingredient1: ""});
    this.setState({ ingredient2: ""});
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

