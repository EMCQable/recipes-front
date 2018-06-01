
const scheduleReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_COOK':
      return [...state, action.data]
    case 'INIT_SCHEDULE':
      return action.data
    default:
      return state
  }
}


export const initSchedule = () => {
  return async (dispatch) => {
    dispatch({
      type: 'INIT_SCHEDULE',
      data: recipes
    })
  }
}

export const addCook = (content) => {
  return async (dispatch) => {
    const recipe = await RecipeService.create(content)
    dispatch({
      type: 'NEW_COOK',
      data: recipe
    })
  }
}

export default recipeReducer