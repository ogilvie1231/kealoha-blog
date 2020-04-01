import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/nav/NavBar";
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
    );
  };
};

export default App;
