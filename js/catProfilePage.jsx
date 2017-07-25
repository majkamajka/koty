import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";

import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

import Header from "./components/header.jsx";
import Gallery from "./components/gallery.jsx";
import FullDesc from "./components/full-desc.jsx";
import Donations from "./components/donations.jsx";
import Footer from "./components/footer.jsx";

import "../scss/style.scss";

// IMPORTANT! removed all https from all links, as it wasn't working. needs to be fixed!

class CatProfilePage extends React.Component {

componentDidMount () {
  console.log(this.props.params.id);
}


  render () {
    return (
      <div className="container">
        <Header />
        <section className="row" id="cat-full-profile">
          <Gallery />
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 cat-full-info">
            <FullDesc pathId={this.props.params.id}/>
            <Donations />
          </div>
        </section>
        <Footer />
      </div>
    )
  };
};



export default CatProfilePage;
