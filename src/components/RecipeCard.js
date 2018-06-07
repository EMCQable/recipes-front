import React from 'react'
import './RecipeCard.css'
import { Link } from 'react-router-dom'

const randomImage = () => {
  const images = [
    'url(https://public.keskofiles.com/f/k-ruoka/recipe/9710?w=400&amp;h=225&amp;fit=crop&amp;q=60)',
    'url(https://public.keskofiles.com/f/k-ruoka/recipe/9704?w=400&h=225&fit=crop&q=60)',
    'url(https://public.keskofiles.com/f/k-ruoka/recipe/9701?w=400&h=225&fit=crop&q=60)',
  ]
  return images[Math.floor(Math.random() * 3)]
}

const RecipeCard = ({ name, id }) => {
  const link = `recipes/${id}`
  return (
    <li className="recipe-card">
      <Link to={link} className="recipe-card-link" >
        <div className="recipe-card-image-container"
          style={{ backgroundImage: randomImage() }}>
        </div>
        <section className="recipe-card-overview">
          <h3 className="recipe-card-name">{name}</h3>
        </section>
      </Link>
    </li>
  )
}

export default RecipeCard