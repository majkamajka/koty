import React from "react";
import ReactDOM from 'react-dom';
import * as Firebase from "firebase";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';


const config = {
  apiKey: "AIzaSyBD5bKLZyfDUTHWSQrMdOU6Z6tsreYaak4",
  authDomain: "koty-c79fd.firebaseapp.com",
  databaseURL: "https://koty-c79fd.firebaseio.com",
  projectId: "koty-c79fd",
  storageBucket: "koty-c79fd.appspot.com",
  messagingSenderId: "511321533732"
};

const fb = Firebase.initializeApp(config);

class CatCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sex: "",
      desc: "",
      img: "",
      keywords: "",
      dbId: this.props.dbId
    }
  }

  componentDidMount() {
    let refNumber = "/" + this.props.dbId;
    let db = fb.database().ref(refNumber);
    
    db.on("value" , snap => {
      let sexIcon ="";
      if (snap.val().sex === "m") {
        sexIcon = "fa fa-mars";
      } else {
        sexIcon = "fa fa-venus";
      };

      this.setState({
        name: snap.val().name,
        sex: sexIcon,
        desc: snap.val().desc.substring(0, 200) + "...",
        img: snap.val().mainPhoto,
        keywords: snap.val().features
      })
    })
  }

  render () {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div className="tile cat-card">

          <div className="thumbnail">
            <img src={this.state.img} alt="" className="cat-img"/>
          </div>

          <h1>
            {this.state.name}&nbsp;
            <i className={this.state.sex} aria-hidden="true"></i>
          </h1>

          <p id="keywords">
            {this.state.keywords}
          </p>

          <p className="cat-short-desc">
              {this.state.desc}
          </p>



          <Link to="/cat-profile"><button className="button more">więcej</button></Link>

        </div>
      </div>

    )
  };
};


export default CatCard;
