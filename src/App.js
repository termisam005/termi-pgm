import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss";
import routes from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(route => {
          return (
            <Route key={route.path} path={route.path} exact>
              <route.component />
            </Route>
          )
        })}
      </Switch>
    </Router>
  );
}

export default App;
