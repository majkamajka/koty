import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';
import fb from "./db.js";
import GalleryThumbnail from "./galleryThumbnail.jsx";

class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bigImgPath: "",
      id: this.props.pathId
    }
  }

  componentDidMount() {
    let db = fb.database().ref("/");
    let id = this.props.pathId;
    db.on("value", snap => {
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

  render () {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 gallery" >

        <div className="photo-thumbnails">

          <GalleryThumbnail setBigPhoto={this.setBigPhoto} pathId={this.state.id}/>

      </div>

      <div id="big-photo" className="big-photo">
        <img src={this.state.bigImgPath} alt="" />
      </div>
    </div>
    )
  };
};

export default Gallery;

// <GalleryThumbnail imgPath="images/catslider.jpg" setBigPhoto={this.setBigPhoto}/>
// <GalleryThumbnail imgPath="images/heavy.png" setBigPhoto={this.setBigPhoto}/>
// <GalleryThumbnail imgPath="images/catpaws.jpg" setBigPhoto={this.setBigPhoto} />
