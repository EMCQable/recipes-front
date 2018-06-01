import { Auth, API } from "aws-amplify";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_USER':
      return [...state, action.data]
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return []
    default:
      return state
  }
}


export const createUser = () => {
  return async (dispatch) => {
    dispatch({
      type: 'NEW_USER',
    })
  }
}

export const login = (content) => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGIN',
    })
  }
}

export const logout = (content) => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGOUT'
    })
  }
}

export default userReducer