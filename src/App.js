import React from "react";
import Header from "../src/Header";
import Main from "./Main";
import Add from "./Add";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Header />
              <Main />
            </Route>
            <Route exact path="/Add.js">
              <Add />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
