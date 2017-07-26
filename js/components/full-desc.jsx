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
    let ageUnit = "";
    let age = 0;
    let sex = "";

    db.on("value", snap => {

      if (snap.val()[id].sex === "f") {
        sex = "kotka";
      } else {
        sex = "kocur";
      };

      if (snap.val()[id].ageMonths >= 12) {
        age = Math.round(snap.val()[id].ageMonths / 12);

        if (age === 1) {
          ageUnit = " rok";
        } else if (age >= 2 && age <= 4){
          ageUnit = " lata";
        } else {
          ageUnit = " lat";
        };

      } else {
        age = snap.val()[id].ageMonths;

        if (snap.val()[id].ageMonths === 1) {
          ageUnit = " miesiąc";
        } else if (snap.val()[id].ageMonths >= 2 && snap.val()[id].ageMonths <=4){
          ageUnit = " miesiące";
        } else {
          ageUnit = " miesięcy";
        };

      };

      this.setState({
        name: snap.val()[id].name,
        keywords: snap.val()[id].keywords,
        sex: sex,
        age: age + ageUnit,
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
