import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";

import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

import Header from "./components/header.jsx";
import Title from "./components/title.jsx";
import About from "./components/about.jsx";
import VirtualAdoption from "./components/virtualAdoption.jsx";
import Help from "./components/help.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

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
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={MainPage} />
        <Route path='/adoptions' component={AdoptionsPage} />
        <Route path='/cat-profile' component={CatProfilePage} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  };
};


ReactDOM.render(<App />, document.getElementById("app"));


// <div className="container">
//   <AdoptionsPage />
//   <Header />
//   <Title />
//   <About />
//   <VirtualAdoption />
//   <Help />
//   <Contact />
//   <Footer />
// </div>
