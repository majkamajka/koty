import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';


class Header extends React.Component {
  render () {
    return (
      <header className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 logo">
        </div>
        <nav className="col-xs-8 col-sm-8 col-md-8 col-lg-8 menu">
          <ul>
            <li>KOTERIA</li>
            <li>WIRTUALNA<br/>ADOPCJA</li>
            <li>POMOC</li>
            <li>KONTAKT</li>
          </ul>
        </nav>
      </header>
    )
  };
};


export default Header;
