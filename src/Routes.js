import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import User from "./containers/User";
import Search from "./containers/Search";
import NotFound from "./containers/NotFound";
import Recipe from "./containers/Recipe";
import CreateRecipe from "./containers/CreateRecipe";
import Planner from "./containers/Planner";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import AppliedRoute from "./components/AppliedRoute";


export default ({childProps}) =>
  <Switch>
    <Route path="/" exact component={Home} />
    <AppliedRoute path="/create" exact component={CreateRecipe} props={childProps}/>
    <Route path="/plan" exact component={Planner} />
    <Route path="/users/:id" exact component={User} />
    <AppliedRoute path="/search" exact component={Search} props={childProps} />
    <AppliedRoute path="/recipes/:id" component={Recipe} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <Route component={NotFound} />
  </Switch>;

