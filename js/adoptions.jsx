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



class AdoptionsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filters: "",
      activeFilters: ""
    }
  }


  receiveFilters = (filters) => {
    this.setState({
      filters: filters
    })
    let x = this.state.filters;
    let activeFilters = [];

    for (let i = 0; i < Object.values(x).length; i++) {
      if (Object.values(x)[i]) {
        activeFilters.push(Object.keys(x)[i]);
      }
    }

    this.setState({
      activeFilters: activeFilters
    })
  }

  render () {
    return (
      <div className="container">

        <SortBar />

        <div className="black-blend hidden"></div>

        <section className="row" id="results-container">

          <FilterMenu logFilters={this.receiveFilters}/>
          <SearchResults activeFilters={this.state.activeFilters}/>

        </section>


      </div>
    )
  };
};



export default AdoptionsPage;
