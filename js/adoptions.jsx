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
      filters: ["sexMale", "sexFemale", "ageYoung", "ageAdult", "ageSenior", "notAdopted", "ill", "urgent"],
      //activeFilters: ["sexMale", "sexFemale", "ageYoung", "ageAdult", "ageSenior", "notAdopted", "ill", "urgent"]
    }
  }


  receiveFilters = (filters) => {
    this.setState({
      filters: filters
    })
  }

  render () {
    return (
      <div className="container">

        <SortBar />

        <div className="black-blend hidden"></div>

        <section className="row" id="results-container">

          <FilterMenu receiveFilters={this.receiveFilters}/>
          <SearchResults activeFilters={this.state.filters}/>

        </section>


      </div>
    )
  };
};



export default AdoptionsPage;
