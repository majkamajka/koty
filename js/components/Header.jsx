import React from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: location
    };
  }

  scrollToElement = (elemId) => {
    event.preventDefault();
    if (this.state.location.href === `${this.state.location.origin}/#/`) {
      document.getElementById(elemId).scrollIntoView();
    }

  }



  render() {
    return (
      <div className="bar">
        <header className="row">
          <IndexLink to="/">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 logo">
              <h1>Adopcje</h1>
            </div>
          </IndexLink>

          <nav className="col-xs-8 col-sm-8 col-md-8 col-lg-8 menu">
            <ul id="menu-desktop">
              <IndexLink to="/adoptions">
                <li>KOTY DO<br />ADOPCJI</li>
              </IndexLink>
              <IndexLink to="/">
                <li onClick={() => this.scrollToElement('about')}>O KOTERII</li>
              </IndexLink>
              <IndexLink to="/">
                <li onClick={() => this.scrollToElement('virtual-adoption')}>WIRTUALNA<br />ADOPCJA</li>
              </IndexLink>
              <IndexLink to="/">
                <li onClick={() => this.scrollToElement('other-help')}>JAK<br />POMÓC</li>
              </IndexLink>
              <IndexLink to="/">
                <li onClick={() => this.scrollToElement('contact')}>KONTAKT</li>
              </IndexLink>
            </ul>

            <div className="hamburger">
              <div id="menuToggle">
                <input type="checkbox" />
                <span />
                <span />
                <span />
                <ul id="menu">
                  <IndexLink to="/adoptions"><li>Koty do adopcji</li></IndexLink>
                  <IndexLink to="/"><li onClick={() => this.scrollToElement('about')}>O Koterii</li></IndexLink>
                  <IndexLink to="/"><li onClick={() => this.scrollToElement('virtual-adoption')}>Wirtualna adopcja</li></IndexLink>
                  <IndexLink to="/"><li onClick={() => this.scrollToElement('other-help')}>Jak pomóc</li></IndexLink>
                  <IndexLink to="/"><li onClick={() => this.scrollToElement('contact')}>Kontakt</li></IndexLink>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
