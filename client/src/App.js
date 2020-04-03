import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Post from './pages/post/post'
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/nav/NavBar";
import Profile from './components/Profile'
import { useAuth0 } from "./react-auth0-spa";
import './App.css';




class App extends Component {
  render() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/post" component={Post} />

          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
    );
  };
};

export default App;
