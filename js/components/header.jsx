import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';


class Header extends React.Component {
  render () {
    return (
      <header className="row">
        <Link to="/">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 logo">
            <h1>Adopcje</h1>
          </div>
        </Link>

        <nav className="col-xs-8 col-sm-8 col-md-8 col-lg-8 menu">
          <ul id="menu-desktop">
            <IndexLink to="/adoptions" activeClassName="active-menu-link"><li>KOTY DO<br/>ADOPCJI</li></IndexLink>
            <a href="#about"><li>KOTERIA</li></a>
            <a href="#virtual-adoption"><li>WIRTUALNA<br/>ADOPCJA</li></a>
            <a href="#other-help"><li>POMOC</li></a>
            <a href="#contact"><li>KONTAKT</li></a>
          </ul>

          <div className="hamburger">
            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
              <ul id="menu">
                <a href="#about"><li>Koteria</li></a>
                <a href="#virtual-adoption"><li>Wirtualna adopcja</li></a>
                <a href="#other-help"><li>Pomoc</li></a>
                <a href="#contact"><li>Kontakt</li></a>
              </ul>
            </div>
          </div>

        </nav>
      </header>
    )
  };
};


export default Header;
