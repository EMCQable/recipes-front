import { Auth, API } from "aws-amplify";

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
    const recipes = await API.get()
    dispatch({
      type: 'INIT_SCHEDULE',
      data: recipes
    })
  }
}

export const addCook = (content) => {
  return async (dispatch) => {
    const recipe = await API.create(content)
    dispatch({
      type: 'NEW_COOK',
      data: recipe
    })
  }
}

export default scheduleReducer