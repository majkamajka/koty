import React from "react";
import {IndexLink} from "react-router";
import Footer from "./footer.jsx";

class Template extends React.Component {
  render() {
    return (
      <div>
      <header className="row">
        <IndexLink to="/">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 logo">
            <h1>Adopcje</h1>
          </div>
        </IndexLink>

        <nav className="col-xs-8 col-sm-8 col-md-8 col-lg-8 menu">
          <ul id="menu-desktop">
            <IndexLink to="/adoptions" activeClassName="active-menu-link"><li>KOTY DO<br/>ADOPCJI</li></IndexLink>
            <IndexLink to="/" activeClassName="active-menu-link"><li>KOTERIA</li></IndexLink>
            <IndexLink to="/" activeClassName="active-menu-link"><li>WIRTUALNA<br/>ADOPCJA</li></IndexLink>
            <IndexLink to="/" activeClassName="active-menu-link"><li>POMOC</li></IndexLink>
            <IndexLink to="/" activeClassName="active-menu-link"><li>KONTAKT</li></IndexLink>
          </ul>

          <div className="hamburger">
            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
              <ul id="menu">
                <IndexLink to="/adoptions"><li>Koty do adopcji</li></IndexLink>
                <IndexLink to="/"><li>Koteria</li></IndexLink>
                <IndexLink to="/"><li>Wirtualna adopcja</li></IndexLink>
                <IndexLink to="/"><li>Pomoc</li></IndexLink>
                <IndexLink to="/"><li>Kontakt</li></IndexLink>
              </ul>
            </div>
          </div>

        </nav>
      </header>
      
      {this.props.children}

      <Footer/>
</div>
    )
  }
}

export default Template;
