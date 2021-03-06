import React from 'react';
import * as firebase from 'firebase';

import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory,
} from 'react-router';

import Gallery from './components/Gallery.jsx';
import FullDesc from './components/Full-desc.jsx';
import Donations from './components/Donations.jsx';

import '../scss/style.scss';

// IMPORTANT! removed all https from all links, as it wasn't working. needs to be fixed!

class CatProfilePage extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="row" id="cat-full-profile">
          <Gallery pathId={this.props.params.id} />
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 cat-full-info">
            <FullDesc pathId={this.props.params.id} />
            <Donations />
          </div>
        </section>
      </div>
    );
  }
}

export default CatProfilePage;
