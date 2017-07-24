import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

import GalleryThumbnail from "./galleryThumbnail.jsx";

class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bigImgPath: "images/catslider.jpg"
    }
  }

  setBigPhoto = (event) => {
    console.log("ddasa");
    this.setState({
      bigImgPath: this.props.imgPath
    })
  }

  render () {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 gallery">

        <div className="photo-thumbnails">

          <GalleryThumbnail imgPath="images/catslider.jpg" onClick={this.setBigPhoto}/>
          <GalleryThumbnail imgPath="images/heavy.png" onClick={this.setBigPhoto} />
          <GalleryThumbnail imgPath="images/catpaws.jpg" onClick={this.setBigPhoto} />

      </div>

      <div id="big-photo" className="big-photo">
        <img src={this.state.bigImgPath} alt="" />
      </div>
    </div>
    )
  };
};

export default Gallery;
