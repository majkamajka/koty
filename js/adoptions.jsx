import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";

import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

import SortBar from "./components/sortBar.jsx";
import FilterMenu from "./components/filterMenu.jsx";
import SearchResults from "./components/searchResults.jsx";

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
      }
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
          <SearchResults filters={this.state.filters}/>

        </section>


      </div>
    )
  };
};



export default AdoptionsPage;
