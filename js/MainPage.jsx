import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';


import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

import Title from './components/Title.jsx';
import About from './components/About.jsx';
import VirtualAdoption from './components/VirtualAdoption.jsx';
import Help from './components/Help.jsx';
import Contact from './components/Contact.jsx';

import '../scss/style.scss';

class MainPage extends React.Component {
  render() {
    return (
      <div className="container">
        <Title />
        <About />
        <VirtualAdoption />
        <Help />
        <Contact />
      </div>
    );
  }
}

export default MainPage;
