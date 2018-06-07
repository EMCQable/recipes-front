import React, { Component } from 'react';
import './CreateRecipe.css';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton'
import { connect } from 'react-redux'
import { addRecipe } from '../reducers/recipeReducer'

class CreateRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      ingredients: 2,
      ingredient1: '',
      ingredient2: '',
      servings: 4,
      loading: false
    };
  }

  componentDidMount() {
    this.setIngredientStates()
  }

  validateForm() {
    let ingredients = true
    for (let i = 1; i <= this.state.ingredients; i++) {
      const ingredient = `ingredient${i}`
      if (this.state[ingredient].length === 0)
        ingredients = false
    }
    return (
      this.state.name.length > 0 &&
      ingredients &&
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
    event.preventDefault()
    this.setState({
      loading: true
    });
    let ingredients = []
    for (let i = 1; i <= this.state.ingredients; i++) {
      const ingredient = `ingredient${i}`
      ingredients.push(this.state[ingredient])
      this.setState({
        [ingredient]: ''
      })
    }

    const Item = {
      name: this.state.name,
      ingredients,
      servings: this.state.servings.toString()
    }

    //const newly = await RecipeService.create(Item)
    //this.props.recipes.Items.push(newly)
    await this.props.addRecipe(Item)

    this.setState({
      name: '',
      servings: 4,
      loading: false
    });
  }

  removeIngredient = () => () => {
    if (this.state.ingredients > 1) {
      this.setState({
        ingredients: (this.state.ingredients - 1)
      })
    }
  }

  newIngredient = () => () => {
    const moreIngredients = (this.state.ingredients + 1)
    const newIngredient = `ingredient${moreIngredients}`
    this.setState({
      ingredients: moreIngredients,
      [newIngredient]: ''
    })
  }

  validateServings() {
    if (this.state.servings > 0 &&
      this.state.servings < 11) {
      return 'success'
    }
    return 'error'
  }

  setIngredientStates() {
    for (let i = 1; i <= this.state.ingredients; i++) {
      const formId = `ingredient${i}`
      this.setState({
        [formId]: ''
      })
    }
  }

  ingredientForms() {
    let ingredientForms = []
    for (let i = 1; i < this.state.ingredients + 1; i++) {
      const formId = `ingredient${i}`
      ingredientForms.push(
        <FormGroup key={i} controlId={formId} bsSize='large'>
          <ControlLabel>Ingredient {i}</ControlLabel>
          <FormControl
            type='text'
            value={this.state[formId]}
            onChange={this.handleChange}
          />
        </FormGroup>
      )
    }
    return ingredientForms
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId='name' bsSize='large'>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            autoFocus
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId='servings' bsSize='large' validationState={this.validateServings()}>
          <ControlLabel>Servings</ControlLabel>
          <FormControl
            type='number'
            value={this.state.servings}
            onChange={this.handleServingsChange}
          />
        </FormGroup>
        {this.ingredientForms()}
        <Button
          block
          bsSize='large'
          text=''
          onClick={this.removeIngredient()}
        >Remove Ingredient</Button>
        <Button
          block
          bsSize='large'
          text=''
          onClick={this.newIngredient()}
        >New Ingredient</Button>
        <LoaderButton
          isLoading={this.state.loading}
          loadingText='Submitting...'
          block
          bsSize='large'
          disabled={!this.validateForm()}
          type='submit'
          text='Create Recipe'
        ></LoaderButton>
      </form>
    );
  }

  render() {
    return (
      <div className='Signup'>
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