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


import "../scss/style.scss";



class MainPage extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Title />
        <About />
        <VirtualAdoption />
        <Help />
        <Contact />
        <Footer />
      </div>
    )
  };
};



export default MainPage;
