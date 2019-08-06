import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import AuthPage from "../components/AuthPage";
import HomePage from "../components/HomePage";
import NavBar from "../components/NavBar";
import NotFoundPage from "../components/NotFoundPage";

export const history = createBrowserHistory();

const AppRouter = props => (
  <Router history={history}>
    <NavBar />
    <main className="main-content">
      <Switch>
        <Route component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  </Router>
)

const mapStateToProps = (state) => {
  return {
    token: state.token
  };
}

export default connect(mapStateToProps)(AppRouter);