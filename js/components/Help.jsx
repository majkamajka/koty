import React from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class Help extends React.Component {
  render() {
    return (
      <section className="row another" id="other-help">
        <div className="col-xs-12">
          <div className="row flex">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 flex">
              <div className="tile">
                <h1 className="heading">sdfsdfsd</h1>
                <p>
                  rabią sporu. I Wojski ubierze który teraz jeśli zechcesz, i on może też same obicia z kim był, lecz każdemu inna. Bo nie był żonaty a on zmienił się echem i widać z postawy lecz latem nic to mówiąc, że zamczysko wzięliśmy w porządku pilnował. Bo nie mógł. Jak mnie radą do pocałowani i krwi tonęła, gdy
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 flex">
              <div className="tile">
                <h1 className="heading">Jak możesz pomóc?</h1>
                <ul className="square-list">
                  <li>bezpośrednia wpłata na rzecz ośrodka [paypal]</li>
                  <li>zakupy na zooplus poprzez reflink [klik]</li>
                  <li>dostarczenie nam karmy, środków czystości etc.</li>
                  <li>bycie domem tymczasowym [więcej info]</li>
                  <li>przekazać 1% podatku</li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 flex">
              <div className="tile">
                <ul className="square-list">
                  <li>[paypal link]</li>
                  <li>[zooplus link]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Help;
