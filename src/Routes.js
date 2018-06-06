import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import User from './containers/User'
import Search from './containers/Search'
import NotFound from './containers/NotFound'
import Recipe from './containers/Recipe'
import CreateRecipe from './containers/CreateRecipe'
import Planner from './containers/Planner'
import Login from './containers/Login'
import Signup from './containers/Signup'
import AppliedRoute from './components/AppliedRoute'


const Routes = ({ childProps }) => {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
        <AppliedRoute path='/create' exact component={CreateRecipe} />
        <AppliedRoute path='/plan' exact component={Planner} />
        <Route path='/settings' exact component={User} />
        <AppliedRoute path='/search' exact component={Search} />
        <AppliedRoute path='/recipes/:id' component={Recipe} />
        <AppliedRoute path='/login' exact component={Login} />
        <AppliedRoute path='/signup' exact component={Signup} props={childProps} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default Routes