import React from "react";
import * as Firebase from "firebase";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';
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

    db.on("value" , snap => {
      this.setState({
        name: snap.val()[id].name,
        keywords: snap.val()[id].features,
        sex: snap.val()[id].sex,
        age: snap.val()[id].ageMonths,
        fullDesc: snap.val()[id].desc
      })
    })
  };


  render () {

    return (
      <div className="cat-full-desc">
        <h1 className="heading">{this.state.name}</h1>

        <p>keywords: {this.state.keywords}</p>
        <p>płeć: {this.state.sex}</p>
        <p>wiek: {this.state.age} miesięcy</p>
        <p>
          {this.state.fullDesc}
        </p>
      </div>
    )
  };
};

export default FullDesc;
