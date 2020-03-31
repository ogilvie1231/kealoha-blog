import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/nav/NavBar";

class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
    );
  };
};

export default App;
