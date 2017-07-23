import React from "react";
import ReactDOM from 'react-dom';
import * as Firebase from "firebase";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';
import CatCard from "./catCard.jsx";



class SearchResults extends React.Component {


  render () {
    return (
      <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
        <div className="row" id="results">

          <CatCard dbId="1" />
          <CatCard dbId="2" />
          <CatCard dbId="3" />
          <CatCard dbId="4" />
          <CatCard dbId="5" />
          <CatCard dbId="6" />
          <CatCard dbId="7" />
          <CatCard dbId="8" />
          <CatCard dbId="9" />
          <CatCard dbId="10" />
          <CatCard dbId="11" />
          <CatCard dbId="12" />
          <CatCard dbId="13" />
          <CatCard dbId="14" />

             <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="tile cat-card">
                <div className="thumbnail">
                  <img src="images/catslider.jpg" alt="" className="cat-img"/>
                </div>
                  <h1>Mruczuś <i className="fa fa-mars" aria-hidden="true"></i></h1>
                  <p id="keywords">keywords</p>

                    <p className="cat-short-desc">
                      Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba cenić, ten Bonapart figurka! Bez Suworowa to mówiąc, że tytuły przychodzą z nadzwyczajnej ich lekkości woły właśnie z brylantów oprawa a prędki nie
                    </p>
                    <Link to="cat-profile"><button className="button more">więcej</button></Link>
              </div>
            </div>



        </div>
      </div>
    )
  };
};


export default SearchResults;
