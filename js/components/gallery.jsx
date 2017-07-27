import React from "react";
import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';
import fb from "./db.js";
import GalleryThumbnails from "./galleryThumbnails.jsx";

class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bigImgPath: "",
      id: this.props.pathId,
      galleryExists: false
    }
  }

  componentDidMount() {
    let db = fb.database().ref("/");
    let id = this.props.pathId;

    db.on("value", snap => {

      if (snap.val()[id].gallery) {
        this.setState({
          galleryExists: true
        })
      } else {
        this.setState({
          galleryExists: false
        })
      };

      this.setState({
        bigImgPath: snap.val()[id].mainPhoto
      })
    });
  }

  setBigPhoto = (image) => {
    this.setState({
      bigImgPath: image
    })
  }

  render() {
    if (this.state.galleryExists) {
      return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 gallery">
          <GalleryThumbnails setBigPhoto={this.setBigPhoto} pathId={this.state.id}/>
          <div id="big-photo" className="big-photo">
            <img src={this.state.bigImgPath} alt=""/>
          </div>
        </div>
      )
    } else {
      return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 gallery">
          <div id="big-photo" className="big-photo">
            <img src={this.state.bigImgPath} alt=""/>
          </div>
        </div>
      )
    }
  };
};

export default Gallery;
