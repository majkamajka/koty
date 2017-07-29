import React from "react";
import ReactDOM from 'react-dom';
import * as Firebase from "firebase";
import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';
import fb from "./db.js";

class CatCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      filters: this.props.activeFilters
    }
  }

  componentDidMount() {
    console.log("props " + this.props.activeFilters);
    console.log("state " + this.state.filters);

    let db = fb.database().ref("/");
    let cards = [];

    db.on("value", snap => {

      for (let i = 0; i < snap.val().length; i++) {
        let sexIcon = "";
        if (snap.val()[i].sex === "m") {
          sexIcon = "fa fa-mars";
        } else {
          sexIcon = "fa fa-venus";
        };

        let path = "/cat-profile/" + [i];

        cards.push(
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={i}>
            <div className="tile cat-card">
              <div className="thumbnail">
                <img src={snap.val()[i].mainPhoto} alt="" className="cat-img"/>
              </div>
              <h1>
                {snap.val()[i].name}&nbsp;<i className={sexIcon} aria-hidden="true"></i>
              </h1>
              <p id="keywords">
                {snap.val()[i].keywords}
              </p>
              <p className="cat-short-desc">
                {snap.val()[i].desc.substring(0, 200) + "..."}
              </p>
              <Link to={path}>
                <button className="button more">więcej</button>
              </Link>
            </div>
          </div>
        )
      }

      this.setState({
        cards: cards
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.setState({
      filters: nextProps
    });
    console.log(this.state.filters);
    return true;
  }

  render() {
    console.log(this.props.activeFilters);
    console.log(this.state.filters);
    return (
      <div className="row" id="results">
        {this.state.cards}
      </div>
    )
  };
};

export default CatCards;
