import React from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <div className="bar">
        <footer className="row" id="footer">
          <div className="col-xs-7 col-sm-7 col-md-6 col-lg-6">
            <ul>
              <li>Ośrodek KOTERIA</li>
              <li>ul. Chrzanowskiego 13</li>
              <li>Warszawa</li>
              <li>535 870 225</li>
              <li>fundacja ARGOS:<br />Bank PEKAO SA 47 1240 6133 1111 0000 4808 5915</li>
            </ul>
          </div>

          <div className="col-xs-5 col-sm-5 col-md-6 col-lg-6 social-media">
            <ul>
              <li><a href="https://www.facebook.com/KoteriaOrgPl/?ref=br_rs"><i className="fa fa-facebook-official" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
              <li><a href="http://www.koteria.org.pl/index.htm"><i className="fa fa-desktop" aria-hidden="true" /></a></li>
            </ul>
          </div>
        </footer>

        <div className="bar-copy">
          <div className="row copy">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              &copy; 2017 majkamajka
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 git">
              <a href="https://github.com/majkamajka">
                <span>&nbsp;/majkamajka</span>
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
