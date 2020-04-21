import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Post from './pages/post/post'
import Diy from './pages/diys/diys'
import About from './pages/about/about'
import Videos from './pages/videos/videos'
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/nav/NavBar";
import Profile from './components/Profile';
import Footer from './components/Footer/footer';
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
          <PrivateRoute exact path="/post" component={Post} />
          <Route exact path="/about" component={About} />
          <Route exact path="/diys" component={Diy} />
          <Route exact path="/videos" component={Videos} />

          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </div>
    );
  };
};

export default App;
