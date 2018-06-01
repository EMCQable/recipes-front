import { Auth, API } from "aws-amplify";
import userService from '../services/Users'

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
      if (await Auth.currentSession()) {
        dispatch({
          type: 'LOGIN'
        })
      } else {
        console.log('woop')
        dispatch({
          type: 'LOGOUT'
        })
      }
    }
    catch (e) {
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

    await API.post("users", "/", {
      body:
        {
          Item:
            {
              created: day,
              schedule: []
            }
        }
    })
    await userService.create()

    dispatch({
      type: 'LOGIN',
    })
  }
}

export const login = (username, password) => {
  return async (dispatch) => {
    await Auth.signIn(username, password);
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