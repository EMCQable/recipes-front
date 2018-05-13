import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const showRecipes = ({recipes}) => {
  return (
    <div>
      <ul>
        {recipes.Items.map(element => {
          const link = `recipes/${element.id}`;
          return <li key={element.id} ><Link to={link} > {element.name}</Link></li>
        })}
      </ul>
    </div>
  )
}

const Search = (props) => {
  return (
    <div className="Search" >
      <div className="lander">
        <h1>Recipes</h1>
        <p>Search for recipes</p>
        {showRecipes(props)}
      </div>
    </div >
  )
}

export default Search