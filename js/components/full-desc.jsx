import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class FullDesc extends React.Component {
  render () {
    return (
      <div className="cat-full-desc">
        <h1 className="heading">Mruczek</h1>

        <p>kategorie: </p>
        <p>płeć: kocur</p>
        <p>wiek: 2 lata</p>
        <p>
          full desc: Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba cenić, ten Bonapart figurka! Bez Suworowa to mówiąc, że tytuły przychodzą z nadzwyczajnej ich lekkości woły właśnie z brylantów oprawa a prędki nie
        </p>
      </div>
    )
  };
};

export default FullDesc;
