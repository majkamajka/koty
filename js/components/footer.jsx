import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class Footer extends React.Component {
  render () {
    return (
      <footer className="row" id="footer">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <ul>
            <li>Ośrodek KOTERIA</li>
            <li>ul. Chrzanowskiego 13</li>
            <li>Warszawa</li>
            <li>535 870 225</li>
            <li>funcacja ARGOS:<br/>Bank PEKAO SA 47 1240 6133 1111 0000 4808 5915</li>
          </ul>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          dfsdf
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 social-media">
          <p>Koteria:</p>
          <ul>
            <li><a href="https://www.facebook.com/KoteriaOrgPl/?ref=br_rs"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li><a href="http://www.koteria.org.pl/index.htm"><i className="fa fa-desktop" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </footer>
    )
  };
};

export default Footer;
