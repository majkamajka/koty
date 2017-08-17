import React from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class Title extends React.Component {
  render() {
    return (
      <div className="row main">
        <section className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <p>Nie masz czasu?<br />
          Nie masz warunków?<br />
          Masz serce?</p>
          <h1>Adoptuj wirtualnie!</h1>
          <h3>Koty czekają na Twoją pomoc</h3>
          <div>
            <Link to="/adoptions">
              <button className="button">Sprawdź</button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Title;
