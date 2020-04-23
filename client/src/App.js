import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import HomeP from "./protectedPages/home/home";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Post from './pages/post/post'
import Diy from './pages/diys/diys'
import DiyP from './protectedPages/diys/diys'
import About from './pages/about/about'
import Videos from './pages/videos/videos'
import VideosP from './protectedPages/videos/videos'
import Trips from './pages/trips/trips'
import TripsP from './protectedPages/trips/trips'
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
          <Route exact path="/about" component={About} />
          <Route exact path="/diys" component={Diy} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/trips" component={Trips} />
          <PrivateRoute exact path="/p" component={HomeP} />
          <PrivateRoute exact path="/diysp" component={DiyP} />
          <PrivateRoute exact path="/videosp" component={VideosP} />
          <PrivateRoute exact path="/tripsp" component={TripsP} />
          <PrivateRoute exact path="/post" component={Post} />
          {/* <PrivateRoute exact path="/postp" component={Post} /> */}
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </div>
    );
  };
};

export default App;
