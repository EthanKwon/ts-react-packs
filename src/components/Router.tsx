import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "../routes/Home";
import TodoListPresenter from "../routes/TodoList/TodoListPresenter";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/todolist" exact component={TodoListPresenter} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
