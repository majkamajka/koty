import React from "react";
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

class FullDesc extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      keywords: "",
      sex: "",
      age: "",
      fullDesc: ""
    }
  };

  componentDidMount() {
    let id = this.props.pathId;
    let db = fb.database().ref("/");
    let czas = "";
    let wiek = 0;
    let sex = "";

    db.on("value", snap => {

      if (snap.val()[id].sex === "f") {
        sex = "kotka";
      } else {
        sex = "kocur";
      };

      if (snap.val()[id].ageMonths >= 12) {
        wiek = Math.round(snap.val()[id].ageMonths / 12);
        czas = " years";
      } else {
        wiek = snap.val()[id].ageMonths
        czas = " months"
      };

      this.setState({
        name: snap.val()[id].name,
        keywords: snap.val()[id].features,
        sex: sex,
        age: wiek + czas,
        fullDesc: snap.val()[id].desc
      })
    })
  };

  render() {

    return (
      <div className="cat-full-desc">
        <h1 className="heading">{this.state.name}</h1>
        <p>keywords: {this.state.keywords}</p>
        <p>{this.state.sex}, {this.state.age}</p>
        <p>
          {this.state.fullDesc}
        </p>
      </div>
    )
  };
};

export default FullDesc;
