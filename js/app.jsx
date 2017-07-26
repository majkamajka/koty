import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";

import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';

import AdoptionsPage from "./adoptions.jsx";
import MainPage from "./mainPage.jsx";
import CatProfilePage from "./catProfilePage.jsx";

import "../scss/style.scss";

class NotFound extends React.Component {
  render() {
    return <h1>404, Nothing is here</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={MainPage}/>
        <Route path='/adoptions' component={AdoptionsPage}/>
        <Route path='/cat-profile/:id' component={CatProfilePage}/>
        <Route path='*' component={NotFound}/>
      </Router>
    )
  };
};

ReactDOM.render(
  <App/>, document.getElementById("app"));
