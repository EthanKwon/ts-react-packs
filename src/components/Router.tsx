import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "../routes/Home";
import TodoList from "../routes/TodoList";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/todolist" exact component={TodoList} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
