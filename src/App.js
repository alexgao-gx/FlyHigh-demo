import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddJobSeeker from "./components/AddJobSeeker";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          FlyHigh Job Seeker Demo
        </a>
      </nav>
      <div className="container mt-3">
        <h2>Job Seeker Registration</h2>
        <Switch>
          <Route exact path="" component={AddJobSeeker} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
