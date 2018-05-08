import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import User from "./containers/User";
import Search from "./containers/Search";
import NotFound from "./containers/NotFound";
import Recipe from "./containers/Recipe";


export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/users/:id" exact component={User} />
    <Route path="/search" exact component={Search} />
    <Route path="/recipes/:id" component={Recipe} />
    <Route component={NotFound} />
  </Switch>;

