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

import NotFound from "./components/notFound.jsx";
import AdoptionsPage from "./adoptions.jsx";
import MainPage from "./mainPage.jsx";
import CatProfilePage from "./catProfilePage.jsx";
import Template from "./components/template.jsx";

import "../scss/style.scss";


class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>

        <Route path='/' component={Template}>
          <IndexRoute component={MainPage} />
          <Route path='/adoptions' component={AdoptionsPage}/>
          <Route path='/cat-profile/:id' component={CatProfilePage}/>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  };
};

ReactDOM.render(
  <App/>, document.getElementById("app"));
