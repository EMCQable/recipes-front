import userService from '../services/Users'

const initState =
  {
    Items: [{
      schedule:
        [{
          date: {
            start: '2018-05-25'
          },
          food: {
            name: 'stuff',
            servings: '5'
          }
        }],
      settings: { servingsPerDay: '3' }
    }
    ],
    ready: false,
  }

const scheduleReducer = (state = initState, action) => {
  switch (action.type) {
    case 'NEW_COOK':
      return { ...state, schedule: [...state.schedule, action.data] }
    case 'CHANGE_SETTINGS':
      console.log(state)
      console.log(action)
      return { ...state, settings: { servingsPerDay: action.data } }
    case 'INIT_SCHEDULE':
      return { ...action.data, ready: true }
    default:
      return state
  }
}


export const initSchedule = () => {
  return async (dispatch) => {
    const schedule = await userService.getUser('1')
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

export const changeDailyServings = (content) => {
  return async (dispatch) => {
    const settings = { settings: { servingsPerDay: content } }
    const servings = await userService.update('1', settings)
    dispatch({
      type: 'CHANGE_SETTINGS',
      data: content
    })
  }
}

export default scheduleReducer