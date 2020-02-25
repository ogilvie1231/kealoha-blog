import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home"

class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
    );
  };
};

export default App;
