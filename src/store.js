import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import recipeReducer from './reducers/recipeReducer'
import scheduleReducer from './reducers/scheduleReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  recipes: recipeReducer,
  schedule: scheduleReducer,
  user: userReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

window.appStore = store

export default store