import React from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class Contact extends React.Component {
  render() {
    return (
      <section className="row" id="contact">

        <div className="col-xs-12">
          <div className="row flex">

            <div className="col-md-4 col-lg-4 flex entrance-img">
              <div className="tile">
                <img src="images/koteria-budynek.png" alt="" />
                <p>wejście do budynku</p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5 flex">
              <div className="tile">
                <div id="map" />
                [google map]
              </div>

            </div>

            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 flex">
              <div className="tile">
                <h1 className="heading">Kontakt</h1>
                <p>
                  <strong>Ośrodek KOTERIA</strong><br />
                  ul. Chrzanowskiego 13<br />
                  04-392 Warszawa<br />
                  koteria@argos.org.pl<br />
                  tel. 535 870 225
                  <br /><br />
                  <strong>Zapraszamy:</strong><br />
                  pon-pt: 9.00 - 19.00;<br />
                  sob: 9.00 - 13.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
