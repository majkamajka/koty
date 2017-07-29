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

  // componentDidMount() {
  //   this.setState({
  //     filters: this.props.activeFilters
  //   });
  //   let db = fb.database().ref("/");
  //   let cards = [];
  //
  //   db.on("value", snap => {
  //
  //     for (let i = 0; i < snap.val().length; i++) {
  //       let sexIcon = "";
  //       if (snap.val()[i].sex === "m") {
  //         sexIcon = "fa fa-mars";
  //       } else {
  //         sexIcon = "fa fa-venus";
  //       };
  //
  //       let path = "/cat-profile/" + [i];
  //
  //
  //       console.log(this.state.filters.indexOf("sexFemale"));
  //
  //       if (this.state.filters.indexOf("sexFemale") >= 0) {
  //         console.log("dsfsdf");
  //       }
  //
  //
  //       cards.push(
  //         <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={i}>
  //           <div className="tile cat-card">
  //             <div className="thumbnail">
  //               <img src={snap.val()[i].mainPhoto} alt="" className="cat-img"/>
  //             </div>
  //             <h1>
  //               {snap.val()[i].name}&nbsp;<i className={sexIcon} aria-hidden="true"></i>
  //             </h1>
  //             <p id="keywords">
  //               {snap.val()[i].keywords}
  //             </p>
  //             <p className="cat-short-desc">
  //               {snap.val()[i].desc.substring(0, 200) + "..."}
  //             </p>
  //             <Link to={path}>
  //               <button className="button more">więcej</button>
  //             </Link>
  //           </div>
  //         </div>
  //       )
  //     }
  //
  //     this.setState({
  //       cards: cards
  //     });
  //   });
  //
  // }
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //   this.setState({
  //     filters: nextProps
  //   });
  //   console.log(this.state.filters);
  //   return true;
  // }

  render() {
    console.log(this.props.activeFilters);
    let db = fb.database().ref("/");
    let cards = [];
    let indexes = [];


    db.on("value", snap => {


      for (let i = 0; i < snap.val().length; i++) {

        if (this.props.activeFilters.indexOf("sexMale") >= 0 && snap.val()[i].sex === "m" && indexes.indexOf(i) < 0) {
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
          indexes.push(i);
        }


        if (this.props.activeFilters.indexOf("sexFemale") >= 0 && snap.val()[i].sex === "f" && indexes.indexOf(i) < 0) {
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
          indexes.push(i);
        }

        if (this.props.activeFilters.indexOf("ageYoung") >= 0 && snap.val()[i].ageMonths < 12  && indexes.indexOf(i) < 0) {
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
          indexes.push(i);
        }

        if (this.props.activeFilters.indexOf("ageAdult") >= 0 && snap.val()[i].ageMonths >= 12 && snap.val()[i].ageMonths < 60 && indexes.indexOf(i) < 0) {
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
          indexes.push(i);
        }

        if (this.props.activeFilters.indexOf("ageSenior") >= 0 && snap.val()[i].ageMonths >= 60 && indexes.indexOf(i) < 0) {
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
          indexes.push(i);
        }


      }

    });

    return (
      <div className="row" id="results">
        {cards}
      </div>
    )
  };
};

export default CatCards;
