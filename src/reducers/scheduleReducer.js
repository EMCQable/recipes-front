import userService from '../services/Users'

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
    const schedule = await userService.getUser('1')
    console.log(schedule)
    dispatch({
      type: 'INIT_SCHEDULE',
      data: schedule
    })
  }
}

export const addCook = (content) => {
  return async (dispatch) => {
    const recipe = await userService.update(content)
    dispatch({
      type: 'NEW_COOK',
      data: recipe
    })
  }
}

export default scheduleReducer