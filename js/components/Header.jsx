import React from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: location,
    };
  }

  menuDisplay = () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.classList.toggle('inside');
    hamburgerMenu.classList.toggle('outside');
  };

  hamburgerAnimate = () => {
    const spans = document.querySelectorAll('#hamburger span');
    spans[0].classList.toggle('rotate-upper');
    spans[1].classList.toggle('hidden-span');
    spans[2].classList.toggle('rotate-bottom');
  }

  onClick = () => {
    this.menuDisplay();
    this.hamburgerAnimate();
  }

  scrollToElement = (elemId) => {
    //event.preventDefault();

    const goHome = new Promise((resolve, reject) => {
      if (this.state.location.href !== `${this.state.location.origin}/#/`) {
        resolve(hashHistory.push('/'));
      } else {
        resolve();
      }

    });

    goHome.then(console.log(elemId))
          .then(console.log(document.body))
          .then(console.log(document.getElementById(elemId))) // dlaczegoo null?! ;(
          .then(document.getElementById(elemId).scrollIntoView());

    // console.log(location);

    // scrollIntoView());

    // if (this.state.location.href === `${this.state.location.origin}/#/`) {
    //   console.log("xxxx");
    //   document.getElementById(elemId).scrollIntoView();
    // }
  }

  render() {
    return (
      <div className="bar">
        <header className="row">
          <IndexLink to="/">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 logo">
              <h1>Adopcje</h1>
            </div>
          </IndexLink>
          <nav className="col-md-8 col-lg-8 menu">
              <ul id="menu-desktop">
                <IndexLink to="/adoptions">
                  <li id="adopt-link">KOTY DO<br />ADOPCJI</li>
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
          <div id="hamburger" onClick={this.onClick}>
            <span />
            <span />
            <span />
          </div>

          <ul id="hamburger-menu" className="outside">
            <h1 className="heading">Menu</h1>
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
