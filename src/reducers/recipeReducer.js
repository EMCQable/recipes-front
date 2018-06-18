import RecipeService from '../services/Recipes2'

const recipeReducer = (state = { Items: [], isFetching: false }, action) => {
  switch (action.type) {
  case 'NEW_RECIPE':
    return { Items: [...state.Items, action.data] }
  case 'INIT_RECIPES':
    return action.data
  default:
    return state
  }
}


export const initRecipes = () => {
  return async (dispatch) => {
    try {
      const recipes = await RecipeService.getAll()
      dispatch({
        type: 'INIT_RECIPES',
        data: recipes
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const addRecipe = (content) => {
  return async (dispatch) => {
    const recipe = await RecipeService.create(content)
    dispatch({
      type: 'NEW_RECIPE',
      data: recipe
    })
  }
}

export default recipeReducer