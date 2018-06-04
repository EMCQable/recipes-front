import { Auth, API } from "aws-amplify";
import userService from '../services/Users'
import { initSchedule } from './scheduleReducer'


const initState = {
  user: null,
  isAuthenticated: false,
  isAuthenticating: true,
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        isAuthenticating: false
      }
    case 'LOGOUT':
      return {
        isAuthenticated: false,
        isAuthenticating: false
      }
    default:
      return state
  }
}


export const createUser = (username, password, email) => {
  return async (dispatch) => {
    await Auth.signUp({
      username,
      password,
      attributes: {
        email
      }
    })
  }
}

export const checkSession = () => {
  return async (dispatch) => {
    try {
      const session = await Auth.currentSession()
      if (session) {
        dispatch({
          type: 'LOGIN'
        })
      }
    } catch (e) {
      dispatch({
        type: 'LOGOUT'
      })

      if (e !== 'No current user') {
        alert(e);
      }
    }
  }
}

export const confirmUser = (username, password) => {
  return async (dispatch) => {
    await Auth.signIn(username, password);
    const day = new Date()

    /*await API.post("users", "/", {
      body:
        {
          Item:
            {
              created: day,
              schedule: []
            }
        }
    })*/
    await userService.create()
    dispatch(initSchedule())
    dispatch({
      type: 'LOGIN',
    })
  }
}

export const login = (username, password) => {
  return async (dispatch) => {
    await Auth.signIn(username, password);
    dispatch(initSchedule())
    dispatch({
      type: 'LOGIN',
    })
  }
}

export const logout = (content) => {
  return async (dispatch) => {
    await Auth.signOut();
    dispatch({
      type: 'LOGOUT'
    })
  }
}

export default userReducer