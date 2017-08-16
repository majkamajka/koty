import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";

import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

import SortBar from "./components/SortBar.jsx";
import FilterMenu from "./components/FilterMenu.jsx";
import SearchResults from "./components/SearchResults.jsx";

import "../scss/style.scss";



class AdoptionsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filters: {
        sexMale: true,
        sexFemale: true,
        ageYoung: true,
        ageAdult: true,
        ageSenior: true,
        notAdopted: true,
        ill: true,
        urgent: true,
      },
      sortBy: "adoptions"
    }
  }


  receiveFilters = (filters) => {
    this.setState({
      filters: filters
    })
  };

  receiveSortBy = (sort) => {
    this.setState({
      sortBy: sort
    });
  };

  render () {
    return (
      <div className="container">

        <SortBar receiveSortBy={this.receiveSortBy}/>

        <div className="black-blend hidden"></div>

        <section className="row" id="results-container">

          <FilterMenu receiveFilters={this.receiveFilters}/>
          <SearchResults filters={this.state.filters} sortBy={this.state.sortBy}/>

        </section>


      </div>
    )
  };
};



export default AdoptionsPage;
