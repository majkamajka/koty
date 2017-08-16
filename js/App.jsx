import React from 'react';
import ReactDOM from 'react-dom';

import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory,
} from 'react-router';

import NotFound from './components/NotFound.jsx';
import AdoptionsPage from './Adoptions.jsx';
import MainPage from './MainPage.jsx';
import CatProfilePage from './CatProfilePage.jsx';
import Template from './components/Template.jsx';

import '../scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>

        <Route path="/" component={Template}>
          <IndexRoute component={MainPage} />
          <Route path="/adoptions" component={AdoptionsPage} />
          <Route path="/cat-profile/:id" component={CatProfilePage} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
