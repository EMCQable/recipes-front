import React from 'react'
//import { Link } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import './Search.css'
import { connect } from 'react-redux'

const showRecipes = ({ recipes }) => {
  return (
    <div>
      <ul className='recipeCards'>
        {recipes.Items.map(element => {
          //return <li key={element.id} ><Link to={link} > {element.name}</Link></li>
          return <RecipeCard key={element.id} id={element.id} name={element.name} />
        })}
      </ul>
    </div>
  )
}

const Search = (props) => {
  return (
    <div className='Search' >
      <div className='lander'>
        <h1>Recipes</h1>
        <p>Search for recipes</p>
        {showRecipes(props)}
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(
  mapStateToProps
)(Search)