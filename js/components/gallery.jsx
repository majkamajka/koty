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

  setBigPhoto = (image) => {

    this.setState({
      bigImgPath: image
    })
  }

  render () {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 gallery" >

        <div className="photo-thumbnails">

          <GalleryThumbnail imgPath="images/catslider.jpg" setBigPhoto={this.setBigPhoto}/>
          <GalleryThumbnail imgPath="images/heavy.png" setBigPhoto={this.setBigPhoto}/>
          <GalleryThumbnail imgPath="images/catpaws.jpg" setBigPhoto={this.setBigPhoto} />

      </div>

      <div id="big-photo" className="big-photo">
        <img src={this.state.bigImgPath} alt="" />
      </div>
    </div>
    )
  };
};

export default Gallery;
