import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";

import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

import Header from "./components/header.jsx";
import SortBar from "./components/sortBar.jsx";
import FilterMenu from "./components/filterMenu.jsx";
import SearchResults from "./components/searchResults.jsx";
import Footer from "./components/footer.jsx";

import "../scss/style.scss";







class App extends React.Component {
  render () {
    return (
      <div className="container">

        <Header />
        <SortBar />

        <div className="black-blend hidden"></div>
        <section className="row" id="results-container">

          <FilterMenu />
          <SearchResults />

        </section>

        <Footer />

      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById("app"));
