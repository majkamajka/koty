import React from "react";
import ReactDOM from 'react-dom';
import * as Firebase from "firebase";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';
import CatCards from "./CatCards.jsx";
import fb from "./Db.js";



class SearchResults extends React.Component {


  render () {
    return (
      <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
          <CatCards filters={this.props.filters} sortBy={this.props.sortBy}/>
      </div>
    )
  };
};


export default SearchResults;
