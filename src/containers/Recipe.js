import React, { Component } from 'react'
import RecipeService from '../services/Recipes'
import { Glyphicon } from 'react-bootstrap'
import ScheduleForCook from '../components/ScheduleForCook'
import { connect } from 'react-redux'
import './Recipe.css'

class Recipe extends Component {
  constructor(props) {
    super(props)


    this.state = {
      recipe: {},
      loaded: false
    }
  }

  componentDidMount = async () => {
    try {
      let recipe = await this.getRecipe()
      recipe = recipe.Items
      recipe = recipe[0]

      this.setState({
        recipe,
        loaded: true
      })
    } catch (e) {
      alert(e)
    }
  }

  getRecipe() {
    return RecipeService.getRecipe(this.props.match.params.id)
  }

  showRecipe() {
    if (!this.state.loaded) {
      return <Glyphicon glyph='refresh' className='spinning' />
    }
    if (!this.state.recipe) {
      return (<h1>There does not appear to be a recipe in here.</h1>)
    }
    const recipe = this.state.recipe
    return (
      <div>
        <h1>{recipe.name}</h1>
        {recipe.ingredients.map(ingredient => <p key={ingredient}>{ingredient}</p>)}
        <p>{recipe.servings} servings</p>
        {this.props.isAuthenticated && <ScheduleForCook recipe={this.state.recipe} />}
      </div>
    )
  }


  render() {
    return (
      <div className='Home'>
        <div className='lander'>
          {this.showRecipe()}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe)


