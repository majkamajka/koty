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
    //event.preventDefault();

    const myPromise = new Promise((resolve, reject) => {
        resolve(hashHistory.push('/'));
    });

    myPromise.then(console.log(elemId))
    .then(console.log(document.body))
    .then(console.log(document.getElementById(elemId))) /// dlaczegoo null?! ;(
    .then(document.getElementById(elemId).scrollIntoView())

    //console.log(location);

    //scrollIntoView());


    // if (this.state.location.href === `${this.state.location.origin}/#/`) {
    //   console.log("xxxx");
    //   document.getElementById(elemId).scrollIntoView();
    // }
  }

  menuDisplay = () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.classList.toggle("inside");
    hamburgerMenu.classList.toggle("outside");
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

                <li onClick={() => this.scrollToElement('about')}>O KOTERII</li>

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

          </nav>
          <div id="hamburger" onClick={this.menuDisplay}>x</div>
            <ul id="hamburger-menu" className="inside">
              <IndexLink to="/adoptions"><li>Koty do adopcji</li></IndexLink>
              <IndexLink to="/"><li onClick={() => this.scrollToElement('about')}>O Koterii</li></IndexLink>
              <IndexLink to="/"><li onClick={() => this.scrollToElement('virtual-adoption')}>Wirtualna adopcja</li></IndexLink>
              <IndexLink to="/"><li onClick={() => this.scrollToElement('other-help')}>Jak pomóc</li></IndexLink>
              <IndexLink to="/"><li onClick={() => this.scrollToElement('contact')}>Kontakt</li></IndexLink>
            </ul>



        </header>

      </div>
    );
  }
}

export default Header;


// <div className="hamburger">
//   <div id="menuToggle">
//     <input type="checkbox" />
//     <span />
//     <span />
//     <span />
//
//   </div>
// </div>
