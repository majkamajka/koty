import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class Donations extends React.Component {
  render () {
    return (
      <div className="help">
        <h2 className="heading">Jak możesz pomóc?</h2>
        <ol>
          <li>wirtualna adopcja:<br/>
            [paypal subscription button]
          </li>

          <li>jednorazowa wpłata:
            <br/>
              [paypal donation button]
          </li>
          <li>
            prawdziwa adopcja:<br/>
            <a href="www.koteria.org.pl/adopcje/adopcje.htm"><button className="button">więcej info</button></a>
            <a href="www.koteria.org.pl/dok/umowa_adop.pdf"><button className="button">umowa adopcyjna</button></a>
          </li>
          <li>
            dom tymczasowy:<br/>
            <a href="www.koteria.org.pl/adopcje/dom-tymczasowy.htm"><button className="button">więcej info</button></a>

          </li>

        </ol>
    </div>
    )
  };
};

export default Donations;
